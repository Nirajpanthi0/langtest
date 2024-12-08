import React from "react";

const ExamList = () => {
  const exams = [
    { name: "Math Test", date: "2024-12-10" },
    { name: "Science Test", date: "2024-12-15" },
  ];

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Exam List</h2>
      <ul>
        {exams.map((exam, index) => (
          <li key={index} className="flex justify-between">
            <span>{exam.name}</span>
            <span>{exam.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamList;
