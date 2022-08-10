import React, { LegacyRef, MutableRefObject, RefObject, useContext } from 'react';
import styles from '@styles/Footer.module.scss';
import { ENV } from '@config/config';
import { AppContext } from '@context/AppContext';
import { SocialSection } from '@components/SocialSection/SocialSection';

interface FooterProps {
  reference: LegacyRef<HTMLElement>
}

export const Footer: React.FC<FooterProps> = ({reference}) => {
    const { lenguageState: { lenguageSelectedData: {data: { footer }} } } = useContext(AppContext);

    return (
      <footer className={`${styles['Footer-distributed']}`} ref={reference}>
        <SocialSection containerClass={`${styles['Footer-right']}`} svgClass={styles.svgClass} iconContainerClass={""}/>
        <div className={`${styles['Footer-left']}`}>
          <p className={`${styles['Footer-links']}`}>
            <a href="#about">{footer.navbar.about}</a>
            <a href="#experience">{footer.navbar.experience}</a>
            <a href="#projects">{footer.navbar.projects}</a>
            <a href="#contact">{footer.navbar.contact}</a>
          </p>
          <p className={`${styles['Footer-powered']}`}>{ENV.developerData.signature}</p>
        </div>
      </footer>
    );
};