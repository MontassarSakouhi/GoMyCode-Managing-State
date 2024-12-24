
import { useState } from 'react'
import './App.css'
import TaskList from './TaskList'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import TaskForm from './TaskForm'
import EditForm from './EditForm'

function App() {
  const [tasks, setTasks] = useState([
    { name: "Get Eggs", count: 20 },
    { name: "Buy Milk", count: 10 },
    { name: "Clean Room", count: 1 },
    { name: "Do Laundry", count: 2 },
    { name: "Call Mom", count: 1 },
  ])

  const deleteTask = (index) => {
    const newTasks = tasks.filter((el, i) => i != index)
    setTasks(newTasks)
  }
  const addTask=(newTask)=>{
    setTasks([...tasks,newTask])
  }
  const editTask=(task,index)=>{
   const editedTasks= tasks.map((el,i)=>i==index?{...task}:el)
setTasks(editedTasks)
  }
  return (
    < >
      <NavBar />


      <Routes>
        <Route path='/' element={<TaskList tasks={tasks} deleteTask={deleteTask} />} />
        <Route path='/add' element={<TaskForm addTask={addTask} />} />
        <Route path='/edit/:index' element={<EditForm tasks={tasks} editTask={editTask}  />} />
        
      </Routes>
    </ >
  )
}

export default App
