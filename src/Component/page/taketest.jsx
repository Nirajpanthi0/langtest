import React, { useState } from 'react';

// Sample test questions
const questions = [
  {
    type: 'text',
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
    correctAnswer: 'Paris'
  },
  {
    type: 'image',
    question: 'Identify the animal in the picture.',
    image: 'https://example.com/image.jpg', // Replace with actual image URL
    options: ['Elephant', 'Tiger', 'Lion', 'Bear'],
    correctAnswer: 'Tiger'
  },
  {
    type: 'audio',
    question: 'Listen to this audio and identify the instrument.',
    audio: 'https://example.com/audio.mp3', // Replace with actual audio URL
    options: ['Guitar', 'Piano', 'Violin', 'Drums'],
    correctAnswer: 'Violin'
  }
];

const AuthPage = ({ setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., validation, API call)
    setIsLoggedIn(true); // Mark the user as logged in after successful submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          {isLogin ? 'Login' : 'Signup'}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-600 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-600 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-blue-600 font-semibold mb-2">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-blue-600">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-700 cursor-pointer hover:underline"
            >
              {isLogin ? 'Signup' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Taketest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  if (!isLoggedIn) {
    return <AuthPage setIsLoggedIn={setIsLoggedIn} />;
  }

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
      }, 1000); // 1-second delay to show feedback
    } else {
      setTimeout(() => setIsCompleted(true), 1000);
    }
  };

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  if (isCompleted) {
    return (
      <div className="text-center py-10 h-full mt-20 sm:mt-64">
        <h2 className="text-3xl font-bold">Test Completed!</h2>
        <p className="text-xl mt-4">Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-8 mt-20 sm:mt-56">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{question.question}</h2>

      {question.type === 'image' && (
        <img src={question.image} alt="question" className="w-full mb-4 sm:mb-6 rounded shadow-md" />
      )}

      {question.type === 'audio' && (
        <audio controls className="mb-4 sm:mb-6 w-full">
          <source src={question.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 sm:mt-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            className={`py-2 px-4 rounded transition ${
              selectedAnswer === option
                ? selectedAnswer === question.correctAnswer
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white'
                : 'bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {isAnswerCorrect !== null && (
        <p className={`mt-4 text-lg font-semibold ${isAnswerCorrect ? 'text-green-500' : 'text-red-500'}`}>
          {isAnswerCorrect ? 'Correct!' : 'Incorrect. Try the next question!'}
        </p>
      )}

      <button
        onClick={handleNext}
        className="mt-6 py-2 px-6 bg-black text-white rounded shadow hover:bg-blue-700 transition"
        disabled={!selectedAnswer}
      >
        {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Test'}
      </button>
    </div>
  );
};

export default Taketest;
