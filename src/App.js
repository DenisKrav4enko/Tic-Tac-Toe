import { Provider } from 'react-redux';
import store from './store/store';
import { Game, Header } from './components';
import './App.css';

function App() {
  return (
      <Provider store={store} >
          <div className="App">
              <Header />
              <div className="game-board">
                  <div className="player player_first">
                    <Game player="X"/>
                  </div>
                  <div className="player">
                    <Game player="O"/>
                  </div>
              </div>
          </div>
      </Provider>
  );
}

export default App;
