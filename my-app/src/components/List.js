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
    <div onClick={changeList}>
      <div>{list.name}</div>
    </div>
  );
}
//list, lists, setTasks, tasks, name, key
