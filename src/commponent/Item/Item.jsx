 import './Item.css'
 const Item =(props)=>{
     return(
         <div className="itembox">
             <span>{props.task}</span>
             <button>ok</button>
             <button>e</button>
             <button>del</button>
         </div>
     )
 } 
 export default Item
