import React from "react";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <ExperienceS>
      <SectionTitle title="Experiencia" faIcon="briefcase" />
      <div className="experinceContainer">
        <ul>
          <ExperienceItem />
        </ul>
      </div>
    </ExperienceS>
  );
};

export default Experience;

const ExperienceS = styled.div`
  width: 100%;
  margin-bottom: 5px;
  .experinceContainer {
    width: 100%;
    padding-left: 50px;
    ul {
      list-style: initial;
    }
  }
`;
