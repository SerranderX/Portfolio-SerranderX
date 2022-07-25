import React, {LegacyRef, MutableRefObject, RefObject, useState} from 'react';
import Image from 'next/image';
import styles from '@styles/Header.module.scss';
import LogoComplete from '@logos/logo-complete.png';
import { WindowSize } from '@interfaces/windowSize.interface';  
import { useWindowsDimensions } from '@hooks/useWindowsDimensions';
import { AnimatePresence, motion } from 'framer-motion'; 

const variantsSection = {
  open: { opacity: 1, height: 'auto' },
  collapsed: { opacity: 0, height: 0 },
}

interface HeaderProps {
  reference: LegacyRef<HTMLElement>,
  windowDimenion:WindowSize
}

export const Header: React.FC<HeaderProps> = ({reference, windowDimenion}) => {
    const [navState, setNavState] = useState(false);

    const handleNavButton = () => {
        setNavState(!navState);
    }

    return (
        <header className={styles.header} ref={reference}>
          <h1 className={`${styles['header-title']}`}>Portfolio</h1>
          <nav className={styles.nav}>
            <div className={styles.container}>
              {windowDimenion.winWidth < 1200 && 
                <>
                  <div style={{display: 'flex', margin: '1rem 0 3rem 0', alignSelf: 'center'}}>
                    <Image src={LogoComplete} alt="LogoComplete" width={525} height={112} style={{backgroundColor: 'white'}}/>
                  </div>
                  <motion.a 
                    href="#" 
                    onClick={handleNavButton} 
                    whileTap={{ scale: 0.95, opacity: [1, 0.5, 1] }}
                    className={`${styles['button-mobile']} ${(navState) ? styles['menu-button-mobile-open'] : styles['menu-button-mobile']} ${navState && styles['menu-mobile-selected']}`}>
                      Menu
                  </motion.a> 
                  <AnimatePresence initial={false}>
                    {navState &&
                      <motion.div 
                        className={`${styles['container-nav-mobile']}`}
                        initial="collapsed"
                        animate={navState ? "open" : "collapsed"}
                        exit="collapsed"
                        variants={variantsSection}
                        transition={{ duration: .6, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <motion.a href="#about" animate={{opacity: [0, 1]}} className={`${styles['button-mobile']} ${styles['button-mobile-text-center']}`}>About</motion.a>
                        <motion.a href="#experience" animate={{opacity: [0, 1]}} className={`${styles['button-mobile']} ${styles['button-mobile-text-center']}`}>Experience</motion.a>
                        <motion.a href="#projects" animate={{opacity: [0, 1]}} className={`${styles['button-mobile']} ${styles['button-mobile-text-center']}`}>Projects</motion.a>
                        <motion.a href="#contact" animate={{opacity: [0, 1]}} className={`${styles['button-mobile']} ${styles['button-mobile-text-center']}`}>Contact</motion.a>
                      </motion.div>
                    }
                  </AnimatePresence>
                </>
              }
              {windowDimenion.winWidth >= 1200 &&
                <>
                  <a href="#about" className={styles.button}>About</a>
                  <a href="#experience" className={styles.button}>Experience</a>
                  <a href="#projects" className={styles.button}>Projects</a>
                  <a href="#contact" className={styles.button}>Contact</a>
                </>
              }
            </div>
            {windowDimenion.winWidth >= 1200 && <Image src={LogoComplete} alt="LogoComplete" width={200} height={41} style={{backgroundColor: 'white'}}/> }
          </nav>
        </header>
    );
};