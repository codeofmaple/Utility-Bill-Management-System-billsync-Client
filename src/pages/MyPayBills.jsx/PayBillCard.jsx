import React from 'react';
import { FiEdit, FiTrash2, FiMail, FiDollarSign, FiHome, FiPhone, FiCalendar } from "react-icons/fi";


const PayBillCard = ({ bill, index, openEditModal, deleteBill }) => {
    return (
        <div key={bill._id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                    <span className="bg-linear-to-r from-cyan-400 to-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                        {index + 1}
                    </span>
                    <h3 className="font-semibold text-gray-800">{bill.username}</h3>
                </div>
                <div className="flex gap-1">
                    <button
                        className="btn btn-ghost btn-sm btn-square text-blue-600"
                        onClick={() => openEditModal(bill)}
                    >
                        <FiEdit className="text-lg" />
                    </button>
                    <button
                        className="btn btn-ghost btn-sm btn-square text-red-600"
                        onClick={() => deleteBill(bill)}
                    >
                        <FiTrash2 className="text-lg" />
                    </button>
                </div>
            </div>

            <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                    <FiMail className="text-cyan-500" />
                    <span className="truncate">{bill.email}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <FiDollarSign className="text-green-500" />
                    <span>৳{(+bill.amount || 0).toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <FiHome className="text-purple-500" />
                    <span className="truncate">{bill.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <FiPhone className="text-blue-500" />
                    <span>{bill.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <FiCalendar className="text-orange-500" />
                    <span>{new Date(bill.date).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default PayBillCard;