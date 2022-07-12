import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {
  return (
    <div className="App">
      <AngryButton />
      <CounterButton />
      <LightSwitchButton />
      <TextRepeaterButton />
    </div>
  );
}

export default App;
