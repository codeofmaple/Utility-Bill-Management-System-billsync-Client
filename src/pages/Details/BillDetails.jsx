import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { RxCross1 } from "react-icons/rx";
import useSecureAxios from "../../hooks/useSecureAxios";
import ErrorPage from "../ErrorPage";

const BillDetails = () => {
  const { user, setLoading, loading } = useAuth()
  const { id } = useParams();
  const secureAxios = useSecureAxios();
  const [bill, setBill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    phone: "",
    additionalInfo: "",
  });
  // get bill
  useEffect(() => {
    secureAxios
      .get(`/bills/${id}`)
      .then((res) => setBill(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [secureAxios, id, setLoading]);

  if (loading) return (
    <CustomLoading pageName="BillSync | Bill Details"></CustomLoading>
  );

  // simple loader
  if (!bill) {
    return <ErrorPage></ErrorPage>;
  }

  const billMonth = new Date(bill.date).getMonth();
  const currentMonth = new Date().getMonth();
  const isCurrentMonth = billMonth === currentMonth;

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentData = {
      ...formData,
      email: user?.email,
      billId: bill._id,
      amount: bill.amount,
      date: new Date().toISOString(),
    };

    console.log(paymentData)

    secureAxios.post("/my-bills", paymentData)
      .then(() => {
        toast.success("Bill payment successful!");
        setIsModalOpen(false);
      })
      .catch(() => toast.error("Payment failed! Please try again."));
  };

  return (
    <div
      className=" flex justify-center items-center py-8 md:py-16 px-4 md:px-0 main-container"
    >
      <div className="max-w-4xl w-full bg-white/90 rounded-3xl shadow-lg overflow-hidden border border-white/20">
        {/* img */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className=" aspect-video overflow-hidden"
        >
          <img
            src={bill.image}
            alt={bill.title}
            className="h-full w-full object-fill"
          />
        </motion.div>

        {/* details */}
        <div className="p-8 text-gray-800">
          <h1 className="text-3xl inline-block text-center font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-purple-500 mb-3">
            {bill.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-2">
              <FaMoneyBillWave className="text-green-500" />
              <strong>Amount: </strong> ${bill.amount}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-cyan-500" />
              {new Date(bill.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-purple-500" />
              {bill.location}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Category:</strong> {bill.category}
          </p>

          <p className="text-gray-700 leading-relaxed">{bill.description}</p>

          {/* btn */}
          <div className="mt-8">
            <button
              onClick={() => setIsModalOpen(true)}
              disabled={!isCurrentMonth}
              className={`px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-cyan-500/10 ${isCurrentMonth
                ? "bg-linear-to-r from-cyan-400 to-purple-500 hover:shadow-xl hover:scale-[1.02]"
                : "bg-gray-400 cursor-not-allowed"
                }`}
            >
              {isCurrentMonth ? "Pay Bill" : "Cannot Pay — Not Current Month"}
            </button>
          </div>
        </div>
      </div>



      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[rgba(5,0,20,0.8)] backdrop-blur-sm flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full max-w-lg my-4 rounded-2xl shadow-[0_0_25px_rgba(150,90,255,0.3)] relative
                   bg-linear-to-br from-[#1a0028]/90 to-[#0a0018]/90 border border-purple-700/40
                   p-6 sm:p-8 max-h-[calc(100vh-30px)] overflow-auto text-gray-100"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-4 rounded-full p-1 hover:bg-white/10 transition"
              >
                <RxCross1 />
              </button>

              <h2 className="text-2xl font-extrabold text-center mb-6
                       bg-linear-to-r from-cyan-400 to-purple-500
                       bg-clip-text text-transparent">
                Pay Your Bill
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={user?.email || ''}
                  readOnly
                  className="w-full p-3 border border-purple-700/30 rounded-lg bg-[#150021]/70 text-gray-200
                       focus:outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-cyan-500/20 placeholder-gray-400"
                />
                <input
                  type="text"
                  value={bill._id}
                  readOnly
                  className="w-full p-3 border border-purple-700/30 rounded-lg bg-[#150021]/70 text-gray-200
                       focus:outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-cyan-500/20"
                />
                <input
                  type="text"
                  value={`$${bill.amount}`}
                  readOnly
                  className="w-full p-3 border border-purple-700/30 rounded-lg bg-[#150021]/70 text-gray-200
                       focus:outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-cyan-500/20"
                />
                <input
                  type="text"
                  value={new Date().toLocaleDateString()}
                  readOnly
                  className="w-full p-3 border border-purple-700/30 rounded-lg bg-[#150021]/70 text-gray-200
                       focus:outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-cyan-500/20"
                />

                <input
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                  className="w-full p-3 border border-purple-700/30 rounded-lg bg-[#150021]/70 text-gray-100
                       focus:outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-cyan-500/20"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                  className="w-full p-3 border border-purple-700/30 rounded-lg bg-[#150021]/70 text-gray-100
                       focus:outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-cyan-500/20"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full p-3 border border-purple-700/30 rounded-lg bg-[#150021]/70 text-gray-100
                       focus:outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-cyan-500/20"
                />
                <textarea
                  name="additionalInfo"
                  placeholder="Additional Info (optional)"
                  value={formData.additionalInfo}
                  onChange={(e) =>
                    setFormData({ ...formData, additionalInfo: e.target.value })
                  }
                  className="w-full p-3 border border-purple-700/30 rounded-lg bg-[#150021]/70 text-gray-100 h-24
                       focus:outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-cyan-500/20"
                />

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2 rounded-lg bg-gray-700/40 hover:bg-gray-600/60 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg text-white font-semibold
                         bg-linear-to-r from-cyan-500 to-purple-600
                         hover:shadow-[0_0_15px_rgba(160,100,255,0.5)]
                         hover:scale-[1.03] transition"
                  >
                    Confirm Payment
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div >
  );
};

export default BillDetails;


