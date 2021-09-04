import Header from './components/Header';
import Task from './components/Task';
import Addtask from './components/Addtask';
import { useState } from "react";
function App() {

  const [showAddTask,setShowAddTask] = useState(false);
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

  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1;
    let newTask={
      id:id,
      text:task.task,
      day:task.dayntime,
      reminder:task.reminder
    };
    setTasks([...tasks,newTask]);
  };

  return (
    <div className="container">
        <Header title="Task Tracker" onAdd={()=>{setShowAddTask(!showAddTask)}} showAddTask={showAddTask}/>
        {showAddTask && <Addtask addTask={addTask}/>}
        {tasks.length && <Task data={tasks} deleteTask={deleteTask} onToggle={toggleReminder}/>}
        {(!tasks.length) && <div>No tasks to show</div>}
    </div>
  )
}

export default App;
