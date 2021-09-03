const Tasks = ({task,deleteTask,onToggle}) => {
    return ( 
      <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>{
        console.log("me");
        onToggle(task.id);
      }}>
          <h3>{task.text} <span style={{color:"red" , cursor:"pointer"}} onClick={()=>{deleteTask(task.id)}} >X</span></h3>
          <p>{task.day}</p>
      </div>
    );
}
 
export default Tasks;