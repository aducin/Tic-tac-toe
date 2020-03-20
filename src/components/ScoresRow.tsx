import React from 'react';
import { ScoresRowProps } from '../interfaces/interfaces';

const ScoresRow: React.FC<ScoresRowProps> = (props: ScoresRowProps) => {
    return (
        <p className={props.styles}>
            <label>{props.label}:</label>
            <span>{props.value}</span>
        </p>
    );
};

export default React.memo(ScoresRow);
