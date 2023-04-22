import React from "react";
import { ProjectType } from "../../@customTypes/project";
import { Website } from "../../@customTypes/project";

interface ProjectProps {
  project: ProjectType;
}
function Project({ project }: ProjectProps) {
  return (
    <div className="w-full h-full border border-gray-200 rounded-lg relative">
      <img
        className="object-cover w-full h-full rounded-lg"
        src={project.image?.url}
      />
      <div className="text-center p-5 absolute inset-0 flex items-center justify-center backdrop-blur-lg backdrop-filter opacity-0 transition-opacity duration-300 rounded-lg overflow-auto	mt-0 sm:mt-5 mb sm:mb-5">
        <div>
          <div className="text-amber-300 text-2xl font-bold">
            {project.name}
          </div>
          <div className="text-gray-500 font-sm">{project.description}</div>
          <div className="text-zinc-400	 font-sm mt-2">
            <div className="text-amber-300 ">Web Development link: </div>
            <div className="mb-2 text-blue-400">
              {project.webLink?.websites!.map((website: Website) => {
                return (
                  <div>
                    <a href={website.url} target="_blank">
                      {website.name}
                    </a>
                  </div>
                );
              })}
            </div>
            {(project?.androidLink || project?.iosLink) && (
              <div>
                <div className="text-amber-300">Mobile Development:</div>
                <div>
                  {project?.androidLink && (
                    <a
                      href={project?.androidLink}
                      target="_blank"
                      className="text-blue-400"
                    >
                      android link
                    </a>
                  )}
                </div>
                <div>
                  {project?.iosLink && (
                    <a
                      href={project?.iosLink}
                      target="_blank"
                      className="text-blue-400"
                    >
                      ios link
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
