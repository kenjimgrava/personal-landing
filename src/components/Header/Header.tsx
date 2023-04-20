import React, { useEffect, useState } from "react";
import logo from "@assets/logo.png";
import { Link } from "react-scroll";

function Header() {
  const [bgColor, setBgColor] = useState("");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 10) {
      setBgColor("");
    } else {
      setBgColor("transparent");
    }

    // Find the active section based on the current scroll position
    const sections = ["about", "skills", "portfolio", "contact"];
    const currentSection =
      sections.find(
        (section) =>
          currentScrollPos >= document.getElementById(section)!.offsetTop &&
          currentScrollPos <
            document.getElementById(section)!.offsetTop +
              document.getElementById(section)!.offsetHeight
      ) || "";
    setActiveSection(currentSection);
  };

  return (
    <div
      className={`sticky top-0 z-999999 relative !important w-full p-5   ${
        bgColor === "transparent" ? "background shadow-xl" : ""
      } sm:px-4 `}
    >
      <div className="flex items-center justify-between px-0 md:px-40 h-20 text-neutral-400	 ">
        <img src={logo} width={200} />
        <div className="flex gap-5">
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
      </div>
    </div>
  );
}

export default Header;
