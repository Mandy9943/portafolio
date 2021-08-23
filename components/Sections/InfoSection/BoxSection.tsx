import React, { FC } from "react";
import styled from "styled-components";
import InfoItem from "./InfoItem";

interface IProps {
  title: string;
}

const BoxSection: FC<IProps> = ({ children, title }) => {
  return (
    <BoxSectionS>
      <h3 className="heading with-mb">{title}</h3>
      <ContentS>{children}</ContentS>
    </BoxSectionS>
  );
};

export default BoxSection;

const BoxSectionS = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
`;
const ContentS = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 730px) {
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
