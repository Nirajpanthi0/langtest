import { FaPuzzlePiece, FaBullseye, FaGlobe, FaBook, FaLaptop, FaChalkboardTeacher } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section className="about-section py-16 bg-white text-black mt-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-semibold mb-6 text-black">About TestLang</h2>
        <p className="text-lg mb-6 text-gray-700">Your Gateway to Language Mastery</p>
        <p className="text-xl mb-10 text-gray-600">
          At TestLang, we are more than just a platform; we’re your partner in mastering languages. Whether you're a student, a professional, or just passionate about learning, we provide tools and resources to unlock your full potential.
        </p>

        {/* Why TestLang Stands Out */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="feature-item text-center p-6 bg-white border border-black rounded-2xl  ml-6">
            <div className="icon text-6xl mb-4 text-black mx-auto">
              <FaPuzzlePiece />
            </div>
            <h3 className="font-semibold text-2xl mb-3 text-black">Interactive & Fun</h3>
            <p className="text-gray-600">Engage with gamified tests, audio exercises, and image-based questions that make learning enjoyable.</p>
            <p className="text-gray-600">Explore challenges designed to improve grammar, vocabulary, pronunciation, and fluency.</p>
          </div>
          <div className="feature-item text-center p-6 bg-white border border-black rounded-2xl ">
            <div className="icon text-6xl mb-4 text-black mx-auto">
              <FaBullseye />
            </div>
            <h3 className="font-semibold text-2xl mb-3 text-black">Tailored to Your Needs</h3>
            <p className="text-gray-600">Personalized feedback after every test ensures you know exactly where to improve.</p>
            <p className="text-gray-600">Adaptive tests adjust to your skill level, keeping the experience exciting and relevant.</p>
          </div>
          <div className="feature-item text-center p-6 bg-white border border-black rounded-2xl mr-6">
            <div className="icon text-6xl mb-4 text-black mx-auto">
              <FaGlobe />
            </div>
            <h3 className="font-semibold text-2xl mb-3 text-black">Globally Recognized Standards</h3>
            <p className="text-gray-600">Our tests align with international frameworks like CEFR, TOEFL, and IELTS.</p>
            <p className="text-gray-600">Trusted by educational institutions and employers worldwide for reliable results.</p>
          </div>
        </div>

        {/* What We Offer */}
        <div className="my-16 mt-24">
          <h3 className="text-3xl font-semibold mb-6 text-black">What We Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="offer-item text-center p-6 bg-white border border-black rounded-2xl">
              <div className="icon text-6xl mb-4 text-black mx-auto">
                <FaBook />
              </div>
              <h4 className="font-semibold text-xl mb-3 text-black">Comprehensive Resources</h4>
              <p className="text-gray-600">Access a library of language tips, study guides, and practice materials.</p>
            </div>
            <div className="offer-item text-center p-6 bg-white border border-black rounded-2xl">
              <div className="icon text-6xl mb-4 text-black mx-auto">
                <FaLaptop />
              </div>
              <h4 className="font-semibold text-xl mb-3 text-black">Multi-Platform Support</h4>
              <p className="text-gray-600">Test anytime, anywhere on your laptop, tablet, or smartphone.</p>
            </div>
            <div className="offer-item text-center p-6 bg-white border border-black rounded-2xl ">
              <div className="icon text-6xl mb-4 text-black mx-auto">
                <FaChalkboardTeacher />
              </div>
              <h4 className="font-semibold text-xl mb-3 text-black">Expert Guidance</h4>
              <p className="text-gray-600">Learn from insights crafted by top language educators and linguists.</p>
            </div>
          </div>
        </div>

   {/* Did You Know */}
<div className="my-12 p-10 bg-gradient-to-r from-white via- to-white  rounded-3xl  transform transition-all ">
  <h3 className="text-4xl font-extrabold mb-6 text-black tracking-wider leading-tight transition-all duration-300 transform hover:translate-x-2 hover:text-gray-500 animate-fadeIn">
    Did You Know?
  </h3>
  <p className="text-lg mb-4 opacity-90 text-black transition-opacity duration-300 hover:opacity-100 tracking-tight">
    Over 20,000 users worldwide have trusted TestLang to enhance their language skills.
  </p>
  <p className="text-lg text-black opacity-90 transition-opacity duration-300 hover:opacity-100 tracking-tight">
    95% of users reported improved confidence and performance after just one month!
  </p>
</div>



        {/* Join TestLang CTA */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-4 text-black">Join the TestLang Community Today</h3>
          <p className="text-xl mb-6 text-gray-700">Take your first test for free and see where you stand. Earn certificates to showcase your achievements and boost your career.</p>
          <a href="#take-test" className="bg-black text-white py-3 px-8 rounded-full text-lg hover:bg-gray-700 transition duration-300 shadow-lg">
            Take Your First Test Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
