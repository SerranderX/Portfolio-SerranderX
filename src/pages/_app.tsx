import type { AppProps } from "next/app";
import { useAppInitialState } from "@hooks/useAppInitialState";
import { AppContext } from "@context/AppContext";
import "@styles/globals.scss";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
    const appInitialState = useAppInitialState();

    return (
        <AppContext.Provider value={appInitialState}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-14YYPXVWXJ"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-14YYPXVWXJ');
        `}
            </Script>
            <Component {...pageProps} />
        </AppContext.Provider>
    );
}

export default MyApp;
