import type { AppProps } from 'next/app'
import { useAppInitialState } from '@hooks/useAppInitialState'
import { AppContext } from '@context/AppContext'
import '@styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const appInitialState = useAppInitialState();

  return (
    <AppContext.Provider value={appInitialState}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
