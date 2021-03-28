import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, setTasks }) {
  return (
    <div className="taskListContainer">
      {tasks.map((task) => (
        <Task
          task={task}
          name={task.name}
          key={task.id}
          tasks={tasks}
          setTasks={setTasks}
          priority={task.priority}
          status={task.status}
          setStatus={task.setStatus}
        />
      ))}
    </div>
  );
}
