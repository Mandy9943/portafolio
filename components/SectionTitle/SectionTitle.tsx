import React from "react";
import styled from "styled-components";
interface IProps {
  title: string;
  faIcon?: string;
}

const SectionTitle = ({ title, faIcon }) => {
  return (
    <SectionTitleS className="section-title">
      <span className="icon">
        <i className={`fa fa-${faIcon}`}></i>
      </span>
      <h2 className="title">{title}</h2>
    </SectionTitleS>
  );
};

export default SectionTitle;

const SectionTitleS = styled.div`
  margin-bottom: 10px;
  color: var(--secondary);
  font-size: 20px;
  display: flex;
  align-items: center;
  .icon {
    background: var(--secondary);
    padding: 4px;
    color: white;
    height: fit-content;
    border-radius: 5px;
    margin-right: 5px;
  }
`;
