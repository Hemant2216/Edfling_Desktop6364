import React from "react";

const BookmarksBanner = () => {
  return (
    <div className="relative  px-4  p-2 text-white rounded-xl font-poppins flex flex-wrap flex-col justify-center " style={{background:"linear-gradient(140deg, #166754 0%, #215D4F 30.73%, #00FFCA 100%)"}}>
      <div>
        <div className=" lg:mb-2">
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl  font-semibold">Bookmarks</p>
        </div>
        <div className="w-full flex justify-start flex-wrap">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl lg:inline   ">
            Keep Revising important concepts anytime by revisiting your 
            bookmarks
          </p>
          <img src="./images/bookmarks.png" alt="" className="lg:inline" />
        </div>
        </div>
        {/* <div className=" w-32 sm:w-36 md:w-48 lg:w-60">
          
        </div> */}
      
    </div>
  );
};

export default BookmarksBanner;
