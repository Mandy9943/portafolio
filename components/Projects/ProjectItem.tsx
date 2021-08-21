import Link from "next/link";
import React from "react";
import styled from "styled-components";
import RegularButtom from "../Button/RegularButtom";
interface IProps {}
const ProjectItem = ({}: IProps) => {
  return (
    <ProjetItemS>
      <ProjectContainerS>
        <Link href="/project/1">
          <ImageContainerS>
            <img src="images/logo1.png" alt="" />
          </ImageContainerS>
        </Link>
        <ContentProjectS>
          <div className="title with-mb">
            <h3>Proyecto UE-Cuba</h3>
          </div>
          <div className="description with-mb">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
              nulla perspiciatis voluptatibus, id corporis.
            </p>
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
