import '../styles/App.css';
import Logo from './Logo';
import Button from './Button';
import MainText from './MainText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainText />
        <Logo />
        <Button />
      </header>
    </div>
  );
}

export default App;
