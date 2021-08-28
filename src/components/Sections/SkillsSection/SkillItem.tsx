import React from "react";
import styled from "styled-components";
import ProgresBar from "../../ProgresBar/ProgresBar";

interface IProps {
  skill: string;
  percent: number;
}

const SkillItem = ({ skill, percent }: IProps) => {
  return (
    <SkillItemS>
      <div className="skillname">{skill}</div>
      <div className="progress">
        <ProgresBar
          percent={percent}
          totalProgresColor="var(--gray)"
          progresColor="var(--primary)"
        />
      </div>
    </SkillItemS>
  );
};

export default SkillItem;

const SkillItemS = styled.div`
  margin-bottom: 8px;
`;
