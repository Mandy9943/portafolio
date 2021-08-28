import styled from "styled-components";
import Experience from "../src/components/Sections/ExperienceSection/Experience";
import InfoSection from "../src/components/Sections/InfoSection/InfoSection";
import Layout from "../src/components/Layout/Layout";
import Projects from "../src/components/Projects/Projects";
import Skills from "../src/components/Sections/SkillsSection/Skills";
import TextSection from "../src/components/Sections/TextSection/TextSection";
import { adictionalInfo, objetives, personalInfo } from "../data";
import { useRouter } from "next/dist/client/router";
import { useTranslations } from "next-intl";

const info = personalInfo;

export default function Home() {
  const t = useTranslations("Index");
  const { locale } = useRouter();

  const adictional_info = adictionalInfo.map((info) => {
    return info[locale];
  });

  return (
    <Layout title={`CV - ${info.name}`}>
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
            title={t("objetive").toString()}
            faIcon="industry"
            content={objetives[locale]}
          />
          <TextSection
            title={t("personal_info").toString()}
            faIcon="plus"
            content={adictional_info}
          />
        </ContentRigthS>
      </ContentS>
      <Projects />
    </Layout>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../src/assets/translations/index/${locale}.json`),
      },
    },
  };
}

const NameS = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(180deg, #034ea2 0%, #00145e 100%);
  color: var(--light);
  padding: 15px 20px;
  border-radius: 5px;
  justify-content: center;
  h1 {
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
`;

const ContentS = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const ContentLeftS = styled.div`
  flex: 33%;
  padding: 20px;
`;
const ContentRigthS = styled.div`
  flex: 66%;
  padding: 20px 0 20px 20px;
  @media (max-width: 400px) {
    padding: 7px;
  }
`;
