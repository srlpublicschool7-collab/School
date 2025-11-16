import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const feeData = [
  {
    grade: "Nursery - UKG",
    tuition: "₹12,000 / Year",
    installments: ["₹4500", "₹4500", "₹3000"],
  },
  {
    grade: "Class 1 - 4",
    tuition: "₹13,000 / Year",
    installments: ["₹5000", "₹5000", "₹3000"],
  },
  {
    grade: "Class 5 - 8",
    tuition: "₹14,000 / Year",
    installments: ["₹5000", "₹5000", "₹4000"],
  },
];

export default function Fees() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const noticeRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Section fade in
    gsap.from(sectionRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Heading animation
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
    });

    // Notice slide up
    gsap.from(noticeRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
    });

    // Fee Cards animation
    cardRefs.current.forEach((card, i) => {
      gsap.from(card, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        delay: 0.3 * (i + 1),
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-4 sm:px-10 md:px-20 text-center"
    >
      {/* Heading */}
      <h3
        ref={headingRef}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-black"
      >
        Fee Structure
      </h3>

      {/* Sub text */}
      <p className="max-w-xl md:max-w-2xl mx-auto text-black text-base sm:text-lg mb-6">
        Our fee structure is transparent, simple and affordable for every family.
      </p>

      {/* Session */}
      <p className="font-bold text-lg sm:text-xl mb-5 text-blue-700">
        Session : 2026 - 2027
      </p>

      {/* Notice */}
      <p
        ref={noticeRef}
        className="max-w-xl sm:max-w-2xl mx-auto text-base sm:text-xl bg-blue-600 font-semibold rounded-xl px-4 py-3 text-white mb-10 shadow-lg"
      >
        ✔ Registration fee of ₹500 is compulsory.
      </p>

      {/* Fee Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {feeData.map((f, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className="bg-white p-6 rounded-2xl shadow-xl border hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3">
              {f.grade}
            </h3>

            <p className="text-lg font-semibold text-gray-700 mb-3">
              Tuition Fee:{" "}
              <span className="text-green-600 font-bold">{f.tuition}</span>
            </p>

            <div className="bg-blue-50 p-4 rounded-xl">
              <h4 className="font-bold text-black mb-2 text-lg">
                Installments:
              </h4>

              <ul className="text-left text-black space-y-1 font-semibold">
                <li>📌 1st Installment (Jun–Jul): {f.installments[0]}</li>
                <li>📌 2nd Installment (Sep–Oct): {f.installments[1]}</li>
                <li>📌 3rd Installment (Nov–Dec): {f.installments[2]}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Important Note */}
      <p className="text-black sm:text-xl text-lg bg-yellow-200 px-4 py-3 rounded-xl font-semibold mt-10 max-w-3xl mx-auto">
        👉 Installments must be paid between the 1st and 10th of every month.
      </p>
    </section>
  );
}
