import "../styles/global.css";
import "../styles/font-awesome/css/font-awesome.min.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
