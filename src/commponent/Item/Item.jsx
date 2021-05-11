import "./Item.css"
const Item = (props) => { 
  const style = props.checked
    ? { color:"grey" ,textDecoration: "line-through" ,fontStyle:"italic"}
    : null
  return (
    <div className="item-box">
      <div className="text-title" style={style}>
        {props.task}
      </div>
      <div>
        <button
          onClick={() => {
            props.handleDel(props.id)
          }}
        >
          del
        </button>
        <button onClick={()=>{props.handleComplete(props.id)}} >ok</button>
      </div>
    </div>
  )
}
export default Item
