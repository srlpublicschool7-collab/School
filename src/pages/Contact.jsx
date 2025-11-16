import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ Replace this with your actual Google Apps Script Web App URL
  const GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbyTC-0WbRJgR-K4REcEUmum3P9dwGLFCESI9TWhZ8cGGWECRat-FdjUUrk5VXPXyMwLxQ/exec";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send data to Google Sheets
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors", // required for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // ✅ Success toast
      toast.success("✅ Application submitted successfully!", {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        grade: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ Something went wrong. Please try again later.", {
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
        Admission Form
      </h3>

      <div className="max-w-xl mx-auto bg-white shadow-xl p-8 rounded-2xl">
        <ToastContainer />

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
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
            placeholder="Mobile Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            name="grade"
            placeholder="Grade Applying For"
            required
            value={formData.grade}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            placeholder="Tell us about yourself"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 h-28"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${
              loading ? "bg-gray-400" : "bg-blue-800 hover:bg-green-700"
            } text-white text-xl font-semibold py-3 rounded-lg transition-all`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
}
