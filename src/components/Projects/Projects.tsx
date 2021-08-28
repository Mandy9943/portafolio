import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import { projects } from "../../../data";
import { useTranslations } from "next-intl";
import { useRouter } from "next/dist/client/router";
const Projects = () => {
  const t = useTranslations("Index");
  const { locale } = useRouter();
  return (
    <ProjectsS>
      <SectionTitle title={t("projects").toString()} noLine center />
      <ProjectsContainerS>
        {projects.map((project, i) => (
          <ProjectItem projetc={project[locale]} key={i} />
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
