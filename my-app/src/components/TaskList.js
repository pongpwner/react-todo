import React from "react";
import Task from "./Task";

export default function TaskList({
  tasks,
  setTasks,
  lists,
  setLists,
  currentList,
  setCurrentList,
}) {
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
          lists={lists}
          setLists={setLists}
          currentList={currentList}
          setCurrentList={setCurrentList}
        />
      ))}
    </div>
  );
}
