import React, { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is TestLang?",
      answer:
        "TestLang is an online platform designed to help you test and improve your foreign language skills through interactive tests, including audio, image, and multiple-choice questions.",
    },
    {
      question: "How can I take a language test?",
      answer:
        "To take a test, navigate to the 'Take a Test' section from the menu, select your preferred language and difficulty level, and follow the instructions.",
    },
    {
      question: "Are the tests free?",
      answer:
        "Yes! Most of our language tests are free to access. However, premium plans are available for advanced features and detailed analysis.",
    },
    {
      question: "What types of tests are available?",
      answer:
        "We offer a variety of tests, including audio-based, image-based, and multiple-choice question formats to improve your listening, reading, and comprehension skills.",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className=" border border-black rounded-lg p-4 bg-white  "
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex justify-between items-center text-black font-semibold text-lg"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
