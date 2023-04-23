import React, { useEffect, useState } from "react";
import logo from "@assets/logo.png";
import { Link } from "react-scroll";
import HeaderLinks from "../../components/HeaderLinks/HeaderLinks";

function Header() {
  const [bgColor, setBgColor] = useState("");
  const [activeSection, setActiveSection] = useState("");
  const [showHamburger, setShowHamburger] = useState(false);

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

  const setState = () => {
    setShowHamburger(!showHamburger);
    console.log({ showHamburger });
  };

  return (
    <div
      className={`sticky top-0 z-999999 relative !important w-full p-5   ${
        bgColor === "transparent" ? "background shadow-xl" : ""
      } sm:px-4 `}
    >
      <div className="flex items-center justify-between px-0 lg:px-40 h-20 text-neutral-400	 ">
        <img src={logo} width={200} />
        <div className="block sm:hidden" onClick={setState}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>

        <div className="hidden sm:block">
          <HeaderLinks activeSection={activeSection} />
        </div>
      </div>
      {showHamburger && (
        <div className="flex justify-between block sm:hidden">
          <div></div>
          <HeaderLinks activeSection={activeSection} />
        </div>
      )}
    </div>
  );
}

export default Header;
