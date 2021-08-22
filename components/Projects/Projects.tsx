import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import { projects } from "../../data";
const Projects = () => {
  return (
    <ProjectsS>
      <SectionTitle title="Proyectos" noLine center />
      <ProjectsContainerS>
        {projects.map((project, i) => (
          <ProjectItem projetc={project} key={i} />
        ))}
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
