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
      <div className="text-center p-5 absolute inset-0 flex items-center justify-center backdrop-blur-sm blur-image  backdrop-filter opacity-0 transition-opacity duration-300 rounded-lg overflow-auto	pt-0 sm:pt-5  pb-0 sm:pb-5">
        <div>
          <div className="text-2xl font-bold">{project.name}</div>
          <div className="italic font-sm">{project.description}</div>
          <div className="text-white	 font-sm mt-2">
            <div className=" text-1xl">Web Development link: </div>
            <div className="mb-2 ">
              {project.webLink?.websites!.map((website: Website) => {
                return (
                  <div>
                    <a href={website.url} target="_blank" className="underline">
                      {website.name}
                    </a>
                  </div>
                );
              })}
            </div>
            {(project?.androidLink || project?.iosLink) && (
              <div>
                <div>Mobile Development:</div>
                <div>
                  {project?.androidLink && (
                    <a
                      href={project?.androidLink}
                      target="_blank"
                      className="underline"
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
                      className="underline"
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
