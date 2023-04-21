import React from "react";
import image from "@assets/kenji-boy.png";
import linkedIn from "@assets/linkedin.webp";
import git from "@assets/github.png";
import Button from "../Button/Button";
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
            <span className="text-amber-300 text-5xl">Kenji Mille Grava</span>
          </div>
          <div className="text-xl mb-2 mt-2">
            and I'm{" "}
            <span className="text-amber-300 text-2xl">Software Developer</span>
          </div>
          <Button text="Download my Resume" callBack={downloadResume} />
        </div>
        <div className="p-5">
          <img src={image} width={700} className="rounded-lg" />
          <div className="flex gap-4 -mt-14 justify-between ">
            <div></div>
            <div className="flex">
              <a href="https://www.linkedin.com/in/kmg-4all" target="_blank">
                <img
                  className="cursor-pointer rounded-lg"
                  src={linkedIn}
                  width={64}
                  height={64}
                />
              </a>
              <a
                className="mt-3 mr-3"
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
            I am <span className="text-amber-300">passionate</span> about{" "}
            <span className="text-amber-300">learning</span> and{" "}
            <span className="text-amber-300">expanding my skillset</span>, and I
            thrive in{" "}
            <span className="text-amber-300">challenging environments</span>{" "}
            that allow me to <span className="text-amber-300">collaborate</span>{" "}
            with other{" "}
            <span className="text-amber-300">talented individuals</span> and{" "}
            <span className="text-amber-300">contribute</span> to{" "}
            <span className="text-amber-300">innovative projects</span>. As a{" "}
            <span className="text-amber-300">software developer</span>, I am
            always looking for new ways to improve and{" "}
            <span className="text-amber-300">streamline processes</span>, and I
            am committed to{" "}
            <span className="text-amber-300">producing high-quality work</span>{" "}
            that meets the needs of both clients and end-users. If you are
            looking for a dedicated and{" "}
            <span className="text-amber-300">skilled software developer</span>
            to join your team, I would love to talk with you about how my{" "}
            <span className="text-amber-300">experience</span> and{" "}
            <span className="text-amber-300">expertise</span> can benefit your
            organization. Thank you and have a nice day!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
