import React, {useState} from 'react'
import "./TaskForm.css"
import Tag from './Tag'

function TaskForm({setTasks}) {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })

    const checkTag = (tag) =>{
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag)=> {
       if (taskData.tags.some(item => item === tag)) {
         const filterTags =  taskData.tags.filter(item => item !== tag)
         setTaskData((prev) => {
            return {...prev, tags: filterTags}
         })
       } else {
        setTaskData((prev) => {
            return {...prev, tags: [...prev.tags, tag]}
        })
       }        
    }
    // console.log(taskData.tags);

    const handleChange= (e)=> {
        const {name, value} = e.target
        setTaskData(prev => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        setTasks(prev =>{
            return [...prev, taskData]
        })
         setTaskData(
            {
                task: "",
                status: "todo",
                tags: []
            }
         )
    }
    
    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input className='task_input' type='text'
                    placeholder='Enter your task'
                    name='task'
                    value={taskData.task}
                    onChange= {handleChange}
                />

                <div className='task_form_bottom_line'>
                   <div>
                       <Tag tagName="HTML" selectTag = {selectTag} selected ={checkTag("HTML")}/>  
                       <Tag tagName="CSS" selectTag = {selectTag} selected ={checkTag("CSS")}/> 
                       <Tag tagName="React" selectTag = {selectTag} selected ={checkTag("React")}/> 
                       <Tag tagName="Python" selectTag = {selectTag} selected ={checkTag("Python")}/>          
                   </div>


  {/* Drop down element  */}
                    <div>
                    <select onChange= {handleChange} name='status' value={taskData.status} className='task_status'>
                        <option value="todo">TO DO</option>
                        <option value="Doing">DOING</option>
                        <option value="Done">DONE</option>
                    </select>
                    <button className='task_submit'
                        type='submit'>+ Add Task
                    </button>
                    </div>
                </div>
            </form>
        </header>

    )
}

export default TaskForm