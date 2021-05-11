import "./Item.css"
import select from '../../img/select.svg'
import del from '../../img/x-mark.svg'


const Item = (props) => { 
  const style = props.checked
    ? { color:"#FDFDFC" ,textDecoration: "line-through" ,fontStyle:"italic"}
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
            <img width="12" height="12" src={del}/>
        </button>
        <button onClick={()=>{props.handleComplete(props.id)}} >
          <img width="12" height="12" src={select}/>
           </button>
      </div>
    </div>
  )
}
export default Item
