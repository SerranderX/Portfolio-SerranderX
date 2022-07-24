import React from 'react';
import { ButtonProps } from '@interfaces/buttona.interface';
import styles from '@styles/button.module.scss';

export const Button: React.FC<ButtonProps> = ({text, classes = "", handleButton}) => {
    return (
        <div className={styles.container}>
            <button className={`${classes} ${classes === "" && styles.button}`} onClick={handleButton}>{text}</button>
        </div>
    );
};