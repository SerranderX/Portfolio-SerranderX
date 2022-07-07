import React from 'react';
import Image from 'next/image';
import styles from '@styles/Header.module.scss';
import LogoComplete from '@logos/logo-complete.png';
import Logo from '@logos/logo.png';
import { WindowSize } from '@interfaces/windowSize.interface';  
import { useWindowsDimensions } from '@hooks/useWindowsDimensions'; 

export const Header = () => {
    const windowDimenion:WindowSize = useWindowsDimensions();

    console.log(windowDimenion)

    return (
        <header className={styles.header}>
          <nav className={styles.nav}>
            <div className={styles.container}>
              <a href="#about" className={styles.button}>About</a>
              <a href="#experience" className={styles.button}>Experience</a>
              <a href="#projects" className={styles.button}>Projects</a>
              <a href="#contact" className={styles.button}>Contact</a>
            </div>
            {windowDimenion.winWidth > 1246 && <Image src={LogoComplete} alt="LogoComplete" width={200} height={41} style={{backgroundColor: 'white'}}/>}
            {(windowDimenion.winWidth > 768 && windowDimenion.winWidth < 1246) && <Image src={LogoComplete} alt="LogoComplete" width={250} height={41} style={{backgroundColor: 'white'}}/>}
            {windowDimenion.winWidth <= 768 && <Image src={Logo} alt="Logo" width={37} height={22} style={{backgroundColor: 'white'}}/>}
          </nav>
        </header>
    );
};