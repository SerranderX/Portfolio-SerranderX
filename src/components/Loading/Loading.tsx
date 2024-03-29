import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '@context/AppContext';
import styles from '@styles/Loading.module.scss';

interface LoadingProps {
    showMessage: boolean
}

export const Loading: React.FC<LoadingProps> = ({showMessage = false}) => {
    const { lenguageState: { lenguageSelectedData: { data: { loadingMessage } } } } = useContext(AppContext);

    return (
        <div className={`${styles['loading-conainter']}`}>
            <div className={`${styles['spinner-box']}`}>
                <div className={`${styles['configure-border-1']}`}>  
                    <div className={`${styles['configure-core']}`}></div>
                </div>  
                <div className={`${styles['configure-border-2']}`}>
                    <div className={`${styles['configure-core']}`}></div>
                </div> 
            </div>
            {showMessage && 
                <motion.h2 
                    className={`${styles['loading-title']}`}
                    animate={{opacity: [0,1]}} 
                    transition={{
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                >{loadingMessage}</motion.h2>
            }
        </div>
    );
};