import type { AppProps } from 'next/app'
import { useAppInitialState } from '@hooks/useAppInitialState'
import { AppContext } from '@context/AppContext'
import '@styles/globals.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  const appInitialState = useAppInitialState();

  return (
    <AppContext.Provider value={appInitialState}>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-14YYPXVWXJ" strategy="afterInteractive" />
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
  )
}

export default MyApp
