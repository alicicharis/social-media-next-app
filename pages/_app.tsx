import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DisplayContextProvider } from "../store/FormContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DisplayContextProvider>
      <Component {...pageProps} />
    </DisplayContextProvider>
  );
}

export default MyApp;
