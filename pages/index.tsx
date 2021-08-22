import styled from "styled-components";
import Experience from "../components/Sections/ExperienceSection/Experience";
import InfoSection from "../components/Sections/InfoSection/InfoSection";
import Layout from "../components/Layout/Layout";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Sections/SkillsSection/Skills";
import TextSection from "../components/Sections/TextSection/TextSection";
import { adictionalInfo, objetives, personalInfo } from "../data";

const info = personalInfo;

export default function Home() {
  return (
    <Layout title={`Portafolio - ${info.name}`}>
      <NameS>
        <h1>{info.name}</h1>
      </NameS>
      <InfoSection info={info} />
      <ContentS>
        <ContentLeftS>
          <Skills />
        </ContentLeftS>
        <ContentRigthS>
          <Experience />
          <TextSection
            title="Objetivos"
            faIcon="industry"
            content={objetives}
          />
          <TextSection
            title="Informacion Adicional"
            faIcon="plus"
            content={adictionalInfo}
          />
        </ContentRigthS>
      </ContentS>
      <Projects />
    </Layout>
  );
}
const NameS = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(180deg, #034ea2 0%, #00145e 100%);
  color: var(--light);
  padding: 15px 20px;
  border-radius: 5px;
  justify-content: center;
`;

const ContentS = styled.div`
  display: flex;
`;
const ContentLeftS = styled.div`
  flex: 33%;
  padding: 20px;
`;
const ContentRigthS = styled.div`
  flex: 66%;
  padding: 20px 0 20px 20px;
`;
