import React from 'react';
import Box from './Box';
import { BoxesProps } from '../interfaces/interfaces';
import styles from '../assets/styles/board.module.scss';

const containerStyles = (started: boolean) => ({
    opacity: started ? '1' : '0.5',
    background: started ? 'white' : '#e6e6e6'
}) as React.CSSProperties;

const Boxes: React.FC<BoxesProps> = (props: BoxesProps) => {
    const { onBoxClicked, started } = props;
    const setBoxData = (id: number) => ({ id, item: props.boxes[id] });

    return (
        <div className={styles.container} style={containerStyles(started)}>
            <div className={styles.boxRow}>
                <Box data={setBoxData(0)} onBoxClicked={onBoxClicked} />
                <Box data={setBoxData(1)} onBoxClicked={onBoxClicked} />
                <Box data={setBoxData(2)} onBoxClicked={onBoxClicked} />
            </div>
            <div className={styles.boxRow}>
                <Box data={setBoxData(3)} onBoxClicked={onBoxClicked} />
                <Box data={setBoxData(4)} onBoxClicked={onBoxClicked} />
                <Box data={setBoxData(5)} onBoxClicked={onBoxClicked} />
            </div>
            <div className={styles.boxRow}>
                <Box data={setBoxData(6)} onBoxClicked={onBoxClicked} />
                <Box data={setBoxData(7)} onBoxClicked={onBoxClicked} />
                <Box data={setBoxData(8)} onBoxClicked={onBoxClicked} />
            </div>
        </div>
    );
}

export default React.memo(Boxes);