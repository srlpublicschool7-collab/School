import React from "react";
import { FaSchool, FaStar, FaBook, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-16 px-6 md:px-20 text-center">

      {/* Heading */}
      <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-700">
        About Us
      </h3>

      {/* Description */}
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
        SRL Public School is dedicated to nurturing academic excellence and holistic growth.
        We focus on creating an engaging, joyful, and inspiring learning environment where
        students develop confidence, curiosity, creativity, and leadership for a bright future.
      </p>

      {/* Vision Mission Cards */}
      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition">
          <h4 className="text-2xl font-bold text-blue-700 mb-2">Our Vision</h4>
          <p className="text-gray-600">
            To empower every child with knowledge, discipline, values, and skills
            to become confident global citizens.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition">
          <h4 className="text-2xl font-bold text-blue-700 mb-2">Our Mission</h4>
          <p className="text-gray-600">
            To provide high-quality education through innovative teaching, a safe environment,
            and opportunities for overall personality development.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <h4 className="text-2xl font-bold text-blue-700 mt-14 mb-6">
        Why Choose SRL Public School?
      </h4>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="p-6 bg-blue-100 rounded-xl shadow">
          <FaSchool className="text-4xl text-blue-700 mx-auto mb-4" />
          <p className="font-semibold text-gray-700">Modern Infrastructure</p>
        </div>

        <div className="p-6 bg-blue-100 rounded-xl shadow">
          <FaBook className="text-4xl text-blue-700 mx-auto mb-4" />
          <p className="font-semibold text-gray-700">Smart Teaching Methods</p>
        </div>

        <div className="p-6 bg-blue-100 rounded-xl shadow">
          <FaUsers className="text-4xl text-blue-700 mx-auto mb-4" />
          <p className="font-semibold text-gray-700">Experienced Faculty</p>
        </div>

        <div className="p-6 bg-blue-100 rounded-xl shadow">
          <FaStar className="text-4xl text-blue-700 mx-auto mb-4" />
          <p className="font-semibold text-gray-700">Excellent Results</p>
        </div>
      </div>

      {/* Counters Section */}
      <div className="grid sm:grid-cols-3 gap-6 mt-16 bg-blue-50 p-8 rounded-2xl shadow-inner">
        <div>
          <h2 className="text-4xl font-extrabold text-blue-700">200+</h2>
          <p className="text-gray-600 font-semibold">Students</p>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-blue-700">12+</h2>
          <p className="text-gray-600 font-semibold">Experienced Staff</p>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-blue-700">2+</h2>
          <p className="text-gray-600 font-semibold">Years of Excellence</p>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="mt-16 bg-blue-600 text-white rounded-xl p-8 shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-bold">Admissions Open for 2026–27</h3>
        <p className="mt-2">Enroll today and be a part of SRL Public School’s growing success.</p>
      </div>

    </section>
  );
}
