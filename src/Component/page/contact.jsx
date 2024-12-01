import React from "react";
import contact from "../../assets/images/contact.png";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full rounded-lg p-8 flex flex-col lg:flex-row bg-white">
        {/* Left Side with Text and Image Below */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center mb-8 lg:mb-0 mt-5">
          <h2 className="text-2xl lg:text-4xl font-semibold text-black text-center lg:text-left">
            Let's talk about everything!
          </h2>
          <p className="mt-4 text-black text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Voluptas debitis, fugiat natus?
          </p>

          {/* Image with grayscale effect */}
          <img
            src={contact} // Replace with your image URL
            alt="Illustration or image"
            className="w-full h-auto object-cover rounded-lg mt-6 grayscale"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 lg:pl-8 mt-5">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-black">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-sm font-medium text-black">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium text-black">
                Write your message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-black focus:border-black"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-black"
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
