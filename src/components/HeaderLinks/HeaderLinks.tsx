import React from "react";
import { Link } from "react-scroll";

function HeaderLinks({ activeSection }: any) {
  return (
    <div className="flex gap-5 ">
      <div
        className={`text-color-blue-hover cursor-pointer ${
          activeSection === "about" ? "text-color-blue" : ""
        }`}
      >
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </div>
      <div
        className={`text-color-blue-hover cursor-pointer ${
          activeSection === "skills" ? "text-color-blue" : ""
        }`}
      >
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
      </div>
      <div
        className={`text-color-blue-hover cursor-pointer ${
          activeSection === "portfolio" ? "text-color-blue" : ""
        }`}
      >
        <Link to="portfolio" smooth={true} duration={500}>
          Portfolio
        </Link>
      </div>
      <div
        className={`text-color-blue-hover cursor-pointer ${
          activeSection === "contact" ? "text-color-blue" : ""
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
