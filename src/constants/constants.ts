import { GameType } from '../interfaces/interfaces';

export const DEFAULT_PLAYER1_NAME = 'Player 1';
export const DEFAULT_PLAYER2_NAME = 'Player 2';
export const EMPTY_HISTORY = 'Game history is empty at the moment';
export const FOOTER_TEXT = 'Tic-tac-toe footer';
export const GAME_NOT_STARTED = 'Click the button to start the game';
export const GAME_OVER = 'Game is over - no winner';
export const GAME_SUCCEDED = (winner: string, duration: number) =>
    `${winner} has won in ${duration.toFixed(2)} seconds!`;
export const HEADER_TEXT = 'Tic-tac-toe header';
export const MESSAGE_HEADER_SUCCESS = 'CONGRATULATIONS!';
export const MESSAGE_HEADER_WARNING = 'WARNING!';
export const MESSAGE_TIME = 3000;
export const MOBILE_MAX_WIDTH = '768px';
export const PLAYER_FIRST_TYPE = 'O';
export const PLAYER_SECOND_TYPE = 'X';
export const ROWS_TO_WIN = 3;
export const SCORES_LIST_HEADER = 'Score results';
export const TIME_IS_OVER = 'Time is over - next move';
export const TURN_TIME = 30;
export const WINNING_ROWS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
export const GAMETYPES: GameType[] = [
    { 
        id: 1,
        icon: 'ImageO',
        iconWinning: 'ImageOWinning',
        value: PLAYER_FIRST_TYPE
    },
    {
        id: 2,
        icon: 'ImageX',
        iconWinning: 'ImageXWinning',
        value: PLAYER_SECOND_TYPE
    }
];
