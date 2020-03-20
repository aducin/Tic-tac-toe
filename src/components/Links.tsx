import React from 'react';
import { NavLink } from "react-router-dom";
import styles from '../assets/styles/links.module.scss';

const Links: React.FC = () => {
    const buttonClasses = `btn btn-info ${styles.button}`;
    return(
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <p>
                    <NavLink exact to="/game" activeClassName="active" className={buttonClasses}>GAME</NavLink>
                </p>
                <p>
                    <NavLink exact to="/scores" activeClassName="active" className={buttonClasses}>SCORES</NavLink>
                </p>
            </div>
        </div>
    );
}

export default React.memo(Links);
