import React, { useState, useEffect } from "react";
import TaskList from "./TaskList.js";

export default function NewListModal({
  lists,
  setLists,
  modalState,
  setModalState,
  setCurrentList,
}) {
  const [tasks1, setTasks1] = useState([]);
  const [task, setTask] = useState(""); //task name
  const [priority, setPriority] = useState("normal");
  const [listName, setListName] = useState("");

  function addTask() {
    setTasks1([
      ...tasks1,
      {
        name: task,
        id: Math.random(),
        priority: priority,
        status: false,
      },
    ]);
    setTask("");
  }
  function enter(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function submitList() {
    //SET TO CURRENT LIST.  implement
    //console.log(listName);
    let newId = Math.random();
    setLists([...lists, { tasks: tasks1, name: listName, id: Math.random() }]);
    //console.log(lists);
    setTasks1([]);
    setModalState(false);
    setListName("");

    // console.log(tasks1);
    // console.log(modalState);
    // close modal
    //sus order
  }
  return (
    <div className={`newListModalContainer ${modalState ? "" : "hidden"}`}>
      <div className="innerModal">
        <input
          type="text"
          value={listName}
          placeholder="list name"
          onChange={(e) => setListName(e.target.value)}
        ></input>
        <input
          type="text"
          value={task}
          placeholder="add new list item"
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => enter(e)}
        ></input>

        <input type="submit" placeholder="add" onClick={addTask}></input>
        <select id="browsers" onChange={(e) => setPriority(e.target.value)}>
          <option value="low">low</option>
          <option selected="selected" value="normal">
            normal
          </option>
          <option value="high">high</option>
        </select>
        <input type="submit" placeholder="done" onClick={submitList}></input>
        <TaskList tasks={tasks1} setTasks={setTasks1} />
      </div>
    </div>
  );
}
