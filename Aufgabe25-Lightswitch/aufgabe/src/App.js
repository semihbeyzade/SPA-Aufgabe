import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Container from './component/Container';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
       <Container />
      </ThemeProvider>
    </div>
  );
}

export default App;
