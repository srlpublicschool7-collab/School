import React from "react";

const facilities = [
  {
    title: "Science Lab",
    desc: "Well-equipped laboratories for hands-on experiments and innovation.",
  },
  {
    title: "Library",
    desc: "A vast collection of books and digital resources to enrich learning.",
  },
  {
    title: "Sports Complex",
    desc: "Facilities for football, cricket, basketball, and indoor games.",
  },
  {
    title: "Computer Lab",
    desc: "Modern computers and internet access for digital learning.",
  },
];

export default function Facilities() {
  return (
    <section className="py-12 px-4 sm:px-10 md:px-20 text-center">

      {/* Heading */}
      <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">
        Our Facilities
      </h3>

      {/* Sub Text */}
      <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg mb-10">
        We provide world-class infrastructure to ensure our students learn in a
        safe, engaging, and inspiring environment.
      </p>

      {/* Facilities Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {facilities.map((f, i) => (
          <div
            key={i}
            className="
              bg-white 
              rounded-2xl 
              shadow-xl 
              border 
              p-6 
              transition 
              duration-300 
              hover:scale-105 
              hover:shadow-2xl 
              cursor-pointer 
              hover:border-blue-500 
              group
            "
          >
            {/* Card Header / Title */}
            <h4 className="text-xl sm:text-2xl font-bold text-blue-700 mb-3 group-hover:text-blue-600">
              {f.title}
            </h4>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {f.desc}
            </p>

            {/* Bottom animated underline */}
            <div className="mt-4 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}

      </div>
    </section>
  );
}
