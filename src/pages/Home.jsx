import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const sliderRef = useRef(null);
  const btnRef = useRef(null);
  const floatingRef1 = useRef(null);
  const floatingRef2 = useRef(null);

  const images = [
    "https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=459&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588075592446-265fd1e3a6a9?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=1200&q=60",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2400,
    arrows: false,
  };

  useEffect(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Subheading animation
    gsap.from(subTextRef.current, {
      y: 40,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      ease: "power3.out",
    });

    // Slider animation
    gsap.from(sliderRef.current, {
      opacity: 0,
      scale: 0.85,
      delay: 0.5,
      duration: 1,
      ease: "power3.out",
    });

    // Button animation
    gsap.from(btnRef.current, {
      opacity: 0,
      y: 30,
      delay: 0.7,
      duration: 1,
      ease: "power3.out",
    });

    // Floating shapes animation
    gsap.to(floatingRef1.current, {
      y: -25,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(floatingRef2.current, {
      y: 25,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const navigate = useNavigate();

  return (
    <section
      className="relative overflow-hidden text-center py-16 md:py-28 px-4 
      bg-gradient-to-b from-blue-100 to-blue-200"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=60')]
        bg-cover bg-center opacity-10"
      ></div>

      {/* Floating Shapes */}
      <div
        ref={floatingRef1}
        className="absolute top-20 left-10 w-20 h-20 bg-blue-300 blur-2xl opacity-40 rounded-full"
      ></div>

      <div
        ref={floatingRef2}
        className="absolute bottom-20 right-10 w-24 h-24 bg-pink-300 blur-3xl opacity-40 rounded-full"
      ></div>

      {/* Heading */}
      <h2
        ref={headingRef}
        className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        uppercase font-extrabold text-blue-900 mb-4 drop-shadow-md"
      >
        Welcome to SRL Public School
      </h2>

      {/* Subheading */}
      <p
        ref={subTextRef}
        className="relative text-base sm:text-lg text-gray-700 font-semibold 
        max-w-xl sm:max-w-2xl mx-auto mb-10"
      >
        Empowering young minds through knowledge, creativity, leadership, and
        real growth.
      </p>

      {/* Slider Box */}
      <div
        ref={sliderRef}
        className="relative max-w-md sm:max-w-2xl md:max-w-4xl mx-auto 
        backdrop-blur-xl bg-white/30 rounded-2xl 
        overflow-hidden shadow-2xl border border-white/40"
      >
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="w-full h-52 sm:h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Animated CTA Button */}
      <div className="relative mt-10">
        <button
          onClick={() => navigate("/contact")}
          ref={btnRef}
          className="flex items-center mx-auto gap-2 bg-blue-600 hover:bg-blue-700 
  text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg 
  hover:shadow-2xl transition-transform hover:scale-105 duration-300"
        >
          Apply For Admission <FaArrowRight />
        </button>
      </div>

      {/* Highlight Line */}
      <div className="relative mt-8 mx-auto w-32 h-1 bg-blue-600 rounded-full"></div>

      {/* Extra Icons Floating */}
      <FaStar className="absolute top-10 right-1/2 text-yellow-500 text-4xl animate-pulse opacity-70" />
      <FaStar className="absolute top-40 left-8 text-yellow-400 text-3xl animate-pulse opacity-60" />
    </section>
  );
}
