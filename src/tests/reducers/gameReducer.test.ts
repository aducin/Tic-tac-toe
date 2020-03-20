import { gameReducer, setDefaultStoreState } from '../../reducers/gameReducer';
import { Box, PlayerAction, ScoresAction, StoreState } from '../../types/types';
import { DEFAULT_PLAYER1_NAME, DEFAULT_PLAYER2_NAME, GAMETYPES } from '../../constants/constants';

const actions = ['start', 'setBoxes', 'setPlayer', 'setScores'];
const initialState: StoreState = setDefaultStoreState(DEFAULT_PLAYER1_NAME, DEFAULT_PLAYER2_NAME);

const boxesData: Box[] = [
    {
        assigned: false,
        icon: '',
        iconWinning: '',
        value: '',
        winning: true
    }
];
const defaultDate = '2020-03-20 01:00';
const playerData: PlayerAction = { property: 'player1', value: 'name' };
const scoresData: ScoresAction = { duration: 1, finishedTime: new Date(defaultDate) };

describe('Game reducer', () => {
    it('should set started property', () => {
        let dataObj = {
            type: actions[0],
            payload: {}
        };
        const updatedState = { ...initialState, started: true };
        expect(gameReducer(initialState, dataObj)).toEqual(updatedState);
    });

    it('should update boxes data', () => {
        let dataObj = {
            type: actions[1],
            payload: {
                boxes: boxesData
            }
        };
        const updatedState = {
            ...initialState,
            boxes: boxesData,
            moves: 1,
            next: GAMETYPES[1],
            player1: { active: false, name: DEFAULT_PLAYER1_NAME },
            player2: { active: true, name: DEFAULT_PLAYER2_NAME },
            started: true
        };
        expect(gameReducer(initialState, dataObj)).toEqual(updatedState);
    });

    it('should set player`s data', () => {
        let dataObj = {
            type: actions[2],
            payload: {
                player: playerData
            }
        };
        const updatedState = { ...initialState, player1: { active: true, name: 'name'} };
        expect(gameReducer(initialState, dataObj)).toEqual(updatedState);
    });

    it('should update scores list', () => {
        let dataObj = {
            type: actions[3],
            payload: {
                scoresList: scoresData
            }
        };
        const updatedScores = [
            {
                duration: 1,
                finishedTime: defaultDate,
                moves: 0,
                winner: DEFAULT_PLAYER1_NAME 
            }
        ];
        const updatedState = { ...initialState, scores: updatedScores };
        expect(gameReducer(initialState, dataObj)).toEqual(updatedState);
    });   
});
