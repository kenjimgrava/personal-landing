import React from "react";
import image from "@assets/kenji-boy.png";
import linkedIn from "@assets/linkedin.webp";
import git from "@assets/github.png";
import { Button } from "../../components";
import resume from "@assets/resume/resume.pdf";
function About() {
  const downloadResume = () => {
    const fileName = "Kenji-mille-grava-resume.pdf";
    const link = document.createElement("a");
    link.href = resume;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={` h-full text-gray-400 container mx-auto`} id="about">
      <div className="md:flex items-center justify-around">
        <div className="mb-2 md:mb-0 p-5">
          <div className="text-xl">
            Hi, I'm{" "}
            <span className="text-color-blue text-5xl">Kenji Mille Grava</span>
          </div>
          <div className="text-xl mb-2 mt-2">
            and I'm{" "}
            <span className="text-color-blue text-2xl">Software Developer</span>
          </div>
          <Button
            text="Download my Resume"
            callBack={downloadResume}
            className="transform transition-transform hover:scale-105"
          />
        </div>
        <div className="p-5">
          <img src={image} width={700} className="rounded-lg" />
          <div className="flex gap-4 -mt-14 justify-between ">
            <div></div>
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/kmg-4all"
                target="_blank"
                className="transform transition-transform hover:scale-105"
              >
                <img
                  className="cursor-pointer rounded-lg"
                  src={linkedIn}
                  width={64}
                  height={64}
                />
              </a>
              <a
                className="mt-3 mr-3 transform transition-transform hover:scale-105"
                href="https://github.com/kenjimgrava"
                target="_blank"
              >
                <img
                  className="cursor-pointer rounded-lg"
                  src={git}
                  width={37}
                  height={35}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="text-5xl text-white mb-5">About</div>
        <div className="flex  gap-5">
          <div className="border h-1  border-amber-300 w-20"></div>
          <div className="-mt-2 text-xl">
            I'm an experienced Software Developer with 5 - 6 years of
            experience, specializing in web applications. My expertise includes
            React, Angular, TypeScript, JavaScript, and UI libraries. I focus on
            delivering pixel-perfect, responsive designs and have skills in
            optimizing performance, conducting testing, and collaborating within
            cross- functional teams.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
