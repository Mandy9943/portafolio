import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <ProjectsS>
      <SectionTitle title="Proyectos" noLine center />
      <ProjectsContainerS>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </ProjectsContainerS>
    </ProjectsS>
  );
};

export default Projects;

const ProjectsS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ProjectsContainerS = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
