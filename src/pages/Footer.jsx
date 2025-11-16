import React from "react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-gray-100">

      {/* Main Footer Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 p-8 md:p-12">

        {/* Social Icons */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-3">
          <h4 className="text-xl font-bold text-gray-700">Follow Us</h4>
          <div className="flex items-center text-3xl gap-6">
            <a href="https://www.youtube.com/@SRLPUBLICSCHOOL1INDORE" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-red-600 duration-300 cursor-pointer" />
            </a>
            <FaInstagram className="hover:text-pink-600 duration-300 cursor-pointer" />
            <FaFacebook className="hover:text-blue-600 duration-300 cursor-pointer" />
          </div>
        </div>

        {/* Address Section */}
        <div className="w-full md:w-1/3 flex flex-col items-center text-center md:text-left">
          <h4 className="text-xl font-bold text-gray-700 mb-2">School Address</h4>
          <div className="flex items-start gap-3 max-w-md mx-auto">
            <ImLocation2 className="text-4xl text-blue-700" />
            <p className="text-lg leading-6 font-medium text-gray-700">
              282, Silver Park Colony Phase-1, BalyaKheda,<br />
              District – Indore, Madhya Pradesh 453771.
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h4 className="text-xl font-bold text-gray-700 mb-2">Locate Us</h4>
          <iframe
            className="w-full h-56 md:h-44 rounded-xl shadow-lg border border-gray-300"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1839.030607971735!2d75.94845848520012!3d22.800195483628418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1763198248750!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      {/* Bottom Strip */}
      <footer className="bg-blue-500 text-white font-semibold py-4 text-center text-sm md:text-base shadow-inner">
        <p>© {new Date().getFullYear()} SRL Public School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
