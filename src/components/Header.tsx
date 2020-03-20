import React from 'react';
import { NavLink } from "react-router-dom";
import { HEADER_TEXT } from '../constants/constants';
import styles from '../assets/styles/header.module.scss';

const Header: React.FC = () => {
    const iconClasses = `fa fa-bars fa-lg ${styles.icon}`;
    return(
        <nav className={styles.container}>
            <button type="button" className={styles.menuButton}>
                <i className={iconClasses} />
            </button>
            <div className={styles.menu}>
                <NavLink to="/game" activeClassName="active">
                    <button type="button" className={styles.link}>Game</button>
                </NavLink>
                <NavLink to="/scores" activeClassName="active">
                    <button type="button" className={styles.link}>Scores</button>
                </NavLink>
            </div>
            <label className={styles.label}>{HEADER_TEXT}</label>
        </nav>
    );
}

export default React.memo(Header);
