import React from "react";
import { Stack } from "../../@customTypes/stack";
interface SkillProps {
  skill: Stack;
}
function Skill({ skill }: SkillProps) {
  return (
    <div className="">
      <div className="p-5">
        <div className="text-center image-wrapper flex items-center	">
          <img src={skill?.image?.url} className="image" />
        </div>
        <div className="text-center mt-3 font-medium h-30">{skill.title}</div>
      </div>
    </div>
  );
}

export default Skill;
