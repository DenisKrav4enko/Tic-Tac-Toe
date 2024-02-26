import {useSelector} from 'react-redux';
import {selectChatMessages} from '../../../../../../reducers/gameSlice';
import './styles.css';

export const ChatContent = ({ player }) => {
    const messages = useSelector(selectChatMessages);

    return (
        <div className="chat-content">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className={`message ${message.player === player ? 'right' : ''}`}
                >
                    <span className="message-text">
                        {message.message}
                    </span>
                    <span className="message-time">
                        {message.time}
                    </span>
                </div>
            ))}
        </div>
    );
};