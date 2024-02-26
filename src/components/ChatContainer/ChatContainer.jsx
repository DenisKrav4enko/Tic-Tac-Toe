import { Header } from './components/Header/Header';
import { Chat } from './components/Chat/Chat';
import './styles.css';

export const ChatContainer = props => {
    const { player, setIsChatOpen } = props;

    return (
        <div className="chat__container">
            <Header
                player={player}
                setIsChatOpen={setIsChatOpen}
            />
            <Chat player={player} />
        </div>
    )
}