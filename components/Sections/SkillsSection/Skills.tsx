import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { skills } from "../../../data";
import useResize from "../../../hooks/useResize";
import RegularButtom from "../../Button/RegularButtom";
import SectionTitle from "../../SectionTitle/SectionTitle";
import SkillItem from "./SkillItem";

const skillList = skills;
const Skills = () => {
  const isLine = useResize(1024);
  const [isOpen, setIsOpen] = useState(false);
  const skillRef: React.Ref<HTMLDivElement> = useRef(null);

  const handleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      if (skillRef && skillRef.current) {
        skillRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isOpen]);

  return (
    <SkillsS ref={skillRef}>
      <SectionTitle title="Habilidades" faIcon="rocket" noLine={!isLine} />

      <ListSkillsS>
        {skillList.map((skill, i) => {
          if (isOpen) {
            return (
              <SkillItem key={i} skill={skill.skill} percent={skill.percent} />
            );
          } else {
            if (i < 10) {
              return (
                <SkillItem
                  key={i}
                  skill={skill.skill}
                  percent={skill.percent}
                />
              );
            }
          }
        })}
      </ListSkillsS>
      <RegularButtom onClick={handleOpen}>
        {isOpen ? <span>Ver Menos</span> : "Ver mas"}
      </RegularButtom>
    </SkillsS>
  );
};

export default Skills;

const SkillsS = styled.div`
  width: 100%;
`;
const ListSkillsS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
