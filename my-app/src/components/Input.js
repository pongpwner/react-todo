import React, { useState } from "react";

export default function Input({ tasks, setTasks }) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("normal");
  const [status, setStatus] = useState(false);
  function addTask() {
    console.log(tasks);
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        name: taskName,
        id: Math.random(),
        priority: priority,
        status: status,
      },
    ]);
    //Math.floor(Math.random() * (100 - 1) + 1),
    setTaskName("");
    setPriority("normal");
    console.log(tasks);
    console.log(Array.isArray(tasks));
  }
  function enter(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  return (
    <div className="inputContainer">
      <input
        type="text"
        value={taskName}
        placeholder="add task"
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => enter(e)}
      ></input>
      <button className="addButton" onClick={addTask}>
        Add
      </button>
      <button
        className="priorityButton"
        value="low"
        onClick={(e) => setPriority(e.target.value)}
      >
        low
      </button>
      <button
        className="priorityButton"
        value="normal"
        onClick={(e) => setPriority(e.target.value)}
      >
        normal
      </button>
      <button
        className="priorityButton"
        value="high"
        onClick={(e) => setPriority(e.target.value)}
      >
        high
      </button>
    </div>
  );
}
