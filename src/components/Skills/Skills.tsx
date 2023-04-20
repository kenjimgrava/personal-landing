import React from "react";
import { Stack } from "../../@customTypes/stack";
import { getTechnologyStack } from "../../endpoints/hygrap";
import Skill from "../Skill/Skill";

function Skills() {
  const techStack = getTechnologyStack().technologyStacks || [];
  console.log("techStack ", techStack);

  return (
    <div className="mt-32" id="skills">
      <div className="text-white text-5xl text-center mb-10">My Skills</div>
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-5">
          {techStack.map((stack: Stack, index: number) => {
            return (
              <div
                key={index}
                className="bg-zinc-700 shadow-2xl hover:bg-amber-300 rounded-lg "
              >
                <Skill skill={stack} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
