import React, { useState } from "react";

function ToDoList() {
  // array of tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    //  to see input
    setNewTask(event.target.value);
  }
  function addTask() {
    // trim to remove whiteSpace
    if (newTask.trim() !== "") {
      //   passing new arr (use previous state)
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  // index of list item <li>
  function deleteTask(index) {
    //   _ ~ convention to say "ignore el"
    setTasks((t) => t.filter((_, i) => i !== index));
  }
  function moveTaskUp(index) {
    if (index > 0) {
      // create new arr
      const updatedTasks = [...tasks];
      // swap 2 elements within arr
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      // create new arr
      const updatedTasks = [...tasks];
      // swap 2 elements within arr
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task..."
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((t, idx) => (
          <li key={idx}>
            <span className="text">{t}</span>
            <button className="del-btn" onClick={() => deleteTask(idx)}>
              Delete
            </button>
            <button className="move-btn" onClick={() => moveTaskUp(idx)}>
              Up
            </button>
            <button className="move-btn" onClick={() => moveTaskDown(idx)}>
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
