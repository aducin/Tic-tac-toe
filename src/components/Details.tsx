import React from 'react';
import { DetailsProps } from '../interfaces/interfaces';
import { PLAYER_FIRST_TYPE } from '../constants/constants';
import ImageO from '../assets/images/o_normal.png';
import ImageX from '../assets/images/x_normal.png';
import styles from '../assets/styles/details.module.scss';

const Details: React.FC<DetailsProps> = (props: DetailsProps) => {
    const icon = props.value === PLAYER_FIRST_TYPE ? ImageO : ImageX;

    return (
        <div className={styles.container}>
            <p className={styles.row}>
                <b>{props.activePlayer}</b>
                <img src={icon} className={styles.icon} alt="Current turn"></img>
            </p>
            <p className={styles.row}>
                <span>Time left: <i>{props.turnTimer}</i></span>
            </p>
        </div>
    );
}

export default React.memo(Details);
