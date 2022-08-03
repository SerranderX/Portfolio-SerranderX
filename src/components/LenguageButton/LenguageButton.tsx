import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { variantsList, buttonVariants } from "@components/LenguageButton/variants";
import styles from "@styles/LenguageButton.module.scss";
import { AppContext } from "@context/AppContext";

export const LenguageButton = () => {
    const [listaButtonState, setListaButtonState] = useState(false);
    const { lenguageState: { lenguageList, changeLenguageSelected, lenguageSelected, lenguageSelectedData } } = useContext(AppContext);

    const handleSelectLenguage = (lenguage: string) => {
        setListaButtonState(!listaButtonState);
        changeLenguageSelected(lenguage);
    }

    return (
        <div className={`${styles["lenguage-container"]}`}>
            <motion.button
                onClick={() => setListaButtonState(!listaButtonState)}
                className={`${styles["lenguage-button"]}`}
                animate={listaButtonState ? "on" : "off"}
                variants={buttonVariants}
                whileHover={!listaButtonState ? { backgroundColor: "rgba(128, 19, 85, .7)" } : {}}
                whileTap={{scale: 0.95}}
            >
                {lenguageSelected} <lenguageSelectedData.flagIcon width={32} height={32} />
            </motion.button>
            {listaButtonState && (
                <motion.ul
                    initial={"closed"}
                    animate={listaButtonState ? "open" : "closed"}
                    exit={"closed"}
                    variants={variantsList}
                    transition={{ duration: .6, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                    {lenguageList.map(item => {
                        if(item.lenguage !== lenguageSelected) {
                            return (
                                <motion.li 
                                    key={`${item.lenguage}-lenguage`}
                                    whileHover={{ 
                                        backgroundColor: "#ee234fb2", 
                                        boxShadow: `0 0 5px rgba(238, 35, 130, 0.6),
                                                    0 0 25px rgba(238, 35, 130, 0.6),
                                                    0 0 5px rgba(238, 35, 130, 0.6),
                                                    0 0 100px rgba(238, 35, 130, 0.6)`,
                                        borderRadius: "5px" }}
                                    whileTap={{scale: 0.95}}
                                    onClick={() => handleSelectLenguage(item.lenguage)}
                                >
                                    {item.lenguage}
                                    <item.flagIcon width={32} height={32} />
                                </motion.li>
                            )
                        }
                    })}
                </motion.ul>
            )}
        </div>
    );
};
