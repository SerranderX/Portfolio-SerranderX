import React, { LegacyRef } from 'react';
import styles from '@styles/Footer.module.scss';
import { motion } from 'framer-motion';
import { ENV } from '@config/config';
import FacebookIcon from '@iconos/social/facebook';
import TwitterIcon from '@iconos/social/twitter';
import LinkedinIcon from '@iconos/social/linkedin';
import GitHubIcon from '@iconos/social/github';

interface FooterProps {
  reference: LegacyRef<HTMLElement> | undefined
}

export const Footer: React.FC<FooterProps> = ({reference}) => {
    return (
      <footer className={`${styles['Footer-distributed']}`} ref={reference}>
        <div className={`${styles['Footer-right']}`}>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={ENV.developerData.facebook}
          >
            <i className={`${styles['fa-facebook']} ${styles.fa}`}>{FacebookIcon()}</i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={ENV.developerData.twitter}
          >
            <i className={`${styles['fa-twitter']} ${styles.fa}`}>{TwitterIcon()}</i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={ENV.developerData.linkedin}
          >
            <i className={`${styles['fa-linkedin']} ${styles.fa}`}>{LinkedinIcon()}</i>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={ENV.developerData.gitHub}
          >
            <i className={`${styles['fa-github']} ${styles.fa}`}>{GitHubIcon()}</i>
          </motion.a>
        </div>
        <div className={`${styles['Footer-left']}`}>
          <p className={`${styles['Footer-links']}`}>
            <a>About</a>
            <a>Experience</a>
            <a>Projects</a>
            <a>Contact</a>
          </p>
          <p className={`${styles['Footer-powered']}`}>{ENV.developerData.signature}</p>
        </div>
      </footer>
    );
};