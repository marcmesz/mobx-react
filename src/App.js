import './App.css';
import Counter from './Components/Counter';
import { store } from './StateManagement';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter store={store} />
      </header>
    </div>
  );
}

export default App;
