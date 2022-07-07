import React from 'react';
import Image from 'next/image';
import LogoComplete from '@logos/logo-complete.png';
import styles from '@styles/Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
        <a href="#" target="_blank"  rel="noopener noreferrer">
          {'{ Powered by '}
          <span className={styles.logo}>
            <Image src={LogoComplete} alt="SerranderX-logo" width={150} height={31} style={{backgroundColor: 'white'}} />
          </span>
          {' }'}
        </a>
      </footer>
    );
};