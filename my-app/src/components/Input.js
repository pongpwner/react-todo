import React, { useState, useEffect } from "react";

export default function Input({
  tasks,
  setTasks,
  lists,
  currentList,
  setLists,
}) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("normal");
  const [status, setStatus] = useState(false);

  // useEffect(()=>{
  //   setPriority()

  // },[setPriority()]
  // )
  useEffect(() => {
    if (lists != null) {
      setLists(
        lists.map((list) => {
          if (currentList === list.id) {
            // change list goes here
            console.log(tasks);
            //set list tasks to current tasks
            list.tasks = tasks;
            console.log(list.tasks);
            //currently does not save last delete
            //need to add the save function when adding new iqtem to the list
          }

          return list;
        })
      );
    }
  }, [tasks]);

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

    setTaskName("");
    //setPriority("normal");
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

      <select id="browsers" onChange={(e) => setPriority(e.target.value)}>
        <option value="low">low</option>
        <option selected="selected" value="normal">
          normal
        </option>
        <option value="high">high</option>
      </select>
    </div>
  );
}
