import { Box, ScoresAction, PlayerAction } from '../../interfaces/interfaces';
import * as actions from '../../actions/gameActions';

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
        expect(actions.resetOrStart('reset')).toEqual(expectedAction);
    });

    it('should set score details', () => {
        const expectedAction = {
            type: 'setScores',
            payload: {
                scoresList: scoresData
            }
        };
        expect(actions.setScores(scoresData)).toEqual(expectedAction);
    }); 

    it('should update boxes data', () => {
        const expectedAction = {
            type: 'updateBoxes',
            payload: {
                boxes: boxesData
            }
        }
        expect(actions.updateBoxes(boxesData)).toEqual(expectedAction);
    });

    it('should update player`s data', () => {
        const expectedAction = {
            type: 'updatePlayer',
            payload: {
                player: playerData
            }
        };
        expect(actions.updatePlayer(playerData)).toEqual(expectedAction);
    });
});
