import Header from './components/Header';
import Task from './components/Task';
import { useState } from "react";
function App() {
  const [tasks,setTasks] = useState([
    {
        id:1,
        text:"Food shopping",
        day:"Feb 5th 2001",
        reminder:false
    },
    {
        id:2,
        text:"Volly wall play",
        day:"Feb 5th 2001",
        reminder:false
    },
    {
        id:3,
        text:"Easting samosha",
        day:"Feb 5th 2001",
        reminder:false
    }
  ]);
  
  const deleteTask = (id)=>{
   const newTask=tasks.filter((task)=>(task.id !== id));
   setTasks(newTask);
  };
  
  const toggleReminder = (id)=>{
   setTasks(tasks.map((task)=>(task.id===id ? {...task,reminder:!task.reminder} :task)));
  };

  return (
    <div className="container">
        <Header title="Task Tracker"/>
        {tasks.length && <Task data={tasks} deleteTask={deleteTask} onToggle={toggleReminder}/>}
        {(!tasks.length) && <div>No tasks to show</div>}
    </div>
  )
}

export default App;
