// src/App.jsx
import React from "react";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Facilities from "./pages/Facilities";
import Fees from "./pages/Fees";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden text-gray-800 flex flex-col">

      {/* 🔵 Layer 1: School theme gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-300"></div>

      {/* 🔵 Layer 2: Slight pattern texture */}
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      ></div>

      {/* 🔵 Layer 3: Soft blur circles (aesthetic background shapes) */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-blue-400 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-pink-300 opacity-30 blur-3xl rounded-full"></div>
      <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-yellow-300 opacity-20 blur-2xl rounded-full"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        <Navbar />
        <ToastContainer />

        <main className="pt-24">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Faculty />
                  <Facilities />
                  <Fees />
                  <Enquiry />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
