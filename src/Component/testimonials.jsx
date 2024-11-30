import React, { useState, useEffect } from 'react';
import profile from "../assets/images/profile.png"
const testimonials = [
  {
    name: "ram",
    image: profile, // Placeholder image URL
    feedback: "This platform has greatly improved my language skills! I highly recommend it.",
  },
  {
    name: "hari",
    image: profile, // Placeholder image URL
    feedback: "An amazing resource for language learners. I enjoyed every part of it!",
  },
  {
    name: "krishana",
    image:profile, // Placeholder image URL
    feedback: "The best platform for language testing and improvement. Very effective!",
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 text-white  overflow-hidden h-[400px] py-12 md:mt-24">
      <div className="max-w-5xl mx-auto px-8 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8 text-blue-100">What Students Say</h2>
        
        <div className="flex flex-col items-center">
          <img
            src={testimonials[currentIndex].image || "https://via.placeholder.com/150"} // Fallback to placeholder if no image
            alt={testimonials[currentIndex].name}
            className="w-28 h-28 rounded-full mb-6 border-4 border-blue-300 shadow-lg transform hover:scale-110 transition duration-300"
          />
          <p className="text-2xl font-bold mb-2">{testimonials[currentIndex].name}</p>
          <p className="text-lg max-w-2xl leading-relaxed opacity-90">{testimonials[currentIndex].feedback}</p>
        </div>
        
        {/* Pagination Buttons */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-300' : 'bg-blue-100'} transition duration-200`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
