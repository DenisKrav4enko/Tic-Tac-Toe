import {Provider} from 'react-redux';
import store from './store/store';
import {useState} from "react";
import { Game, Header } from './components';
import { ChatContainer } from './components/ChatContainer/ChatContainer';
import './App.css';

function App() {
    const [isChatOpenX, setIsChatOpenX] = useState(false);
    const [isChatOpenO, setIsChatOpenO] = useState(false);

  return (
      <Provider store={store} >
          <div className="App">
              <Header />
              <div className="game-board">
                  <div className="player player_first">
                      <Game player="X"/>
                      {isChatOpenX
                          ? <ChatContainer
                              player="X"
                              setIsChatOpen={setIsChatOpenX}/>
                          : <img
                              className="open__btn"
                              onClick={() => setIsChatOpenX(prevState => !prevState)}
                              src='https://cdn-icons-png.freepik.com/512/5962/5962463.png'
                              alt="messenger icon"/>
                      }
                  </div>
                  <div className="player">
                      <Game player="O"/>
                      {isChatOpenO
                          ? <ChatContainer
                              player="O"
                              setIsChatOpen={setIsChatOpenO}/>
                          : <img
                              className="open__btn"
                              onClick={() => setIsChatOpenO(prevState => !prevState)}
                              src='https://cdn-icons-png.freepik.com/512/5962/5962463.png'
                              alt="messenger icon"/>
                      }
                  </div>
              </div>
          </div>
      </Provider>
  );
}

export default App;
