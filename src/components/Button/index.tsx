import React from 'react';
import styles from '@components/button/button.module.scss';
import { ButtonProps } from "@interfaces/button.props";

export const Button: React.FC<ButtonProps> = ({text, classes = "", handleButton}) => {
    return (
        <div className={styles.container}>
            <button className={`${classes} ${styles.button}`} onClick={handleButton}>{text}</button>
        </div>
    );
};