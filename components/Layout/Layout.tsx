import Head from "next/head";
import { FC } from "react";
import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

interface IProps {
  title?: string;
}

const Layout: FC<IProps> = ({ title, children }) => {
  return (
    <LayoutS>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      {/* <Navbar /> */}
      <ContainerS>{children}</ContainerS>
    </LayoutS>
  );
};

export default Layout;
const LayoutS = styled.div`
  margin-top: 25px;
`;
const ContainerS = styled.div`
  width: var(--spaceCentered);
  margin: auto;

  @media (max-width: 400px) {
    width: 100%;
    padding: 10px;
  }
`;
