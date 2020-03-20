import React from 'react';
import { PlayersProps } from '../interfaces/interfaces';
import styles from '../assets/styles/players.module.scss';

const Players: React.FC<PlayersProps> = (props: PlayersProps) => {
    const inputClasses = `form-control ${styles.input}`;
    return(
        <React.Fragment>
            <div className={styles.innerContainer}>
                <label className={styles.label}>Player 1</label>
                <input
                    onChange={(event) => props.onInputChanged('player1', event.target.value)}
                    className={inputClasses}
                    type="text"
                    value={props.player1}
                />
            </div>
            <div className={styles.innerContainer}>
                <label className={styles.label}>Player 2</label>
                <input
                    onChange={(event) => props.onInputChanged('player2', event.target.value)}
                    className={inputClasses}
                    type="text"
                    value={props.player2}
                />
            </div>
        </React.Fragment>
    );
}

export default React.memo(Players);