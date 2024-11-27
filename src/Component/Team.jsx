import React, { useState } from 'react';
import { teamMembers } from './testimonials';

const TeamMembersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1));
  };

  // Handle touch start to track swipe
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    setStartTouch(touchStart);
  };

  // Handle touch end to detect swipe direction
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (startTouch - touchEnd > 50) {
      // Swiped left -> Next
      handleNext();
    } else if (touchEnd - startTouch > 50) {
      // Swiped right -> Previous
      handlePrev();
    }
  };

  return (
    <section className="bg-blue-500 py-16 md:mt-28">
      <h2 className="text-4xl font-bold text-center text-blue-100 mb-12">Our Team</h2>

      <div
        className="relative max-w-4xl mx-auto flex items-center justify-center"
        onTouchStart={handleTouchStart} // Start touch tracking
        onTouchEnd={handleTouchEnd}   // End touch tracking
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Previous Team Member"
          className="absolute left-0 transform -translate-x-1/2 bg-blue-800 hover:bg-blue-600 text-white p-3 rounded-full shadow-md focus:outline-none transition duration-300 sm:block hidden h-16 w-16"
        >
          &#8592;
        </button>

        {/* Team Member Card */}
        <div className="text-center max-w-sm mx-4 p-6 bg-blue-600 rounded-lg shadow-lg transition-all duration-500 opacity-100">
          <img
            src={teamMembers[currentIndex].image}
            alt={teamMembers[currentIndex].name}
            className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-blue-100"
          />
          <h3 className="text-2xl font-semibold text-blue-100">{teamMembers[currentIndex].name}</h3>
          <p className="text-blue-300 text-lg">{teamMembers[currentIndex].role}</p>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Team Member"
          className="absolute right-0 transform translate-x-1/2 bg-blue-800 hover:bg-blue-600 text-white p-3 rounded-full shadow-md focus:outline-none transition duration-300 sm:block hidden h-16 w-16 "
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default TeamMembersSlider;
