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
  
  return (
    <div className="container">
        <Header title="Task Tracker"/>
        <Task data={tasks}/>
    </div>
  )
}

export default App;
