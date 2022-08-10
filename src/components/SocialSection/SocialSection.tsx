import React from 'react';
import { motion } from 'framer-motion';
import styles from '@styles/SocialSection.module.scss';
import { ENV } from '@config/config';
import { SocialIconsData } from '@utils/Utils'
import { SocialIcon } from '@components/SocialIcon/SocialIcon';


interface SocialSectionInterface {
    containerClass: string;
    svgClass: string;
    iconContainerClass: string;
}

export const SocialSection: React.FC<SocialSectionInterface> = ({containerClass, svgClass, iconContainerClass}): JSX.Element => {

    return (
        <div className={`${containerClass}`}>
            {SocialIconsData.map((icon, index) => 
              <SocialIcon 
                key={`${icon.name}-${svgClass}`}
                iconContainerClass={iconContainerClass}
                svgClass={svgClass}
                href={icon.url}
                classFilter={""}
                nickname={icon.nickname}
                SvgIconElement={icon.Icon}
              />
            )}
        </div>
    );
};