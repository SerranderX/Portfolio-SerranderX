import React from 'react';
import styles from '@styles/button.module.scss';
import { ButtonProps } from "@interfaces/button.interface";

export const Button: React.FC<ButtonProps> = ({text, classes = "", handleButton}) => {
    return (
        <div className={styles.container}>
            <button className={`${classes} ${classes === "" && styles.button}`} onClick={handleButton}>{text}</button>
        </div>
    );
};