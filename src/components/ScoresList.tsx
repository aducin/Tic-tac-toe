import React from 'react';
import { GameHistory, ScoresProps } from '../interfaces/interfaces';
import { MOBILE_MAX_WIDTH } from '../constants/constants';
import { useMediaQuery } from 'react-responsive';
import styles from '../assets/styles/scoresList.module.scss';

const ScoresList: React.FC<ScoresProps> = (props: ScoresProps) => {
    const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE_MAX_WIDTH})` });
    let content;

    if (isMobile) {
        const list = (props.scores as (GameHistory)[]).map((el: GameHistory, index: number) => {
            return(
                <li className={styles.mobileItem}>
                    <p className={styles.mobileItemRow}>
                        <label>Winner:</label>
                        <span>{el.winner}</span>
                    </p>
                    <p className={styles.mobileItemRow}>
                        <label>Moves:</label>
                        <span>{el.moves}</span>
                    </p>
                    <p className={styles.mobileItemRow}>
                        <label>Game time:</label>
                        <span>{el.duration.toFixed(2)}sec.</span>
                    </p>
                    <p className={styles.mobileItemRow}>
                        <label>Date:</label>
                        <span>{el.finishedTime}</span>
                    </p>
                </li>
            );
        }); 
        content = (
            <ul className={styles.mobileList}>
                {list}
            </ul>
        );
    } else {
        const list = (props.scores as (GameHistory)[]).map((el: GameHistory, index: number) => {
            return(
                <tr key={index}>
                    <th>{el.winner}</th>
                    <th>{el.moves}</th>
                    <th>{el.duration.toFixed(2)}sec.</th>
                    <th>{el.finishedTime}</th>
                </tr>
            );
        });
        content = (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Winner</th>
                        <th>Moves</th>
                        <th>Game time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        );
    }
    
    return(
        <div className={styles.container}>
            {content}
        </div>
    );
}

export default React.memo(ScoresList);
