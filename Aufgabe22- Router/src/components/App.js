import '../css/App.scss';
import Navigation from './Navigation';
import Home from './Home';
import Moebel from './Moebel';
import Autos from './Autos';
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {


  return (
    
      <div className="App" id="App">
      
      <Router>
       
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moebel" element={<Moebel />}/>
          <Route path="/autos" element={<Autos />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
