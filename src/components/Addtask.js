import { useState } from "react";


const Addtask = ({addTask}) => {
    const [task,setTask] = useState('');
    const [dayntime,setDayntime] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(!task) {
            alert("please add a task")
            return ;
        }

        addTask({task,dayntime,reminder});

        setTask('');
        setDayntime('');
        setReminder(false);
    }
    return ( 
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" value={task} placeholder="add task" onChange={(e)=>{setTask(e.target.value)}}/>
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" value={dayntime} placeholder="add day and time" onChange={(e)=>{setDayntime(e.target.value)}}/>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e)=>{setReminder(e.currentTarget.checked)}}/>
            </div>

            <input type="submit"  value="Save task" className="btn btn-block" />
        </form>
     );
}
 
export default Addtask;