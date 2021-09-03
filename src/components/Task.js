import Tasks from "./Tasks";
const Task = ({data,deleteTask,onToggle}) => {
    return ( 
      <div>
       {
           data.map((task)=>(
            <Tasks key={task.id} task={task} deleteTask={deleteTask} onToggle={onToggle}/>
           ))
       }
      </div>
    );
}
 
export default Task;