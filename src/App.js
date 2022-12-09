import "./styles.css";
import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([{}]);
  const [value, setValues] = useState("");

  function addItem(e) {
    e.preventDefault();
    if (!value) return;
    const newTask = [...tasks, { text: `* ${value}` }];
    setTasks(newTask);
    setValues("");
  }
  //To remove the values in the list which u don't need.
  function removeItem(e) {
    var index = Number(e.target.id);
    let temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  }

  return (
    <>
      <div className="name">
        <h1>TO - DO LIST</h1>
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
          {tasks.map((item, i) => (
            <div className="task" key={i} id={i}>
              {item.text}
              <button className="btn_remove" onClick={removeItem}>
                X
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
  