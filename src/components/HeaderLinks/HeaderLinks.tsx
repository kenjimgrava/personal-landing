import React from "react";
import { Link } from "react-scroll";

function HeaderLinks({ activeSection }: any) {
  return (
    <div className="flex gap-5 ">
      <div
        className={`hover:text-amber-300 cursor-pointer ${
          activeSection === "about" ? "text-amber-300" : ""
        }`}
      >
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </div>
      <div
        className={`hover:text-amber-300 cursor-pointer ${
          activeSection === "skills" ? "text-amber-300" : ""
        }`}
      >
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </div>
      <div
        className={`hover:text-amber-300 cursor-pointer ${
          activeSection === "portfolio" ? "text-amber-300" : ""
        }`}
      >
        <Link to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link>
      </div>
      <div
        className={`hover:text-amber-300 cursor-pointer ${
          activeSection === "contact" ? "text-amber-300" : ""
        }`}
      >
        <Link to="contact" smooth={true} duration={500}>
          Need help?
        </Link>
      </div>
    </div>
  );
}

export default HeaderLinks;
