import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  isRow?:boolean;
}

const BoxSection: FC<IProps> = ({ children, title,isRow }) => {
  return (
    <BoxSectionS>
      <h3 className="heading with-mb">{title}</h3>
      <ContentS isRow={isRow}>{children}</ContentS>
    </BoxSectionS>
  );
};

export default BoxSection;

interface IContentS{
  isRow?:boolean;
}

const BoxSectionS = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
`;

const ContentS = styled.div<IContentS>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 730px) {
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (max-width: 630px) {
    justify-content: flex-start;
    flex-direction: ${props => props.isRow ? "row" : "column"};
    flex-wrap: ${props => props.isRow ? "nowrap" : "wrap"};
  }
`;
