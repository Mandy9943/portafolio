import styled from "styled-components";
import Experience from "../components/ExperienceSection/Experience";
import InfoSection from "../components/InfoSection/InfoSection";
import Layout from "../components/Layout/Layout";
import Projects from "../components/Projects/Projects";
import Skills from "../components/SkillsSection/Skills";
import TextSection from "../components/TextSection/TextSection";
const name = " Armando Cesar Martin Calderon";

export default function Home() {
  return (
    <Layout title={`Portafolio - ${name}`}>
      <NameS>
        <h1>Armando Cesar Martin Calderon</h1>
      </NameS>
      <InfoSection />
      <ContentS>
        <ContentLeftS>
          <Skills />
        </ContentLeftS>
        <ContentRigthS>
          <Experience />
          <TextSection title="Objetivos" faIcon="industry" />
          <TextSection title="Informacion Adicional" faIcon="plus" />
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
