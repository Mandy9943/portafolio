import React from "react";
import styled from "styled-components";
import ProgresBar from "../../ProgresBar/ProgresBar";
const SkillItem = () => {
  return (
    <SkillItemS>
      <div className="skillname">JavaScript</div>
      <div className="progress">
        <ProgresBar
          percent={70}
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
