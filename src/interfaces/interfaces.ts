interface BoxBase {
    icon: string;
    iconWinning: string;
    value: string;
};

export interface Box extends BoxBase {
    assigned: boolean;
    winning: boolean;
};

export interface BoxesProps {
    boxes: Box[];
    finished: boolean;
    onBoxClicked: (id: number) => void;
    started: boolean;
};

export interface BoxItemProps {
    data: {
        id: number;
        item: Box,
    };
    onBoxClicked: (id: number) => void;
}

export interface ButtonsProps {
    onButtonClicked: (button: string) => void;
    started: boolean;
};

export interface DetailsProps {
    activePlayer: string;
    turnTimer: number;
    value: string;
}

export interface GameComponentState {
    gameTimer: number;
    message: string;
    success: boolean;
    turnTimer: number;
    warning: boolean;
};

export interface GameHistory {
    duration: number;
    finishedTime: string;
    moves: number;
    winner: string;
};

export interface GameType extends BoxBase {
    id: number;
};

export interface MatchedRows {
    first: number;
    second: number;
};

export interface MessageProps {
    message: string;
    onRemoveAlert?: () => void;
    success: boolean;
    warning: boolean;
};

interface Player {
    active: boolean;
    name: string;
}

export interface PlayerAction {
    property: string;
    value: string;
}

export interface PlayersProps {
    onInputChanged: (property: string, name: string) => void;
    player1: string;
    player2: string;
}

export interface ReducerAction {
    payload: {
        boxes?: Box[];
        player?: PlayerAction;
        scoresList?: ScoresAction;
    }
    type: string;
};

export interface ScoresAction {
    duration: number;
    finishedTime: Date;
}

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
