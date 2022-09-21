import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import { DisplayContextProvider } from "../store/FormContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <DisplayContextProvider>
        <Component {...pageProps} />
      </DisplayContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
