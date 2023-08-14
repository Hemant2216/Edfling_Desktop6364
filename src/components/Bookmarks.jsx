import React from "react";

const Bookmarks = ({ bookmarkData }) => {
  return (
    <div className="font-poppins ">
      {bookmarkData.map((bookmark) => (
        
        <fieldset

           
          key={bookmark.id}
          className="border rounded-lg border-2   lg:h-40 md:h-48 sm:h-60  flex flex-col md:flex-row md:justify-between md:items-center   mb-4"
          style={{borderColor:"rgba(203, 132, 97, 0.30)"}}
        >

          <legend style={{marginLeft:"13px",backgroundColor:"#CB8461",width:"7rem",height:"2.5rem",paddingLeft:"20px",paddingTop:"8px", borderRadius:"5px",color:"white"}}>Problem</legend> 
          <div className="text-sm sm:text-center md:text-lg lg:text-xl text-teal-900 ms-3 leading-10" 
            style={{lineHeight:"40px"}}>
              <p className="font-semibold text-center">{bookmark.question}</p>
              <div className="flex text-xs justify-center items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <circle cx="5" cy="5" r="5" fill="#CB8461"/>
                </svg>
                <p>{bookmark.date}</p>
              </div>
              <p className="text-center md:text-left">{bookmark.marks} <span className="text-orange-400 text-center md:text-left">{bookmark.num}</span></p>
          </div>
          <div className="text-center md:text-left mb-2">
            <button
              href={bookmark.link}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-white  me-3 ms-3 md:ms-0 rounded-md bg-teal-900 h-16 w-36"
            >
              Submit Again
            </button>
          </div>
          
        </fieldset>
      ))}
    </div>
  );
};

export default Bookmarks;
