import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "John Doe",
    image: "https://via.placeholder.com/80",
    feedback: "This platform has greatly improved my language skills! I highly recommend it.",
  },
  {
    name: "Jane Smith",
    image: "https://via.placeholder.com/80",
    feedback: "An amazing resource for language learners. I enjoyed every part of it!",
  },
  {
    name: "Alex Johnson",
    image: "https://via.placeholder.com/80",
    feedback: "The best platform for language testing and improvement. Very effective!",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 text-white shadow-lg overflow-hidden h-[500px] py-12">
      <div className="max-w-5xl mx-auto px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8 text-blue-100">What Students Say</h2>
        
        <div className="flex flex-col items-center">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-28 h-28 rounded-full mb-6 border-4 border-blue-300 shadow-lg transform hover:scale-110 transition duration-300"
          />
          <p className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</p>
          <p className="text-lg max-w-2xl leading-relaxed opacity-90">{testimonials[currentIndex].feedback}</p>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white hover:text-blue-300 transition duration-200"
        >
          <FaChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white hover:text-blue-300 transition duration-200"
        >
          <FaChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
