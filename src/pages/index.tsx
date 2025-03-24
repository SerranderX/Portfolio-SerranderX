import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import { Presentation } from 'containers/Presentation/Presentation';
import { Footer } from 'containers/Footer/Footer';
import { Header } from 'containers/Header/Header';
import { Projects } from '@containers/Projects/Projects';
import { Experience } from '@containers/Experience/Experience';
import { Timeline } from '@containers/Timeline/Timeline';
import { Contact } from '@containers/Contact/Contact';
import { AboutMe } from '@containers/AboutMe/AboutMe';
import { ButtonNav } from '@components/ButtonNav/ButtonNav'; 
import { useNearScreen } from '@hooks/useNearScreen';
import { WindowSize } from '@interfaces/windowSize.interface';
import { useWindowsDimensions } from '@hooks/useWindowsDimensions';
import { motion } from "framer-motion";
import styles from '@styles/Home.module.scss'
import { useEffect, useState } from 'react';
import { LoadingPage } from '@containers/LoadingPage/LoadingPage';

const Home: NextPage = () => {
  const [showHeader, refHeader] = useNearScreen();
  const [showFooter, refFooter] = useNearScreen();
  const [loading, setLoading] = useState<boolean>(true);
  const windowDimenions:WindowSize = useWindowsDimensions();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  },[]);

  return (
      <div id="app-portfolio" className={styles.container}>
        <Head >
          <title>Portfolio SerranderX</title>
        </Head>
        
        <Header reference={refHeader} windowDimenion={windowDimenions}/>
        {!loading && 
          <motion.main 
            className={styles.main}
            animate={{opacity: [0,1]}}
            transition={{ duration: .6, ease: [0.04, 0.62, 0.23, 0.98], delay: .5 }}
          >
            <Presentation windowDimenions={windowDimenions} />
            <Experience windowDimenions={windowDimenions} />
            <Projects windowDimenions={windowDimenions} />
            <Contact />
            <AboutMe windowDimenions={windowDimenions} />
          </motion.main>
        }
        {loading && 
          <LoadingPage />
        }
        <Footer reference={refFooter}/>
        <ButtonNav showHeader={showHeader} showFooter={showFooter}/>
      </div>
  )
}

export default Home
