import React from 'react';
import ScoreDetailsElement from '../components/ScoreDetailsElement';
import { GameHistory, ScoresProps } from '../interfaces/interfaces';
import { MOBILE_MAX_WIDTH } from '../constants/constants';
import { useMediaQuery } from 'react-responsive';
import styles from '../assets/styles/scoresList.module.scss';

const ScoresList: React.FC<ScoresProps> = (props: ScoresProps) => {
    const mobile = useMediaQuery({ query: `(max-width: ${MOBILE_MAX_WIDTH})` });
    const list = (props.scores as (GameHistory)[]).map((el: GameHistory, index: number) => {
        const elements = (
            <React.Fragment>
                <ScoreDetailsElement mobile={mobile} label="Winner" value={el.winner} />
                <ScoreDetailsElement mobile={mobile} label="Moves" value={el.moves} />
                <ScoreDetailsElement mobile={mobile} label="Game time" value={`${el.duration.toFixed(2)}sec.`} />
                <ScoreDetailsElement mobile={mobile} label="Date" value={el.finishedTime} />
            </React.Fragment>
        );
        return mobile ?
            <li key={index} className={styles.mobileItem}>{elements}</li> :
            <tr key={index}>{elements}</tr>;
    });
    const content = mobile ?
        (
            <ul className={styles.mobileList}>
                {list}
            </ul>
        ) :
        (
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
    
    return <div className={styles.container}>{content}</div>;
};

export default React.memo(ScoresList);
