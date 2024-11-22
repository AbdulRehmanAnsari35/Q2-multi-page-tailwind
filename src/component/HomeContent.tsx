'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section 
      className="Hero h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/laptophome.jpg')" }}
    >
      <div className="text-white text-center px-4 md:px-16">
        <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">
          Welcome to Laptop World
        </h1>
        <p className="text-2xl mt-4" data-aos="fade-up">
          Your one-stop outlet shop for the best laptops.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HomeContent;
