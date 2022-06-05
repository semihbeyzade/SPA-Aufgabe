import './App.css';
import StatusContextProvider from './context/StatusContext';
import Seite from './components/Seite';

function App() {
  return (
    <div className="App">
      <StatusContextProvider>
         <Seite />
      </StatusContextProvider>
    </div>
  );
}

export default App;
