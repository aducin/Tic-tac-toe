import { Box, ScoresAction, PlayerAction } from '../interfaces/interfaces';

export const resetOrStartAction = (action: string) => {
    return {
        type: action,
        payload: {}
    }
}

export const setBoxesAction = (data: Box[]) => {
    return {
        type: 'setBoxes',
        payload: {
            boxes: data
        }
    }
};

export const setScoresAction = (data: ScoresAction) => {
    return {
        type: 'setScores',
        payload: {
            scoresList: {
                duration: data.duration,
                finishedTime: data.finishedTime
            }
        }
    }
};

export const setPlayerAction = (data: PlayerAction) => {
    return {
        type: 'setPlayer',
        payload: {
            player: {
                property: data.property,
                value: data.value
            } 
        }
    }
}
