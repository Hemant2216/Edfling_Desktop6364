import React from "react";
import BookmarksBanner from "../components/BookmarksBanner";
import ToggleButton from "../components/ToggleButton";
import Pagination from "../components/Pagination";

const AskDoubt = () => {
  return (
    <div className="p-4 sm:ml-64 space-y-6">
      <BookmarksBanner />
      {/* <ToggleButton /> */}
      <Pagination />
    </div>
  );
};

export default AskDoubt;
