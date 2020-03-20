import { Box, IsPossibleToWin, MatchedRows } from '../interfaces/interfaces';
import {
    PLAYER_FIRST_TYPE,
    ROWS_TO_WIN,
    WINNING_ROWS
} from '../constants/constants';

export const checkIfPossibleToWin = (boxes: Box[]) => boxes.reduce((result: IsPossibleToWin, box: Box ) => {
    if (box.assigned) {
        box.value === PLAYER_FIRST_TYPE ? result.first++ : result.second++;
    }
    return result;
}, { first: 0, second: 0 });

export const checkWinningRows = (boxes: Box[]) => {
    return WINNING_ROWS.reduce((result: number[] | [] | boolean, row: number[]) => {
        const matched = row.reduce((result: MatchedRows, el: number) => {
            const curMatched = { ...result };

            if (boxes[el].assigned) {
                boxes[el].value === PLAYER_FIRST_TYPE ? curMatched.first++ : curMatched.second++;
            }
            return curMatched ;
        }, { first: 0, second: 0 });

        if (matched.first === ROWS_TO_WIN || matched.second === ROWS_TO_WIN) {
            return row;
        }
        return result as number[] | [];
    }, []);
};

export const formatDate = (data: Date) => {
    const month = String(data.getMonth() + 1).padStart(2, '0');
    const day = String(data.getDate()).padStart(2, '0');
    const hours = String(data.getHours()).padStart(2, '0');
    const minutes = String(data.getMinutes()).padStart(2, '0');
    return `${data.getFullYear()}-${month}-${day} ${hours}:${minutes}`;
};
