import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import RegularButtom from "../components/Button/RegularButtom";
import Layout from "../components/Layout/Layout";
import Skills from "../components/Skills/Skills";
const name = " Armando Cesar Martin Calderon";

export default function Home() {
  return (
    <Layout title={`Portafolio - ${name}`}>
      <NameS>
        <h1>Armando Cesar Martin Calderon</h1>
      </NameS>
      <InfoSectionS>
        <ImageBox>
          <img src="/images/profile.jpg" alt="" />
        </ImageBox>
        <InfoBox>
          <div className="ocpation section">
            <h2>Front End Developer</h2>
          </div>
          <div className="description section">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            iure ipsam vel totam suscipit enim, repellat minima velit rem
            distinctio ex voluptate quam consequatur quod!
          </div>
          <div className="link section">
            <RegularButtom
              href="/"
              backgroundColor="var(--white)"
              mainColor="var(--primary)"
            >
              Ver mas
            </RegularButtom>
          </div>
        </InfoBox>
      </InfoSectionS>
      <ContentS>
        <ContentLeftS>
          <Skills />
        </ContentLeftS>
        <ContentRigthS></ContentRigthS>
      </ContentS>
    </Layout>
  );
}
const NameS = styled.div`
  width: 100%;
  display: flex;
  background: linear-gradient(180deg, #034ea2 0%, #00145e 100%);
  color: var(--light);
  padding: 15px 20px;
`;
const InfoSectionS = styled.div`
  width: 100%;
  display: flex;
  color: var(--dark);
`;
const ImageBox = styled.div`
  display: flex;
  flex: 30%;
  /* min-width: 250px; */
  padding: 15px 30px 15px 15px;
  img {
    width: 100%;
    /* border-radius: 50%; */
    box-shadow: 1px 1px 5px black;
  }
`;
const InfoBox = styled.div`
  flex: 70%;
  padding: 15px;
  .section {
    margin-bottom: 10px;
  }
  .link {
    margin-top: 30px;
  }
`;

const ContentS = styled.div`
  display: flex;
`;
const ContentLeftS = styled.div`
  flex: 33%;
`;
const ContentRigthS = styled.div`
  flex: 66%;
`;
