import React, {useState, useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import ToDo from "./assets/bulleye.jpg"
import Doing from "./assets/fire.jpg"
import Done from "./assets/Done.jpg"

const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks);
const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

  // storing tasks in the localStorage
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  const handleDelete=(taskIndex)=>{
    const newTask = tasks.filter((task, index)=> index !== taskIndex)
    setTasks(newTask)
  }
   return (
    <div className='app'>
       <TaskForm setTasks={setTasks}/>
       

       <main className='app_main'>
         <TaskColumn title= "To do" icon={ToDo} tasks= {tasks} status="todo" handleDelete={handleDelete}/>
         <TaskColumn title= "Doing" icon= {Doing} tasks= {tasks} status="Doing" handleDelete={handleDelete}/>
         <TaskColumn title="Done" icon={Done} tasks= {tasks} status="Done" handleDelete={handleDelete}/>
         
      </main>
    </div>
  )
}

export default App