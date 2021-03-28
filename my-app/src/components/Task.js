import React, { useState } from "react";

export default function Task({
  task,
  name,
  id,
  tasks,
  setTasks,
  priority,
  status,
  setStatus,
}) {
  function deleteTask() {
    setTasks((tasks) => tasks.filter((ev) => ev.id !== task.id));
  }

  function completeTask() {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, status: !item.status };
        }
        return item;
      })
    );
  }

  return (
    <div className="taskContainer">
      <div className="taskButtonContainer">
        <button className="taskDone" value={id} onClick={deleteTask}>
          X
        </button>
        <button className="complete" value={id} onClick={completeTask}>
          O
        </button>
      </div>

      <div className={`taskDescription ${task.status ? "completed" : ""}`}>
        {name}
      </div>
      <div
        className={`priority 
        ${task.priority === "low" ? "low" : ""} 
        ${task.priority === "normal" ? "normal" : ""}
        ${task.priority === "high" ? "high" : ""}
        `}
      >
        {priority}
      </div>
    </div>
  );
}