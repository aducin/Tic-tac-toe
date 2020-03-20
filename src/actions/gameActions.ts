import { Box, ScoresAction, PlayerAction } from '../interfaces/interfaces';

export const resetOrStart = (action: string) => {
    return {
        type: action,
        payload: {}
    }
}

export const setScores = (data: ScoresAction) => {
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

export const updateBoxes = (data: Box[]) => {
    return {
        type: 'updateBoxes',
        payload: {
            boxes: data
        }
    }
};

export const updatePlayer = (data: PlayerAction) => {
    return {
        type: 'updatePlayer',
        payload: {
            player: {
                property: data.property,
                value: data.value
            } 
        }
    }
}
