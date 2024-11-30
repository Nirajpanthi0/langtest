import React from 'react';
import { Link } from 'react-router-dom';

function TakeTest() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-400">
      {/* Paid Test Section */}
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold text-blue-600">Exam Price</h2>
        <p className="text-2xl font-bold text-gray-800 mt-4">$20</p>
        <Link
          to="/login"
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition block text-center"
        >
          Proceed to Test
        </Link>
      </div>
    </div>
  );
}

export default TakeTest;
