import React from "react";
import styled from "styled-components";
import { skills } from "../../../data";
import SectionTitle from "../../SectionTitle/SectionTitle";
import SkillItem from "./SkillItem";

const skillList = skills;
const Skills = () => {
  return (
    <SkillsS>
      <SectionTitle title="Habilidades" faIcon="rocket" noLine />

      <ListSkillsS>
        {skillList.map((skill, i) => (
          <SkillItem key={i} skill={skill.skill} percent={skill.percent} />
        ))}
      </ListSkillsS>
    </SkillsS>
  );
};

export default Skills;

const SkillsS = styled.div`
  width: 100%;
`;
const ListSkillsS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
