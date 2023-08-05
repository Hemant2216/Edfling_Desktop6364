import React from "react";
const Doubts = ({ doubtsData }) => {
  return (
    <div className="font-poppins">
      {doubtsData.map((doubt) => (
        <div
          key={doubt.id}
          className="border rounded-lg border-2 border-gray-400 h-20 sm:h-28 flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center px-3 sm:px-5 mb-4"
        >
          <div className="text-base sm:text-xl text-orange-600">
            <p>{doubt.question}</p>
          </div>
          <div>
            <a
              href={doubt.link}
              className="text-base sm:text-lg text-teal-900 underline px-2 sm:px-4"
            >
              View Doubt
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doubts;
