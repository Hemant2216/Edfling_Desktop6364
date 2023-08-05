import React, { useState } from "react";
import Doubts from "./Doubts";
import doubtsData from "./doubtsData";

const Pagination = () => {
  const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);
  };

  return (
    <div className="font-poppins">
      <div className="flex flex-col sm:flex-row overflow-x-auto overflow-y-auto max-h-40">
        <span
          className={`mx-3 my-1 text-lg cursor-pointer ${
            activeLesson === null
              ? "text-teal-900 border-b-4 border-teal-900 rounded"
              : "text-teal-900/50"
          }`}
          onClick={() => setActiveLesson(null)}
        >
          View all
        </span>
        {lessons.map((lesson) => (
          <span
            key={lesson}
            className={`mx-3 my-1 text-lg cursor-pointer ${
              activeLesson === lesson
                ? "text-teal-900 border-b-4 border-teal-900 rounded"
                : "text-teal-900/50"
            }`}
            onClick={() => handleLessonClick(lesson)}
          >
            Lesson {lesson}
          </span>
        ))}
      </div>
      <div className="mt-1 sm:mt-5">
        <Doubts doubtsData={doubtsData} />
      </div>
    </div>
  );
};

export default Pagination;
