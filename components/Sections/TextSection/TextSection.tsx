import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import styled from "styled-components";
import { isArray } from "util";

interface IProps {
  title: string;
  faIcon: string;
  content: string | string[];
}
const TextSection = ({ title, faIcon, content }: IProps) => {
  return (
    <TextSectionS>
      <SectionTitle title={title} faIcon={faIcon} />
      <div className="description">
        {typeof content === "string" ? (
          <p>{content}</p>
        ) : (
          <ul>
            {content.map((str, i) => (
              <li key={i}>
                <p>{str}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </TextSectionS>
  );
};

export default TextSection;

const TextSectionS = styled.div`
  margin-bottom: 30px;
  .description {
    line-height: 20px;
    margin-left: 50px;
  }
  ul {
    list-style: initial;
  }
`;
