// pages/about.tsx

"use client";

import React from 'react';

const About = () => {
  return (
    <div>
      <section className='About h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{ backgroundImage: "url('/image 1.jpg')" }}>
        <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
          <h2 className='text-4xl font-bold mb-4' data-aos="fade-up">About&apos; us</h2>
          <p>Discover the best laptops tailored to your needs, whether it&apos;s for work, gaming, or everyday use. Shop top brands at unbeatable prices with fast delivery and excellent support!</p>
        </div>
      </section>
    </div>
  );
};

export default About;

