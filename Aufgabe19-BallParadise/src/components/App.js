import '../css/index.scss';
import BallGenerator from "./BallGenerator";
import BallPark from "./BallPark";
import {useState} from "react";

function App() {

  const [balls, setBalls] = useState([])
  const [counter, setCounter] = useState(0)

  const getRandomPos = (ballSize) => {
    return [Math.floor(Math.random() * (800 - ballSize + 1) ),
      Math.floor(Math.random() * (500 - ballSize + 1) )]
  }

  const handleAddBall = (newBall) => {
    if(!newBall.size){
      newBall.size = 50
    }
    let pos = getRandomPos(newBall.size)
    newBall.left = pos[0]
    newBall.top = pos[1]
    let newBalls = balls
    newBalls.push(newBall)
    setBalls(newBalls)
    setCounter(balls.length)
  }

  const handleRemoveBall = (ballId) => {
    let newBalls = balls.filter(ball=>ball.ballId!==ballId)
    setBalls(newBalls)
  }

  return (
    <div id="App">
      <BallGenerator addBall={handleAddBall}/>
      
      <BallPark counter={counter} balls={balls} removeBall={handleRemoveBall}/>
      
    </div>
  );
}

export default App;
