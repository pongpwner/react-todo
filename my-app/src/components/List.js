import React, { useState } from "react";

export default function List({
  list,
  lists,
  setTasks,
  key,
  setCurrentList,
  currentList,
  setLists,
}) {
  function changeList() {
    console.log(key);
    setTasks(list.tasks);
    setCurrentList(list.id);
    //console.log(currentList);
  }
  function deleteList() {
    setLists((lists) => lists.filter((ev) => ev.id !== list.id));
    setTasks([]);
  }

  return (
    <div className="listContainer">
      <div className="listName" onClick={changeList}>
        {list.name}
      </div>
      <button className="closeButton" onClick={deleteList}>
        X
      </button>
    </div>
  );
}
//list, lists, setTasks, tasks, name, key
