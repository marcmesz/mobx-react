import './App.css';
import Counter from './Components/Counter';
import { State } from './StateManagement';

const state = new State()

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter state={state} />
      </header>
    </div>
  );
}

export default App;
