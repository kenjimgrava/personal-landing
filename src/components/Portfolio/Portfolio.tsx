import React from "react";

function Portfolio() {
  return (
    <div className="mt-32" id="portfolio">
      <div className="text-white text-5xl text-center mb-10">My Portfolio</div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5"></div>
      </div>
    </div>
  );
}

export default Portfolio;
