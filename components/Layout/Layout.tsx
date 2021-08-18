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
      <Navbar />
      {children}
    </LayoutS>
  );
};

export default Layout;
const LayoutS = styled.div``;
