import "./styles.css";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValues] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (!value) return;
    const newTask = [...tasks, { text: `* ${value}` }];
    setTasks(newTask);
    setValues("");
  }

  function removeItem(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <>
      <div className="name">
        <h1>TO-DO LIST</h1>
      </div>
      <div>
        <form className="form" onSubmit={addItem}>
          <input
            type="text"
            className="input"
            placeholder="Add"
            value={value}
            onChange={(e) => setValues(e.target.value)}
          />
          <button className="btn_submit">Submit</button>
        </form>
        {tasks.map((item, index) => (
          <div className="task" key={index} id={index}>
            {item.text}
            {tasks.length > 0 && (
              <button
                className="btn_remove"
                onClick={() => removeItem(index)}
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
