import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { EMPTY_HISTORY, SCORES_LIST_HEADER } from '../constants/constants';
import Message from '../components/Message';
import ScoresList from '../components/ScoresList';
import { ScoresProps } from '../types/types';
import styles from '../assets/styles/container.module.scss';

const mapStateToProps = (state: ScoresProps) => ({ scores: state.scores });

class Scores extends PureComponent<ScoresProps> {
    render() {
        const { scores } = this.props;
        const header = scores.length ? SCORES_LIST_HEADER : '';
        const message = !scores.length ? (
            <Message
                message={EMPTY_HISTORY}
                success={false}
                warning={false} 
            />
        ) : '';
        
        const list = scores.length ? <ScoresList scores={scores.reverse()} /> : '';

        return (
            <div className={styles.container}>
                <h2>{header}</h2>
                {message}
                {list}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Scores);
