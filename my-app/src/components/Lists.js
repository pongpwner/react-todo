import React, { useState } from "react";
import List from "./List.js";

export default function Lists({
  //thhis is the list of lists
  lists,
  setTasks,
  setCurrentList,
  currentList,
  setLists,
}) {
  function clearLists() {
    setLists([]);
    setTasks([]);
  }
  return (
    <div className="listsContainer">
      <button className="clearListButton" onClick={clearLists}>
        Clear Lists
      </button>
      {lists.map((list) => (
        <List
          list={list}
          lists={lists}
          setTasks={setTasks}
          key={list.id}
          setCurrentList={setCurrentList}
          currentList={currentList}
          setLists={setLists}
        />
      ))}
    </div>
  ); // lists cant pass lists into list
}
//need to get the list.tasks into the change list function

/* <List
          lists={lists}
          setTasks={setTasks}
          tasks={list.tasks}
          name={list.name}
          key={list.id}
        /> */
/*<div className="listsContainer">
      {lists.map((list) => (
        <div
          onClick={(e) => changeList(e.target.data)}
          data={JSON.stringify(list.tasks)}
        >
          {list.name}
        </div>
      ))}
    </div> */
