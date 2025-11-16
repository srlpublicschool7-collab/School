import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facultyMembers = [
  {
    name: "Dr. Asha Verma",
    subject: "Principal",
    exp: "20+ years",
    img: "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=459&auto=format&fit=crop"
  },
  {
    name: "Mr. Rajesh Kumar",
    subject: "Mathematics",
    exp: "10 years",
    img: "https://images.unsplash.com/photo-1635766854982-fc151c6e9278?q=80&w=1470&auto=format&fit=crop"
  },
  {
    name: "Ms. Neha Sharma",
    subject: "Science",
    exp: "8 years",
    img: "https://plus.unsplash.com/premium_photo-1677368598646-94dbd82d2bb0?q=80&w=1471&auto=format&fit=crop"
  },
  {
    name: "Mr. Arjun Patel",
    subject: "English",
    exp: "12 years",
    img: "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?q=80&w=1472&auto=format&fit=crop"
  },
];

export default function Faculty() {
  
  const cardRefs = useRef([]);



  return (
    <section className="py-12 px-4 sm:px-10 md:px-20 text-center">

      <h3
        
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-700"
      >
        Our Faculty
      </h3>

      <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg mb-10">
        Meet our team of dedicated educators who inspire and guide students every day.
      </p>

      {/* Card Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {facultyMembers.map((f, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="bg-white shadow-lg border hover:shadow-2xl transition duration-300 
            rounded-2xl p-6 flex flex-col items-center group"
          >
            {/* Profile Image */}
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl mb-4">
              <img
                src={f.img}
                alt={f.name}
                className="w-full h-full object-cover group-hover:scale-110 duration-300"
              />
            </div>

            {/* Name */}
            <h4 className="font-bold text-lg sm:text-xl text-gray-800">{f.name}</h4>

            {/* Subject */}
            <p className="text-blue-600 font-medium">{f.subject}</p>

            {/* Experience */}
            <p className="text-gray-600 text-sm mt-1">{f.exp} experience</p>

            {/* Bottom Hover Line */}
            <div className="mt-4 h-1 w-0 group-hover:w-full bg-blue-600 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
