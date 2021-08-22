import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IProject } from "../../types/types";
import RegularButtom from "../Button/RegularButtom";
interface IProps {
  projetc: IProject;
}
const ProjectItem = ({ projetc }: IProps) => {
  const { title, description, img, link } = projetc;
  return (
    <ProjetItemS>
      <ProjectContainerS>
        <ImageContainerS>
          <Link href={link}>
            <img src={img} alt={title} />
          </Link>
        </ImageContainerS>
        <ContentProjectS>
          <div className="title with-mb">
            <h3>{title}</h3>
          </div>
          <div className="description with-mb">
            <p>{description}</p>
          </div>
        </ContentProjectS>
      </ProjectContainerS>
    </ProjetItemS>
  );
};

export default ProjectItem;

const ProjetItemS = styled.div`
  flex: 33.33%;
  padding: 30px;
`;
const ProjectContainerS = styled.div`
  border: 1px solid var(--primary);
  border-radius: 5px;
  box-shadow: 1px 1px 4px var(--dark);
  min-height: 380px;
`;
const ImageContainerS = styled.div`
  max-height: 250px;
  overflow: hidden;
  cursor: pointer;

  /* transform: scale(50%); */
  img {
    transform: scale(1);
    transition: all 0.2s ease-in-out;

    height: auto;
    :hover {
      transform: scale(1.5);
    }
  }
`;

const ContentProjectS = styled.div`
  padding: 10px;
`;
