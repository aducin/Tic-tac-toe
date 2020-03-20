import React from 'react';
import { ButtonsProps } from '../types/types';
import styles from '../assets/styles/buttons.module.scss';

const Buttons: React.FC<ButtonsProps> = (props: ButtonsProps) => {
    const buttonClasses = `btn btn-primary ${styles.button}`;
    const button = !props.started ?
        <button
            onClick={() => props.onButtonClicked('start')}
            className={buttonClasses}
            type="button"
        >Start</button> :
        <button
            onClick={() => props.onButtonClicked('reset')}
            className={buttonClasses}
            type="button"
        >Reset</button>
    return (
        <div className={styles.container}>
            {button}
        </div>
    );
}

export default React.memo(Buttons);
