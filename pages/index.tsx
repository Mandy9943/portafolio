import Head from "next/head";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
const name = " Armando Cesar Martin Calderon";

export default function Home() {
  return (
    <Layout title={`Portafolio - ${name}`}>
      <div>
        <ImageBox>
          <img src="profile.jpg" alt="" />
        </ImageBox>
        <InfoBox>
          <div className="name">Armando Cesar Martin Calderon</div>
          <div className="ocpation">Front End Developer</div>
        </InfoBox>
      </div>
    </Layout>
  );
}
const ImageBox = styled.div`
  flex: 33.33.%;
`;
const InfoBox = styled.div`
  flex: 66.66.%;
  padding: 0 10px;
`;
