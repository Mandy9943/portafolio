import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
const name = " Armando Cesar Martin Calderon";

export default function Home() {
  return (
    <Layout title={`Portafolio - ${name}`}>
      <InfoSectionS>
        <ImageBox>
          <img src="profile.jpg" alt="" />
        </ImageBox>
        <InfoBox>
          <div className="name">Armando Cesar Martin Calderon</div>
          <div className="ocpation">Front End Developer</div>
        </InfoBox>
      </InfoSectionS>
    </Layout>
  );
}
const InfoSectionS = styled.div`
  width: 100%;
  display: flex;
`;
const ImageBox = styled.div`
  display: flex;
  flex: 33%;
  img {
    width: 100%;
  }
`;
const InfoBox = styled.div`
  flex: 66%;
  padding: 0 10px;
`;
