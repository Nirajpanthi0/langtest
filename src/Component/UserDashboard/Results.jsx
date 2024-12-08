import React from "react";

const Result = () => {
  const results = [
    { subject: "Math", score: 85 },
    { subject: "Science", score: 90 },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Result</h2>
      <ul>
        {results.map((result, index) => (
          <li key={index} className="flex justify-between">
            <span>{result.subject}</span>
            <span>{result.score}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
