import { Provider } from 'react-redux';
import store from './store/store';
import { Game } from './components';
import './App.css';


function App() {
  return (
      <Provider store={store} >
        <div className="App">
            <Game/>
        </div>
      </Provider>
  );
}

export default App;
