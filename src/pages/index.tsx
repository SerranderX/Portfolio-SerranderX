import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { Presentation } from 'containers/Presentation/Presentation';
import { Footer } from 'containers/Footer/Footer';
import { Header } from 'containers/Header/Header';
import { Projects } from '@containers/Projects/Projects';
import { Experience } from '@containers/Experience/Experience';
import { Contact } from '@containers/Contact/Contact';
import { AboutMe } from '@containers/AboutMe/AboutMe';
import { ButtonNav } from '@components/ButtonNav/ButtonNav'; 
import { useNearScreen } from '@hooks/useNearScreen';
import { WindowSize } from '@interfaces/windowSize.interface';
import { useWindowsDimensions } from '@hooks/useWindowsDimensions';
import styles from '@styles/Home.module.scss'

const Home: NextPage = () => {
  const [showHeader, refHeader] = useNearScreen();
  const [showFooter, refFooter] = useNearScreen();
  const windowDimenions:WindowSize = useWindowsDimensions();

  return (
      <div id="app-portfolio" className={styles.container}>
        <Head >
          <title>Portfolio SerranderX</title>
        </Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-14YYPXVWXJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-14YYPXVWXJ');
          `}
        </Script>
        
        <Header reference={refHeader} windowDimenion={windowDimenions}/>
        <main className={styles.main}>
          <Presentation windowDimenions={windowDimenions} />
          <Experience windowDimenions={windowDimenions} />
          <Projects windowDimenions={windowDimenions} />
          <Contact />
          <AboutMe windowDimenions={windowDimenions} />
        </main>
        <Footer reference={refFooter}/>
        <ButtonNav showHeader={showHeader} showFooter={showFooter}/>
      </div>
  )
}

export default Home
