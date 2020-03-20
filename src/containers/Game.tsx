import React, { PureComponent } from 'react';
import store from '../store';
import Board from '../components/Board';
import Buttons from '../components/Buttons';
import Details from '../components/Details';
import Message from '../components/Message';
import Players from '../components/Players';
import { connect } from "react-redux";
import { Box, GameComponentState, StoreState as GameProps } from '../interfaces/interfaces';
import {
    resetOrStartAction,
    setBoxesAction,
    setPlayerAction,
    setScoresAction
} from '../actions/gameActions';
import {
    GAME_NOT_STARTED,
    GAME_OVER,
    GAME_SUCCEDED,
    MESSAGE_TIME,
    TIME_IS_OVER,
    TURN_TIME
} from '../constants/constants';
import styles from '../assets/styles/container.module.scss';

const mapStateToProps = (state: GameProps) => state;

class Game extends PureComponent<GameProps, GameComponentState> {
    state: GameComponentState = {
        gameTimer: 0,
        message: '',
        success: false,
        turnTimer: TURN_TIME,
        warning: false
    };
    alertTimeout: any;
    turnInterval: any;

    componentDidMount() {
        store.dispatch(resetOrStartAction('reset'));
    };

    componentDidUpdate(prevProps: GameProps, prevState: GameComponentState) {
        if (!prevProps.finished && this.props.finished) {
            const isSucceded = this.props.boxes.reduce((result: boolean, el: Box) => {
                return el.winning ? true : result;
            }, false);
            
            if (isSucceded) {
                const timers = this.setHistoryTimers();
                store.dispatch(setScoresAction(timers));
                const winner = this.props.player1.active ? this.props.player1.name : this.props.player2.name;
                this.setState({ message: GAME_SUCCEDED(winner, timers.duration), success: true, warning: false });
            } else {
                store.dispatch(resetOrStartAction('reset'));
                this.setState({ message: GAME_OVER, success: false, warning: true });
            }
        } else if (!prevProps.started && this.props.started) {
            this.setTurnTimeout();
        } else if (this.props.started && prevState.turnTimer <= this.state.turnTimer) {
            this.setTurnTimeout();
        } else if (this.state.success || this.state.warning) {
            this.setMessageTimeout();
        }
    };

    componentWillUnmount() {
        this.clearTurnInterval();
    };

    clearTurnInterval() {
        this.turnInterval && clearInterval(this.turnInterval);
    };

    handleBoxClicked = (id: number) => {
        if (!this.props.started) {
            this.setState({ message: GAME_NOT_STARTED, warning: true });
        } else {
            const newBoxes = this.props.boxes.concat();

            if (!newBoxes[id].assigned) {
                newBoxes[id] = {
                    ...this.props.boxes[id],
                    assigned: true,
                    icon: this.props.next.icon,
                    iconWinning: this.props.next.iconWinning,
                    value: this.props.next.value
                };
                store.dispatch(setBoxesAction(newBoxes));
                this.setState({ turnTimer: TURN_TIME });
            }
        }
    };

    handleButtonClicked = (action: string) => {
        store.dispatch(resetOrStartAction(action));
        const gameTimer = action === 'start' ? new Date().getTime() : 0;
        this.setState({ gameTimer, message: '', warning: false });
    };

    handleInputChanged = (property: string, value: string) => {
        store.dispatch(setPlayerAction({ property, value }));
    };

    handleRemoveMessage = () => {
        this.alertTimeout && clearTimeout(this.alertTimeout);
        if (this.state.success) {
            store.dispatch(resetOrStartAction('reset'));
        }
        this.setState({ message: '', success: false, warning: false });
    };

    handleTimeOver = () => {
        store.dispatch(setBoxesAction(this.props.boxes));
        this.setState({
            message: TIME_IS_OVER,
            turnTimer: TURN_TIME,
            warning: true
        });
    };

    setHistoryTimers() {
        const curDate = new Date();
        const gameTimestamp = curDate.getTime() - this.state.gameTimer;
        const gameTime = gameTimestamp / 1000;
        return { duration: gameTime, finishedTime: curDate };
    };

    setMessageTimeout = () => {
        this.alertTimeout = setTimeout(() => {
           this.handleRemoveMessage();
        }, MESSAGE_TIME);
    };

    setTurnTimeout = () => {
        this.clearTurnInterval();
        this.turnInterval = setInterval(() => {
            if (this.state.turnTimer > 0) {
                const turnTimer = this.state.turnTimer - 1;
                this.setState({ turnTimer });
            } else {
                this.handleTimeOver();
            }
        }, 1000);
    };

    render() {
        const activePlayer = this.props.player1.active ? this.props.player1.name : this.props.player2.name;
        const messageDisplayed = this.state.success || this.state.warning;
        const buttons = !this.state.success ?
            (
                <Buttons
                    onButtonClicked={this.handleButtonClicked}
                    started={this.props.started}
                />
            ) :
            null;
        const details = this.props.started && !messageDisplayed ?
            (
                <Details
                    activePlayer={activePlayer}
                    turnTimer={this.state.turnTimer}
                    value={this.props.next.value}
                /> 
            ) :
            null;
        const players = !this.props.started && !messageDisplayed ?
            (
                <Players
                    onInputChanged={this.handleInputChanged}
                    player1={this.props.player1.name}
                    player2={this.props.player2.name}
                />
            ) :
            null;
        const message = this.state.success || this.state.warning ?
            (
                <Message
                    message={this.state.message}
                    onRemoveAlert={this.handleRemoveMessage}
                    success={this.state.success}
                    warning={this.state.warning} 
                />
            ) :
            '';
        return (
            <div className={styles.container}>
                <Board
                    boxes={this.props.boxes}
                    finished={this.props.finished}
                    onBoxClicked={this.handleBoxClicked}
                    started={this.props.started}
                />
                {buttons}
                <div className={styles.details}>
                    {details}
                    {players}
                    {message}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Game);