import React from "react";
import styled from "styled-components";

interface IProps {
  position: string;
  place: string;
  beginDate: string;
  endDate: string;
  description: string;
  link?: string;
}
const ExperienceItem = ({
  position,
  place,
  beginDate,
  endDate,
  description,
  link,
}: IProps) => {
  return (
    <ExperienceItemS>
      <div className="position section">
        <h3>
          {position} en {place}
        </h3>
      </div>
      <div className="time section">
        {beginDate} - {endDate}
      </div>
      <div className="description section">{description}</div>
      {link && (
        <div className="link">
          Sitio :{" "}
          <a href={link} target="_blank">
            {link}
          </a>
        </div>
      )}
    </ExperienceItemS>
  );
};

export default ExperienceItem;

const ExperienceItemS = styled.li`
  line-height: 20px;
  margin-bottom: 25px;
  .section {
    margin-bottom: 10px;
  }
`;
