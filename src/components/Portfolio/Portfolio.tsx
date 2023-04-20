import React from "react";
import { ProjectType } from "../../@customTypes/project";
import { getProjects } from "../../endpoints/hygrap";
import Project from "../Project/Project";

function Portfolio() {
  const projects = getProjects().projects;
  console.log("projects ", projects);

  return (
    <div className="mt-32" id="portfolio">
      <div className="text-white text-5xl text-center mb-10">My Portfolio</div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
          {projects?.map((project: ProjectType) => {
            return (
              <div className="">
                <Project project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
