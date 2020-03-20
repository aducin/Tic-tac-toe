import React from 'react';
import { FOOTER_TEXT } from '../constants/constants';
import styles from '../assets/styles/footer.module.scss';

const Footer: React.FC = () => {
    return(
        <div className={styles.container}>
            <label className={styles.label}>{FOOTER_TEXT}</label>
        </div>
    );
}

export default React.memo(Footer);
