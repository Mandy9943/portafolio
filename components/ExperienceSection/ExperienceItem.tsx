import React from "react";
import styled from "styled-components";
const ExperienceItem = () => {
  return (
    <ExperienceItemS>
      <div className="position section">
        <h3>Front end developer en Zonassoft</h3>
      </div>
      <div className="time section">2005 - 2021</div>
      <div className="description section">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius beatae
        officia deleniti perspiciatis ex repellendus explicabo quibusdam dolorem
        labore, consequuntur odit soluta sed commodi voluptate.
      </div>
      <div className="link">
        Sitio : <a href="https://zonassoft.com">https://zonassoft.com</a>
      </div>
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
