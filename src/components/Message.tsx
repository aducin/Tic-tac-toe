import React from 'react';
import { MessageProps } from '../interfaces/interfaces';
import { MESSAGE_HEADER_SUCCESS, MESSAGE_HEADER_WARNING } from '../constants/constants';
import styles from '../assets/styles/message.module.scss';

const Message: React.FC<MessageProps> = (props: MessageProps) => {
    const containerClasses = [styles.container, 'alert'];
    const clearButton = props.onRemoveAlert ? (
        <button onClick={() => props.onRemoveAlert!()} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    ) : null;

    if (props.success) {
        containerClasses.push('alert-success');
    } else if (props.warning) {
        containerClasses.push('alert-danger');
    } else {
        containerClasses.push('alert-light');
    }
    const header = props.success ? MESSAGE_HEADER_SUCCESS : MESSAGE_HEADER_WARNING;
    return (
        <div className={containerClasses.join(' ')} role="alert">
            {clearButton}
            <h3 className={styles.header}>{header}</h3>
            <h4 className={styles.message}>{props.message}</h4>
        </div>
    );
}

export default React.memo(Message);
