import { Box, ReducerAction, StoreState } from '../interfaces/interfaces';
import { checkIfPossibleToWin, checkWinningRows, formatDate } from '../functions/reducerFunctions';
import { DEFAULT_PLAYER1_NAME, DEFAULT_PLAYER2_NAME, GAMETYPES, ROWS_TO_WIN } from '../constants/constants';

const defaultBoxes: Box[] = Array(9).fill({ assigned: false, icon: '', value: '', winning: false });

export const setDefaultStoreState = (firstName: string, secondName: string) => {
    let scores = [];
    const storageScores = localStorage.getItem('scoresList');

    if (storageScores) {
        scores = JSON.parse(storageScores);
    }
    return {
        boxes: defaultBoxes,
        finished: false,
        scores,
        moves: 0,
        next: GAMETYPES[0],
        player1: { active: true, name: firstName },
        player2: { active: false, name: secondName || 'Player 2' },
        started: false,
        winningRow: null
    };
};

export const gameReducer = (
    state: StoreState = setDefaultStoreState(DEFAULT_PLAYER1_NAME, DEFAULT_PLAYER2_NAME),
    action: ReducerAction
) => {
    switch(action.type) {
        case "reset": {
            state = setDefaultStoreState(state.player1.name, state.player2.name);
            break;
        }
        case "setBoxes": {
            let boxes = action.payload.boxes!;
            let finished = boxes.reduce((result, el) => {
                return el.assigned ? result : false;
            }, true);
            // check if it possible to win - if not do skip without checking the winning combinations
            const isPossibleToWin = checkIfPossibleToWin(boxes);
            
            if (isPossibleToWin.first >= ROWS_TO_WIN || isPossibleToWin.second >= ROWS_TO_WIN) {
                const winningRows = checkWinningRows(boxes);

                if (winningRows.length) {
                    finished = true;
                    boxes = boxes.map((box: Box, index: number) => {
                        const result = { ...box };
                        const winningIndex = winningRows.findIndex((el: number) => index === el);
                        result.winning = winningIndex !== -1;
                        return result;
                    });
                }
            }
            const player1 = finished ? state.player1 : { active: !state.player1.active, name: state.player1.name };
            const player2 = finished ? state.player2 : { active: !state.player2.active, name: state.player2.name };
            const moves = state.moves + 1;
            const next = GAMETYPES.filter(el => el.id !== state.next.id )[0];
            state = {
                ...state,
                boxes,
                finished,
                moves,
                next,
                player1,
                player2,
                started: true
            };
            break;
        }
        case "setPlayer": {
            if (action.payload.player) {
                state = {
                    ...state,
                    player1: action.payload.player.property === 'player1' ?
                        { active: state.player1.active, name: action.payload.player.value } :
                        state.player1,
                    player2: action.payload.player.property === 'player2' ?
                        { active: state.player2.active, name: action.payload.player.value } :
                        state.player2
                };
            }
            break;
        }
        case "setScores": {
            if (action.payload.scoresList) {
                const winner = state.player1.active ? state.player1.name : state.player2.name;
                const newRow = {
                    duration: action.payload.scoresList.duration,
                    finishedTime: formatDate(action.payload.scoresList.finishedTime),
                    moves: state.moves,
                    winner
                }
                const scores = [...state.scores, newRow];
                localStorage.setItem('scoresList', JSON.stringify(scores));
                state = { ...state, scores };
            };
            break;
        }
        case "start": {
            state = {
                ...state,
                started: true
            };
            break;
        }
    }
    return state;
};
