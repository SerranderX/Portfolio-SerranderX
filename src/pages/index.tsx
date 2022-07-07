import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import { Presentation } from 'containers/Presentation/Presentation';
import { Footer } from 'containers/Footer/Footer';
import { Header } from 'containers/Header/Header';
import { Proyects } from 'containers/Proyects/Proyects';
import { Experience } from '@containers/Experience/Experience';
import { Contact } from '@containers/Contact/Contact';
import { AboutMe } from '@containers/AboutMe/AboutMe';

const Home: NextPage = () => {
  return (
      <div id="app-portfolio" className={styles.container}>
        <Head>
          <title>Portfolio SerranderX</title>
          <meta name="description" content="This is a portfolio proyect about the author SerranderX" />
          <link rel="icon" href="favicon.ico" />
        </Head>

        <Header />
        <main className={styles.main}>
          <Presentation />
          <Experience />
          <Proyects />
          <Contact />
          <AboutMe />
        </main>
        <Footer />
      </div>
  )
}

export default Home
