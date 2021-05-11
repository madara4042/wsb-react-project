import { useState } from "react"
import "./App.css"
import Item from "./commponent/Item/Item"

function App() {
  console.log("run APP");
  const [todos, setTodos] = useState([
    { task: "lern japan", id: 1620674588702, checked: true },
    { task: "lern english", id: 1620674588703, checked: true },
    { task: "lern polisz", id: 1620674588704, checked: false },
  ])
  const [input, setInput] = useState("")

  const handleDel = (id) => {
    const newtodos = todos.filter((el) => el.id !== id)
    setTodos(newtodos)
  }

  const handleComplete = (id)=>{
    const newtodos =todos.map((item)=>{return(item.id === id?{...item,checked:!item.checked}:item)})
    setTodos(newtodos)

  }

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    if (input.length > 0) {
      setTodos([...todos, { task: input, id: Date.now() }])
    }
  }

  const listItems = todos.map((item) => (
    <Item key={item.id} handleComplete={handleComplete} handleDel={handleDel} {...item} />
  ))
  return (
    <div className="box">
      <h1>Todo list</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="input task"
        value={input}
      />
      <button onClick={handleClick} type="button">
        ok
      </button>
      {listItems}
    </div>
  )
}
// const del =todos.filter((el)=>{el !== "lern japan"})
export default App
