import React, { useState } from "react";
import Bookmarks from "./Bookmarks";
import bookmarkData from "./bookmarkData";

const Pagination = () => {
  const lessons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [activeLesson, setActiveLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setActiveLesson(lesson);
  };

  return (
    <div className="font-poppins">
    <div className="flex max-h-40 overflow-x-auto flex-wrap">
      <div className="flex  flex-row md:flex-row sm:flex-nowrap w-full space-y-1">
        <span
          className={`mx-3 text-base sm:text-base md:text-base lg:text-lg cursor-pointer whitespace-nowrap ${
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
            className={`mx-3 text-base sm:text-base md:text-base lg:text-lg cursor-pointer whitespace-nowrap ${
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
    </div>
  
    <div className="mt-5 md:max-w-full md:overflow-x-auto overflow-y-auto">
      <Bookmarks bookmarkData={bookmarkData} />
    </div>
  </div>
  
  
  );
};

export default Pagination;
