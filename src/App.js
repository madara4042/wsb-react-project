import {useState} from 'react' 
import './App.css';
import Item from './commponent/Item/Item'

function App() {
const [todos,setTodos]= useState([])
const [input,setInput]= useState("")

const handleChange =(e)=>{
  setInput(e.target.value)
  console.log(e.target.value)
}

const handleClick =()=>{
  setTodos([...todos,input])
  console.log(todos)
}

const listItems = todos.map((item,key) =>(<Item  key={item+key} task={item}/>))
  return (
    <div className ="box">
      <h1>Todo list</h1>
      <input type="text" onChange={handleChange} placeholder="input task" value={input} /> 
      <button onClick={handleClick}  type="button" >ok</button>
    {listItems}
    </div>
  );
}

export default App;

//  const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );