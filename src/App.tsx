/*import './app.css'
import { Hello } from './hello'
 export function App() {
  return (
    <>
    <Hello /> 
    </>
  );
 }*/


/* import { Hello } from './hello'
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Hello />
    </div>
  );
}*/
import { useState } from "react";
import './app.css';

function Tasks() {

  const [currentTask, setCurrentTask] = useState<string>("");

  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className="tasks">
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={currentTask}
          onInput={(e) => setCurrentTask((e.target as HTMLInputElement).value)}
        />
        <button
          onClick={() => {
            setTasks([
              ...tasks, currentTask
            ]);
            console.log(tasks);
            setCurrentTask("");
          }}
          >Add</button>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Tasks />
    </>
  )
}



