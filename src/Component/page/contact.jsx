import React from "react";
import contact from "../../assets/images/contact.png";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-blue-400 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full rounded-lg p-8 flex flex-col lg:flex-row">
        {/* Left Side with Text and Image Below */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center mb-8 lg:mb-0 mt-5">
          <h2 className="text-2xl lg:text-4xl font-semibold text-white text-center lg:text-left">
            Let's talk about everything!
          </h2>
          <p className="mt-4 text-white text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptas debitis, fugiat natus?
          </p>

          {/* Image placed under the text */}
          <img
            src={contact} // Replace with your image URL
            alt="Illustration or image"
            className="w-full h-auto object-cover rounded-lg mt-6"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 lg:pl-8 mt-5">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-white">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-white">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="mt-1 w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-white">
                Write your message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                className="mt-1 w-full px-4 py-2 border border-blue-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
