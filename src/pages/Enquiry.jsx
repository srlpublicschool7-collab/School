import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Enquiry() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ Use only one correct URL
  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbyO7zh6NBZEYY6ZxYL9xKUG7iAj7YXSahB3KuALHTLtrEkDp0fKBZwTv0eTF4BOiYxSOA/exec";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.success("✅ Your enquiry has been submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });

      // Clear form after submit
      setFormData({ name: "", email: "", phone: "", question: "" });
    } catch (error) {
      console.error("Error:", error);
      toast.error(" Something went wrong. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }

    setLoading(false);
  };

  return (
    <section className="py-16 px-6 md:px-20 ">
      <h3 className="text-3xl font-bold mb-6 text-center text-blue-700">
        General Enquiry
      </h3>
      <div className="max-w-xl mx-auto bg-gray-50 shadow-xl p-8 rounded-2xl relative">
        <ToastContainer />
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="question"
            placeholder="Your Question or Query"
            required
            value={formData.question}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 h-28"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-blue-800 hover:bg-sky-800"
            } text-white text-xl font-semibold py-3 rounded-lg`}
          >
            {loading ? "Submitting..." : "Submit Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
