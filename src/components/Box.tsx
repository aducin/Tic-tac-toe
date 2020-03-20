import React from 'react';
import { BoxItemProps } from '../interfaces/interfaces';
import { PLAYER_FIRST_TYPE } from '../constants/constants';
import ImageO from '../assets/images/o_normal.png';
import ImageX from '../assets/images/x_normal.png';
import ImageOWinning from '../assets/images/o_winning.png';
import ImageXWinning from '../assets/images/x_winning.png';
import styles from '../assets/styles/box.module.scss';

const icons = [ImageO, ImageX];
const iconsWinning = [ImageOWinning, ImageXWinning];

const BoxItem: React.FC<BoxItemProps> = (props: BoxItemProps) => {
    const { id, item } = props.data;
    let content;
    let iconFile;

    if (props.data.item.value) {
        const firstPlayerActive = props.data.item.value === PLAYER_FIRST_TYPE;
        
        if (item.winning) {
            iconFile = firstPlayerActive ? iconsWinning[0] : iconsWinning[1];
        } else {
            iconFile = firstPlayerActive ? icons[0] : icons[1];
        }

        if (item.assigned) {
            content = <img src={iconFile} className={styles.image} alt=""></img>;
        }
    }
    
    return (
        <div
            onClick={() => props.onBoxClicked(id)}
            className={styles.item}
        >{content}</div>
    );
}

export default React.memo(BoxItem);
