import React from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon } from '@iconos/Download';

interface MenuItemMobileProps {
    classNames: string;
    href: string;
    children: React.ReactNode;
    i: number;
    onClick: () => void
    download: boolean;
}

const variantsMenuItems = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }

export const MenuItemMobile: React.FC<MenuItemMobileProps> = ({classNames, children, href, i, download, onClick}): JSX.Element => {
    return (
        <motion.a
            href={href}
            className={classNames}
            variants={variantsMenuItems}
            download={download}
            onClick={onClick}
        >
            {download && <DownloadIcon style={{width: '1.5em', height: '1.5em', margin: '0 .3em 0 0' }} />}
            {children}
        </motion.a>
    );
};