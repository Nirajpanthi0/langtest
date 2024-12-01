import React from 'react';
import { Link } from 'react-router-dom';

function TakeTest() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      {/* Paid Test Section */}
      <div className="bg-white border-4 border-black text-black shadow-md rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold text-black">Exam Price</h2>
        <p className="text-2xl font-bold text-black mt-4">$20</p>
        <Link
          to="/login"
          className="mt-6 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition block text-center"
        >
          Proceed to Test
        </Link>
      </div>
    </div>
  );
}

export default TakeTest;
