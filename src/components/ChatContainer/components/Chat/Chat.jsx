import { ChatContent } from "./components/ChatContent/ChatContent";
import { ChatInput } from "./components/ChatInput/ChatInput";
import './styles.css'

export const Chat = ({ player }) => {
    return (
        <div className="chat__main">
            <ChatContent player={player}/>
            <ChatInput player={player} />
        </div>
    )
}