import { useTranslations } from "next-intl";
import { useRouter } from "next/dist/client/router";
import React from "react";
import styled from "styled-components";
import { experiences } from "../../../../data";
import SectionTitle from "../../SectionTitle/SectionTitle";
import ExperienceItem from "./ExperienceItem";

const experiencesList = experiences;

const Experience = () => {
  const t = useTranslations("Index");
  const { locale } = useRouter();

  return (
    <ExperienceS>
      <SectionTitle title={t("experience").toString()} faIcon="briefcase" />
      <div className="experinceContainer">
        <ul>
          {experiencesList.map((experience, i) => {
            const { position, place, beginDate, endDate, description, link } =
              experience[locale];
            return (
              <ExperienceItem
                key={i}
                place={place}
                position={position}
                beginDate={beginDate}
                endDate={endDate}
                description={description}
                link={link}
              />
            );
          })}
        </ul>
      </div>
    </ExperienceS>
  );
};

export default Experience;

const ExperienceS = styled.div`
  width: 100%;
  margin-bottom: 5px;
  .experinceContainer {
    width: 100%;
    padding-left: 50px;
    ul {
      list-style: initial;
    }
  }
`;
