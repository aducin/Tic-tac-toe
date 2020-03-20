import React from 'react';
import { ScoreDetailsElementProps } from '../interfaces/interfaces';
import styles from '../assets/styles/scoresList.module.scss';

const ScoreDetailsElement: React.FC<ScoreDetailsElementProps> = (props: ScoreDetailsElementProps) => {
    return props.mobile ?
        (
            <p className={styles.mobileItemRow}>
                <label>{props.label}:</label>
                <span>{props.value}</span>
            </p>
        ) :
        <th>{props.value}</th>
    };

export default React.memo(ScoreDetailsElement);
