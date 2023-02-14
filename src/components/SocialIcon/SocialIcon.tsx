import React from 'react';
import { motion } from 'framer-motion';
import styles from '@styles/SocialIcon.module.scss';

interface SocialIconInterface {
    iconContainerClass:string;
    svgClass:string;
    href:string;
    classFilter:string;
    nickname:string;
    SvgIconElement: React.ElementType;
}

export const SocialIcon: React.FC<SocialIconInterface> = ({iconContainerClass, svgClass, href, classFilter, nickname, SvgIconElement}) => {
    const [hover, setHover] = React.useState(false);
    const marginLeftNickname = nickname.length * -2.3;

    return (
        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => setHover(!hover)}
            onHoverEnd={() => setHover(!hover)}
            href={href}
            className={`${iconContainerClass && iconContainerClass} ${styles.container}`}
          >
            <i className={`${classFilter && classFilter} ${styles.fa}`}>
              <SvgIconElement svgClass={svgClass} />
            </i>
            {hover && <motion.span animate={{opacity: [0,1], transition: { dutarion: .1, ease: [0.04, 0.62, 0.23, 0.98] } }} style={{marginLeft: `${marginLeftNickname}px`}} className={styles.nickname}>{nickname}</motion.span>}
          </motion.a>
    );
};