import { Box, ScoresAction, PlayerAction } from '../../interfaces/interfaces';
import {
    resetOrStartAction,
    setBoxesAction,
    setPlayerAction,
    setScoresAction
} from '../../actions/gameActions';

const boxesData: Box[] = [
    {
        assigned: true,
        icon: '',
        iconWinning: '',
        value: '',
        winning: true
    }
];
const playerData: PlayerAction = { property: 'player1', value: 'name' };
const scoresData: ScoresAction = { duration: 1, finishedTime: new Date() };

describe('Game actions', () => {
    it('should reset data', () => {
        const expectedAction = { type: 'reset', payload: {} };
        expect(resetOrStartAction('reset')).toEqual(expectedAction);
    });

    it('should set boxes data', () => {
        const expectedAction = {
            type: 'setBoxes',
            payload: {
                boxes: boxesData
            }
        }
        expect(setBoxesAction(boxesData)).toEqual(expectedAction);
    });

    it('should set player`s data', () => {
        const expectedAction = {
            type: 'setPlayer',
            payload: {
                player: playerData
            }
        };
        expect(setPlayerAction(playerData)).toEqual(expectedAction);
    });

    it('should set score details', () => {
        const expectedAction = {
            type: 'setScores',
            payload: {
                scoresList: scoresData
            }
        };
        expect(setScoresAction(scoresData)).toEqual(expectedAction);
    }); 
});
