import "../styles/global.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
