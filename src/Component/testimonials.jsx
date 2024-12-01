'use client';

import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const testimonials = [
  {
    name: "MIKE ANGELS",
    role: "Architect",
    content: "Working with this team has been an absolute pleasure. Their attention to detail and professional approach has made every project a success.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "CARL OSWAL",
    role: "Builder",
    content: "The level of expertise and dedication they bring to each project is outstanding. Couldn't ask for a better partnership.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "MARK SMITH",
    role: "Constructor",
    content: "Their innovative solutions and reliable execution have consistently exceeded our expectations. A truly exceptional team.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "SARAH PARKER",
    role: "Project Manager",
    content: "The commitment to quality and timeline adherence sets them apart. An invaluable partner for any construction project.",
    avatar: "/placeholder.svg?height=100&width=100"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-change testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-black uppercase mb-2">
            Testimonials
          </h2>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight text-black uppercase">
            What They Say About Us
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-white border-4 border-black rounded-2xl transition-all duration-300 ease-in-out min-h-[300px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-8">
            <div className="mb-6 sm:mb-8">
              <p className="text-gray-800 text-base sm:text-lg italic">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center">
                {testimonials[currentIndex].avatar ? (
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gray-200 mb-4"
                  />
                ) : (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                    <User className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                  </div>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-black uppercase">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 uppercase">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="mt-6 sm:mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-black w-3 sm:w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
