import React, {
    LegacyRef,
    MutableRefObject,
    RefObject,
    useContext,
    useState,
} from "react";
import Image from "next/image";
import styles from "@styles/Header.module.scss";
import LogoComplete from "@logos/logoComplete.png";
import { WindowSize } from "@interfaces/windowSize.interface";
import { AnimatePresence, motion } from "framer-motion";
import { MenuToggle } from "@containers/MenuToggle/MenuToggle";
import { LenguageButton } from "@components/LenguageButton/LenguageButton";
import { AppContext } from "@context/AppContext";
import { DownloadIcon } from '@iconos/Download';
import { MenuItemMobile } from "@components/MenuItemMobile/MenuItemMobile";

const variantsSection = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
};

const variantsHeadSection = {
    open: {
        borderRadius: "5px",
        boxShadow: `0 0 200px rgba(8, 139, 204, .8),
                0 0 70px rgba(8, 139, 204, .8),
                0 0 200px rgba(8, 139, 204, .8),
                0 0 270px rgba(8, 139, 204, .8)`,
        borderBottom: "4px solid rgb(19, 185, 169)",
    },
    closed: {
        borderRadius: 0,
        boxShadow: `0 0 200px rgba(8, 139, 204, 0),
                0 0 70px rgba(8, 139, 204, 0),
                0 0 200px rgba(8, 139, 204, 0),
                0 0 270px rgba(8, 139, 204, 0)`,
        borderBottom: "4px solid rgba(19, 185, 169, 0)",
    },
};

interface HeaderProps {
    reference: LegacyRef<HTMLElement>;
    windowDimenion: WindowSize;
}

export const Header: React.FC<HeaderProps> = ({
    reference,
    windowDimenion,
}) => {
    const [navState, setNavState] = useState(false);
    const { lenguageState: { lenguageSelectedData: { data: { header }, }, }, } = useContext(AppContext);
    const menuItems = [
        {
            href:"#about",
            download: false,
            content: header.navbar.about
        },
        {
            href:"#experience",
            download: false,
            content: header.navbar.experience
        },
        {
            href:"#projects",
            download: false,
            content: header.navbar.projects
        },{
            href:"#contact",
            download: false,
            content: header.navbar.contact
        },{
            href:"cv/2022 Curriculum Vitae - Felipe Ignacio.pdf",
            download: true,
            content: header.navbar.download
        }
    ];

    const handleNavButton = () => {
        setNavState(!navState);
    };

    return (
        <>
            <header className={styles.header} ref={reference} id="header">
                {windowDimenion.winWidth >= 1200 && (
                    <div>
                        <Image
                            src={LogoComplete}
                            alt="LogoComplete"
                            width={200}
                            height={75}
                        />
                    </div>
                )}
                <nav className={styles.nav}>
                    {windowDimenion.winWidth < 1200 && (
                        <div className={styles.container}>
                            <motion.a
                                className={`${styles["head-section-mobile"]}`}
                                animate={navState ? "open" : "closed"}
                                variants={variantsHeadSection}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-flex",
                                        marginRight: "auto",
                                    }}
                                >
                                    <Image
                                        src={LogoComplete}
                                        alt="Logo"
                                        width={280}
                                        height={120}
                                    />
                                </span>
                                <MenuToggle
                                    show={navState}
                                    handlerClick={handleNavButton}
                                />
                            </motion.a>
                            <motion.div
                                className={`${styles["container-nav-mobile"]}`}
                                initial="collapsed"
                                animate={navState ? "open" : "collapsed"}
                                exit="collapsed"
                                variants={variantsSection}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.04, 0.62, 0.23, 0.98],
                                }}
                            >
                                {menuItems.map((item, index) => 
                                    <MenuItemMobile
                                        key={`mobile-menu-${index}-${item}`}
                                        i={index}
                                        href={item.href}
                                        classNames={`${styles["button-mobile"]} ${styles["button-mobile-text-center"]} ${!navState && styles["button-mobile-inactive"]} ${item.download && styles["button-cv-mobile"]} ${!navState && styles["button-mobile-inactive"]}`}
                                        download={item.download}
                                    >
                                        {item.content}
                                    </MenuItemMobile>
                                )}
                            </motion.div>
                        </div>
                    )}
                    {windowDimenion.winWidth >= 1200 && (
                        <div className={styles.container}>
                            <a href="#about" className={styles.button}>
                                {header.navbar.about}
                            </a>
                            <a href="#experience" className={styles.button}>
                                {header.navbar.experience}
                            </a>
                            <a href="#projects" className={styles.button}>
                                {header.navbar.projects}
                            </a>
                            <a href="#contact" className={styles.button}>
                                {header.navbar.contact}
                            </a>
                            <a href="cv/2022 Curriculum Vitae - Felipe Ignacio.pdf" className={`${styles['button-cv']}`} download>
                                {header.navbar.download}
                            </a>
                        </div>
                    )}
                    <LenguageButton />
                </nav>
            </header>
        </>
    );
};
