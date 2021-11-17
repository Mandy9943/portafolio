import Link from "next/link";
import Image from "next/image";
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
            <Image
              src={img}
              alt={title}
              width="710px"
              height="355px"
              className="img-project"
            />
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
  max-width: 455px;
  @media (max-width: 1024px) {
    flex: 50%;
  }
  @media (max-width: 600px) {
    flex: 100%;
  }
`;
const ProjectContainerS = styled.div`
  border-radius: 20px;
  box-shadow: 1px 1px 4px var(--dark);
  min-height: 350px;
  background-color: var(--white);
`;
const ImageContainerS = styled.div`
  max-height: 250px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 20px 20px 0 0;
  .img-project {
    width: 100% !important;
  }

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
