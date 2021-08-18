import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillItem from "./SkillItem";
const Skills = () => {
  return (
    <SkillsS>
      <SectionTitle title="Habilidades" faIcon="rocket" />

      <ListSkillsS>
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
      </ListSkillsS>
    </SkillsS>
  );
};

export default Skills;

const SkillsS = styled.div`
  width: 100%;
  padding: 20px 10px;
`;
const ListSkillsS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
