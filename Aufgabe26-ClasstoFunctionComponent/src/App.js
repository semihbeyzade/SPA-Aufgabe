import './App.css';
import Header from './components/Header';
import Info from './components/Info';
import Clock from './components/Clock';
import Frameworks from './components/Frameworks';
import Toggle from './components/Toggle'

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      <Frameworks/>
      <Clock/>
      <Toggle/>
    </div>
  );
}

export default App;
