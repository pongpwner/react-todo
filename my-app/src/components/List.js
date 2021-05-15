import React, { useState } from "react";

export default function List({
  list,
  lists,
  setTasks,
  key,
  setCurrentList,
  currentList,
}) {
  function changeList() {
    console.log(key);
    setTasks(list.tasks);
    setCurrentList(list.id);
    //console.log(currentList);
  }

  return (
    <div className="listContainer" onClick={changeList}>
      <div className="listName">{list.name}</div>
    </div>
  );
}
//list, lists, setTasks, tasks, name, key
