import Ball from "./Ball";

function BallPark(props){
  console.log(props);

  const removeBall = (ballId) => {
    props.removeBall(ballId)
  }

  return (
    <div id={"BallPark"}>
      {
        props.balls.map(ball => <Ball size={ball.size} color={ball.color} top={ball.top} left={ball.left}></Ball>)
      }

    </div>
  )
}
export default BallPark