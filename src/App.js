import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <Counter />
      </header>
    </div>
  );
}

export default App;
