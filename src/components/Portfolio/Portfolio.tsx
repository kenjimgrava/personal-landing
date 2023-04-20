import React from "react";
import { ProjectType } from "../../@customTypes/project";
import { getProjects } from "../../endpoints/hygrap";
import Project from "../Project/Project";

function Portfolio() {
  const projects = getProjects().projects;
  return (
    <div className="mt-32" id="portfolio">
      <div className="text-white text-5xl text-center mb-10 flex items-center justify-between">
        <div>My Portfolio</div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
          {projects?.map((project: ProjectType) => {
            return (
              <div className="mt-5 sm:mt-0 p-5 sm:p-0">
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
