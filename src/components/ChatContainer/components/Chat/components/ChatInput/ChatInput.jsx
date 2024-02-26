import {useState} from 'react';
import {format} from 'date-fns';
import {useDispatch} from 'react-redux';
import {addChatMessage} from '../../../../../../reducers/gameSlice';
import './styles.css';

export const ChatInput = ({ player }) => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleOnChangeMessage = e => {
        setMessage(e.target.value);
    }

    const handleOnSendMessage = () => {
        if (message.length) {
            const time = format(new Date(), 'HH:mm');
            dispatch(addChatMessage({
                player,
                message,
                time
            }));
            setMessage('')
        }
    }

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            handleOnSendMessage();
        }
    }

    return (
        <div className="chat-input__container">
            <input
                value={message}
                onChange={e => handleOnChangeMessage(e)}
                className="chat-input"
                placeholder="Enter the text..."
                onKeyDown={handleKeyPress}
            />
            <img
                onClick={() => handleOnSendMessage()}
                className="send-button"
                src="https://cdn-icons-png.flaticon.com/512/6492/6492707.png"
                 alt="send icon" />
        </div>
    )
}