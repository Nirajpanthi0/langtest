import React from "react";
import ThinkingPersonImage from "../../assets/images/ThinkingPersonImage.jpg";
import girl from "../../assets/images/girl.png";
import Mobilegirl from "../../assets/images/Mobilegirl.png";
import TeamMembersSlider from "../Team";
import TestimonialSlider from "../testimonials";
import video1 from "../../assets/video/video1.mp4";
import Faq from "../Faq";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-center"
      >
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video1} type="video/mp4" />
          <source src={video1} type="video/webm" />
          <source src={video1} type="video/ogg" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for Better Readability (Black background) */}
        <div className="absolute top-0 left-0 w-full h-full "></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mt-28">
        {/* Left Column */}
        <div className="text-black space-y-4 md:w-1/2">
          <div className="flex items-center">
            <img
              src={ThinkingPersonImage}
              alt="Thinking Person"
              className="w-72 h-72 mr-4 md:w-25 md:h-25"
            />
            <div className="border-b border-black border-[1px] w-full"></div>
          </div>
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="text-black text-base leading-relaxed">
            At LangTest, we provide an advanced and interactive platform to
            assess and improve your language skills. Our tailored features,
            including real-life audio and visual test content, ensure a
            comprehensive learning experience. With user-friendly designs,
            expert guidance, and accurate evaluations, we help you unlock your
            potential and achieve fluency effectively.
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-white p-6 rounded-3xl shadow-lg border-4 border-black md:w-1/3 space-y-4">
          <ul className="space-y-2 text-black">
            <li className="flex items-start">
              <span className="text-black">•</span>
              <span className="ml-2 font-medium">
                Expert guidance for fluency.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black">•</span>
              <span className="ml-2 font-medium">
                Real-life audio and visual content.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black">•</span>
              <span className="ml-2 font-medium">
                Comprehensive and tailored features.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black">•</span>
              <span className="ml-2 font-medium">
                Accurate and reliable assessments.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Our Facilities Section */}
      <section className="bg-white p-8 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 mt-28">
        {/* Left Column */}
        <div className="text-black space-y-4 md:w-1/2">
          <div className="flex items-center space-x-4">
            <img
              src={girl}
              alt="Facility Illustration"
              className="hidden md:block md:w-72 md:h-72 filter grayscale(100%) brightness(0)"
            />
            <img
              src={Mobilegirl}
              alt="Facility Illustration"
              className="w-72 h-72 md:hidden filter grayscale(100%) brightness(0)"
            />
            <div className="border-b border-black w-full md:visible  border-[1px]"></div>
          </div>
          <h2 className="text-3xl font-semibold">Our Facilities</h2>
          <p className="text-black text-base leading-relaxed">
            We provide a seamless and engaging language learning experience with
            interactive tests, personalized content, and progress tracking. Our
            platform supports multiple languages, is mobile-friendly, and offers
            expert guidance to help you excel. Earn certifications and achieve
            your language goals with ease!
          </p>
        </div>

        {/* Right Column */}
        <div className="bg-white p-6 shadow-lg md:w-1/3 space-y-4 border-4 border-black rounded-3xl">
          <h3 className="text-black text-xl font-semibold">
            Available Facilities:
          </h3>
          <ul className="space-y-2 text-black">
            <li className="flex items-start">
              <span className="text-black">•</span>
              <span className="ml-2 font-medium">
                Certification Opportunities.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black">•</span>
              <span className="ml-2 font-medium">
                Personalized Learning Materials
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black">•</span>
              <span className="ml-2 font-medium">
                Mobile-Friendly Access
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-black">•</span>
              <span className="ml-2 font-medium">
                Progress Tracking and Analytics
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sliders */}
      <TeamMembersSlider />
      <TestimonialSlider />
      <Faq></Faq>
    </div>
  );
};

export default Home;
