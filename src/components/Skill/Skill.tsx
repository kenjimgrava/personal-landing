import React from "react";
import { Stack } from "../../@customTypes/stack";
interface SkillProps {
  skill: Stack;
}
function Skill({ skill }: SkillProps) {
  return (
    <div className=" h-52 flex justify-center items-center">
      <div className="p-5">
        <div className="text-center">
          <img src={skill?.image?.url} width={150} />
        </div>
        <div className="text-center mt-3 font-medium">{skill.title}</div>
      </div>
    </div>
  );
}

export default Skill;
