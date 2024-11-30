import React from "react";
import ThinkingPersonImage from "../../assets/images/ThinkingPersonImage.jpg";
import girl from "../../assets/images/girl.png";
import Mobilegirl from "../../assets/images/Mobilegirl.png";
import TeamMembersSlider from "../Team";
import TestimonialSlider from "../testimonials";


const Home = () => {
  return (
    <div>

{/* Hero Section */}
<section
  id="home"
  className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-center "
>
  {/* Video Background */}
  <iframe
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="https://youtu.be/IsQUT9xRYSg"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
    title="Hero Video Background"
  ></iframe>

  {/* Audio */}
  <audio
    className="absolute top-0 left-0 w-full h-full"
    src="your-audio-file-url.mp3"  // Replace with the actual audio URL
    autoPlay
    loop
    muted={false}  // Set to true if you want to mute the audio initially
  ></audio>

  {/* Overlay for Better Readability */}
  <div className="absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-50"></div>

  {/* Hero Content */}
  <div className="relative z-10 px-4">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
      Test Your Language Skills
    </h1>
    <p className="text-white mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mx-auto">
      Choose your language and level to get started with a test!
    </p>
    <button className="mt-6 px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 text-sm sm:text-base md:text-lg text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
      Get Started
    </button>
  </div>
</section>


    


      {/* Why Choose Us Section */}
      <section className="bg-blue-500 p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mt-28 animate__animated animate__fadeIn animate__delay-2s">
        {/* Left Column */}
        <div className="text-white space-y-4 md:w-1/2 animate__animated animate__fadeIn animate__delay-3s">
          <div className="flex items-center">
            <img
              src={ThinkingPersonImage}
              alt="Thinking Person"
              className="w-72 h-72 mr-4 md:w-25 md:h-25"
            />
            <div className="border-b border-white w-full"></div>
          </div>
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="text-white text-base leading-relaxed">
            At LangTest, we provide an advanced and interactive platform to
            assess and improve your language skills. Our tailored features,
            including real-life audio and visual test content, ensure a
            comprehensive learning experience. With user-friendly designs,
            expert guidance, and accurate evaluations, we help you unlock your
            potential and achieve fluency effectively.
          </p>
          <button className="mt-4 px-4 py-2 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-100">
            Learn More
          </button>
        </div>

        {/* Right Column */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3 space-y-4 animate__animated animate__fadeIn animate__delay-4s">
          <ul className="space-y-2 text-blue-500">
            <li className="flex items-start">
              <span className="text-blue-500">•</span>
              <span className="ml-2 font-medium">
                Expert guidance for fluency.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500">•</span>
              <span className="ml-2 font-medium">
                Real-life audio and visual content.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500">•</span>
              <span className="ml-2 font-medium">
                Comprehensive and tailored features.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500">•</span>
              <span className="ml-2 font-medium">
                Accurate and reliable assessments.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Facilities Section */}
      <section className="bg-blue-500 p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mt-28 animate__animated animate__fadeIn animate__delay-5s">
        {/* Left Column */}
        <div className="text-white space-y-4 md:w-1/2 animate__animated animate__fadeIn animate__delay-6s">
          <div className="flex items-center space-x-4">
            <img
              src={girl}
              alt="Facility Illustration"
              className="hidden md:block md:w-72 md:h-72"
            />
            <img
              src={Mobilegirl}
              alt="Facility Illustration"
              className="w-72 h-72 md:hidden"
            />
            <div className="border-b border-white w-full md:visible"></div>
          </div>
          <h2 className="text-3xl font-semibold">Our Facilities</h2>
          <p className="text-white text-base leading-relaxed">
            We provide a seamless and engaging language learning experience with
            interactive tests, personalized content, and progress tracking. Our
            platform supports multiple languages, is mobile-friendly, and offers
            expert guidance to help you excel. Earn certifications and achieve
            your language goals with ease!
          </p>
          <button className="mt-4 px-4 py-2 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-100 hover:text-blue-700">
            Explore Facilities
          </button>
        </div>

        {/* Right Column */}
        <div className="bg-white p-6 rounded-lg shadow-lg md:w-1/3 space-y-4 animate__animated animate__fadeIn animate__delay-7s">
          <h3 className="text-blue-500 text-xl font-semibold">
            Available Facilities:
          </h3>
          <ul className="space-y-2 text-blue-500">
            <li className="flex items-start">
              <span className="text-blue-500">•</span>
              <span className="ml-2 font-medium">Certification Opportunities.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500">•</span>
              <span className="ml-2 font-medium">Personalized Learning Materials</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500">•</span>
              <span className="ml-2 font-medium">Mobile-Friendly Access</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500">•</span>
              <span className="ml-2 font-medium">Progress Tracking and Analytics</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sliders */}
      <TeamMembersSlider />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
