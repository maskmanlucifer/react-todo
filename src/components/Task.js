import Tasks from "./Tasks";
const Task = ({data}) => {
    return ( 
      <div>
       {
           data.map((task)=>(
            <Tasks key={task.id} task={task}/>
           ))
       }
      </div>
    );
}
 
export default Task;