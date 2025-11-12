import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import { Fade, Zoom } from "react-awesome-reveal";
import { FiEdit, FiTrash2, FiDownload, FiFileText, FiDollarSign, FiUser, FiMail, FiHome, FiPhone, FiCalendar } from "react-icons/fi";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export default function MyPayBills() {
    const axios = useAxios();
    const { user } = useAuth();
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingBill, setEditingBill] = useState(null);

    useEffect(() => {
        axios.get("/my-bills")
            .then(r => {
                const billsData = r.data?.bills || r.data || [];
                const filteredBills = user?.email
                    ? billsData.filter(b => b.email === user.email)
                    : billsData;
                setBills(filteredBills);
            })
            .finally(() => setLoading(false));
    }, [axios, user]);

    // download PDF
    const downloadPDF = () => {
        if (!bills.length) return;

        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("MY PAID BILLS REPORT", 105, 20, { align: "center" });

        autoTable(doc, {
            head: [["#", "Username", "Email", "Amount ($)", "Address", "Phone", "Date"]],
            body: bills.map((bill, index) => [
                index + 1,
                bill.username || "",
                bill.email || "",
                (+bill.amount || 0).toFixed(2),
                bill.address || "",
                bill.phone || "",
                new Date(bill.date).toLocaleDateString()
            ]),
            startY: 30,
            styles: { fontSize: 9 },
            headStyles: { fillColor: [6, 182, 212] }
        });

        doc.save("my-paid-bills-report.pdf");
        toast.success("PDF report downloaded successfully!");
    };

    // update bill
    const handleUpdate = e => {
        e.preventDefault();
        const id = editingBill._id;
        const formData = new FormData(e.target);

        const updatedPaidBill = {
            amount: +formData.get('amount'),
            address: formData.get('address'),
            phone: formData.get('phone'),
            date: formData.get('date')
        };

        axios.put(`/my-bills/${id}`, updatedPaidBill)
            .then(data => {
                setBills(bills.map(bill =>
                    bill._id === id ? { ...bill, ...updatedPaidBill } : bill
                ));
                setEditingBill(null);
                document.getElementById('edit_modal').close();
                toast.success("Bill updated successfully!");
            })
            .catch(error => {
                toast.error("Failed to update bill!");
            });
    };

    // delate bill
    const deleteBill = (bill) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
            background: 'oklch(var(--b1))',
            color: 'oklch(var(--bc))'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/my-bills/${bill._id}`)
                    .then(() => {
                        setBills(bills.filter(b => b._id !== bill._id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your bill has been deleted.",
                            icon: "success",
                            background: 'oklch(var(--b1))',
                            color: 'oklch(var(--bc))'
                        });
                    });
            }
        });
    };

    // handle modals
    const openEditModal = (bill) => {
        setEditingBill(bill);
        document.getElementById('edit_modal').showModal();
    };
    const closeEditModal = () => {
        setEditingBill(null);
        document.getElementById('edit_modal').close();
    };

    if (loading) return (
        <div className="min-h-64 flex justify-center items-center">
            <div className="loading loading-spinner loading-lg text-cyan-500"></div>
        </div>
    );

    const totalAmount = bills.reduce((sum, bill) => sum + (+bill.amount || 0), 0);
    const totalBills = bills.length;

    return (
        <div className="min-h-screen bg-base-100 p-4 md:p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* header */}
                <Fade triggerOnce duration={800} onVisibilityChange={(inView) => inView}>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                My Paid Bills
                            </span>
                        </h1>
                        <p className="text-base-content/70 text-lg mb-8">
                            Manage and track all your utility bill payments
                        </p>
                    </div>
                </Fade>

                {/* status */}
                <Fade triggerOnce duration={800} delay={200}>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 bg-base-200/50 p-6 rounded-2xl shadow-sm border border-base-300">
                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-500 mb-4">
                                Payment Summary
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-5 py-3 rounded-full border border-cyan-400/30 bg-linear-to-r from-cyan-500/10 to-purple-500/10 text-base font-semibold">
                                    Total Bills: <span className="text-cyan-500">{totalBills}</span>
                                </div>
                                <div className="px-5 py-3 rounded-full border border-purple-400/30 bg-linear-to-r from-purple-500/10 to-cyan-500/10 text-base font-semibold">
                                    Total Amount: <span className="text-purple-500">${totalAmount.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={downloadPDF}
                            disabled={!bills.length}
                            className={`
                                       flex items-center gap-2 px-6 py-3 rounded-full
                                       bg-linear-to-r from-cyan-500 to-purple-500
                                       text-white font-semibold text-base
                                       border-0 shadow-md transition-all duration-300
                                       hover:from-cyan-600 hover:to-purple-600 hover:shadow-lg hover:scale-105 active:scale-95
                                       ${!bills.length ? 'opacity-50 cursor-not-allowed' : ''}
                                     `}
                        >
                            <FiDownload className="text-lg" />
                            Download Report
                        </button>
                    </div>
                </Fade>

                {/* bills table */}
                <Fade triggerOnce duration={1000} delay={400}>
                    <div className="card bg-base-100 border border-base-300 shadow-xl">
                        <div className="card-body p-0">
                            {bills.length > 0 ? (
                                <div className="overflow-x-auto">
                                    <table className="table table-zebra w-full">
                                        <thead className="bg-base-200">
                                            <tr>
                                                <th className="text-base-content font-bold">#</th>
                                                <th className="text-base-content font-bold">
                                                    <FiUser className="inline mr-2" />
                                                    Username
                                                </th>
                                                <th className="text-base-content font-bold">
                                                    <FiMail className="inline mr-2" />
                                                    Email
                                                </th>
                                                <th className="text-base-content font-bold">
                                                    <FiDollarSign className="inline mr-2" />
                                                    Amount
                                                </th>
                                                <th className="text-base-content font-bold">
                                                    <FiHome className="inline mr-2" />
                                                    Address
                                                </th>
                                                <th className="text-base-content font-bold">
                                                    <FiPhone className="inline mr-2" />
                                                    Phone
                                                </th>
                                                <th className="text-base-content font-bold">
                                                    <FiCalendar className="inline mr-2" />
                                                    Date
                                                </th>
                                                <th className="text-base-content font-bold">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bills.map((bill, index) => (
                                                <tr key={bill._id} className="hover:bg-base-200/50 transition-colors duration-300">
                                                    <td className="font-semibold">{index + 1}</td>
                                                    <td>{bill.username}</td>
                                                    <td className="max-w-xs truncate">{bill.email}</td>
                                                    <td className="font-bold text-green-500">${(+bill.amount || 0).toFixed(2)}</td>
                                                    <td className="max-w-xs truncate">{bill.address}</td>
                                                    <td>{bill.phone}</td>
                                                    <td className="whitespace-nowrap">{new Date(bill.date).toLocaleDateString()}</td>
                                                    <td>
                                                        <div className="flex gap-2">
                                                            <button
                                                                className="btn btn-ghost btn-sm text-cyan-500 hover:text-cyan-600 hover:bg-cyan-500/10 transform transition-all duration-300 hover:scale-110"
                                                                onClick={() => openEditModal(bill)}
                                                            >
                                                                <FiEdit className="text-lg" />
                                                            </button>
                                                            <button
                                                                className="btn btn-ghost btn-sm text-red-500 hover:text-red-600 hover:bg-red-500/10 transform transition-all duration-300 hover:scale-110"
                                                                onClick={() => deleteBill(bill)}
                                                            >
                                                                <FiTrash2 className="text-lg" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <FiFileText className="text-6xl text-base-300 mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold text-base-content mb-2">No Paid Bills Found</h3>
                                    <p className="text-base-content/70">Your paid bills will appear here once you make payments</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Fade>

                {/* modal for updating */}
                <dialog id="edit_modal" className="modal">
                    <div className="modal-box bg-base-100 border border-base-300">
                        {editingBill && (
                            <form onSubmit={handleUpdate}>
                                <h3 className="font-bold text-xl mb-6 text-base-content">
                                    Update Bill Details
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-base-content">Amount ($)</span>
                                        </label>
                                        <input
                                            name="amount"
                                            defaultValue={editingBill.amount}
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            className="input input-bordered w-full bg-base-200 focus:border-cyan-500 transition-colors duration-300"
                                            required
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold text-base-content">Phone</span>
                                        </label>
                                        <input
                                            name="phone"
                                            defaultValue={editingBill.phone}
                                            className="input input-bordered w-full bg-base-200 focus:border-purple-500 transition-colors duration-300"
                                            required
                                        />
                                    </div>

                                    <div className="form-control md:col-span-2">
                                        <label className="label">
                                            <span className="label-text font-semibold text-base-content">Address</span>
                                        </label>
                                        <input
                                            name="address"
                                            defaultValue={editingBill.address}
                                            className="input input-bordered w-full bg-base-200 focus:border-cyan-500 transition-colors duration-300"
                                            required
                                        />
                                    </div>

                                    <div className="form-control md:col-span-2">
                                        <label className="label">
                                            <span className="label-text font-semibold text-base-content">Date & Time</span>
                                        </label>
                                        <input
                                            name="date"
                                            defaultValue={new Date(editingBill.date).toISOString().slice(0, 16)}
                                            type="datetime-local"
                                            className="input input-bordered w-full bg-base-200 focus:border-purple-500 transition-colors duration-300"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="modal-action flex-col sm:flex-row gap-3">
                                    <button
                                        type="button"
                                        className="btn btn-ghost w-full sm:w-auto transform transition-all duration-300 hover:scale-105"
                                        onClick={closeEditModal}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn bg-linear-to-r from-cyan-500 to-purple-500 border-0 text-white hover:from-cyan-600 hover:to-purple-600 w-full sm:w-auto transform transition-all duration-300 hover:scale-105 active:scale-95"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={closeEditModal}>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    );
}