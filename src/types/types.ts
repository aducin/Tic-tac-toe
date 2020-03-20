interface BoxBase {
    icon: string;
    iconWinning: string;
    value: string;
};

export interface Box extends BoxBase {
    assigned: boolean;
    winning: boolean;
};

export type BoxesProps = {
    boxes: Box[];
    finished: boolean;
    onBoxClicked: (id: number) => void;
    started: boolean;
};

export type BoxItemProps = {
    data: {
        id: number;
        item: Box,
    };
    onBoxClicked: (id: number) => void;
}

export type ButtonsProps = {
    onButtonClicked: (button: string) => void;
    started: boolean;
};

export type DetailsProps = {
    activePlayer: string;
    turnTimer: number;
    value: string;
}

export type GameComponentState = {
    gameTimer: number;
    message: string;
    success: boolean;
    turnTimer: number;
    warning: boolean;
};

export type GameHistory = {
    duration: number;
    finishedTime: string;
    moves: number;
    winner: string;
};

export interface GameType extends BoxBase {
    id: number;
};

export type HistoryAction = {
    duration: number;
    finishedTime: Date;
}

export type IsPossibleToWin = {
    first: number;
    second: number
};

export type MatchedRows = {
    first: number;
    second: number;
};

export type MessageProps = {
    message: string;
    onRemoveAlert?: () => void;
    success: boolean;
    warning: boolean;
};

type Player = {
    active: boolean;
    name: string;
}

export type PlayerAction = {
    property: string;
    value: string;
}

export type PlayersProps = {
    onInputChanged: (property: string, name: string) => void;
    player1: string;
    player2: string;
}

export type ReducerAction = {
    payload: {
        boxes?: Box[];
        player?: PlayerAction;
        scoresList?: HistoryAction;
    }
    type: string;
};

export interface ScoresProps {
    scores: GameHistory[] | [];
}

export interface StoreState extends ScoresProps {
    boxes: Box[];
    finished: boolean;
    moves: number;
    next: GameType;
    player1: Player;
    player2: Player;
    started: boolean;
};
