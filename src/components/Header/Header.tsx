import React, { useEffect, useState } from "react";
import logo from "@assets/logo.png";
import { Link } from "react-scroll";

function Header() {
  const [bgColor, setBgColor] = useState("");

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
          <div className=" hover:text-amber-300 cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </div>
          <div className="hover:text-amber-300 cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </div>
          <div className="hover:text-amber-300 cursor-pointer">
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </div>
          <div className="hover:text-amber-300 cursor-pointer">
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
