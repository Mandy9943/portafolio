import React from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import styled from "styled-components";

interface IProps {
  title: string;
  faIcon: string;
}
const TextSection = ({ title, faIcon }: IProps) => {
  return (
    <TextSectionS>
      <SectionTitle title={title} faIcon={faIcon} />
      <div className="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure modi
          tempora aperiam consequatur corporis ut praesentium repellat odio in.
          Officiis tenetur consequuntur delectus adipisci possimus eos ratione
          deleniti dignissimos distinctio?
        </p>
      </div>
    </TextSectionS>
  );
};

export default TextSection;

const TextSectionS = styled.div`
  margin-bottom: 30px;
  .description {
    line-height: 20px;
  }
`;
