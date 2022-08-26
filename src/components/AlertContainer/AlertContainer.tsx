import React, { useContext } from 'react';
import styles from '@styles/AlertContainer.module.scss';
import { Button } from '@components/Button/Button';
import { AppContext } from '@context/AppContext';
import { replaceWithBr } from "@utils/Utils";

interface AlertContainerProps {
    message: string;
    title: string;
    handlerClose: () => void
}

export const AlertContainer: React.FC<AlertContainerProps> = ({title, message, handlerClose}): JSX.Element => {
    const {lenguageState: { lenguageSelectedData: { data: { alertContent } } }} = useContext(AppContext);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.message} dangerouslySetInnerHTML={{__html: replaceWithBr(message)}} />
            <Button handleButton={handlerClose} text={alertContent.closeButton}/>
        </div>
    );
};