function Ball(props){
  console.log(props.size)
  return (
    <div onClick={props.onClick} className="Ball" key={props.ballId}
         style={
           {  
              left:props.left, top:props.top, width:props.size, height:props.size,
              background:"rgb("+props.color[0]+","+props.color[1]+","+props.color[2]+")"
           }
         }>
    </div>
  )
}
export default Ball