import React from 'react';
import { Loading } from '@components/Loading/Loading';
import styles from '@styles/LoadingPage.module.scss'

export const LoadingPage = () => {
    return (
        <section className={styles.container}>
            <Loading showMessage={false}/>
        </section>
    );
};