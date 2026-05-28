import {useState} from "react";
function App(){

const [task, setTask] = useState("");
const [tasks,setTasks] = useState([]);

function addTask(){

  if (task.trim() === ""){
    return;
  }

  setTasks([...tasks,{text: task, completed: false}]);
  setTask("");

}
function deleteTask(index){
  let updatedTasks = tasks.filter((_, i) => i !== index);

  setTasks(updatedTasks);
}
function toggleComplete(index){
  let updatedTasks = tasks.map((t,i) => {
    if(i == index){
      return{
        ...t,
        completed: !t.completed
      };
    }
    return t;
  });
  setTasks(updatedTasks);
}
return(
  <div className = "container">
    <h1>Todo App</h1>
    <div className= "input-box">

    <input 
     type = "text"
     placeholder="Enter task"
     value={task}
     onChange={(e)=> setTask(e.target.value)}
     on onKeyDown={(e) => {
      if(e.key ==="Enter"){
        addTask();
      }
     }}
     />
     <button onClick = {addTask}>
      Add
     </button>
     </div>
     <ul>
      {tasks.map((t,index)=>(
        <li key={index}>
          <span onClick={() => toggleComplete(index)}
            
            style={{
              textDecoration: t.completed
                ? "line-through"
                : "none"
                
            }}>
            {t.text}
          </span>
    
      <button onClick={() => deleteTask(index)}
      >
        Delete
      </button>
        </li>
      ))}
     </ul>
  </div>
);
}

export default App;