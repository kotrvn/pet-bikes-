import React from 'react';
import styles from './Footer.module.scss'

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__text}>BIKES (c) 2023</div>
        </footer>
    )
}
