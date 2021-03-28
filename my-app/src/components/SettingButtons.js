import React, { useState } from "react";

export default function SettingButtons({ tasks, setTasks }) {
  function prioritySort() {
    let low = [];
    let normal = [];
    let high = [];

    tasks.forEach(function (task) {
      if (task.priority === "low") {
        low.push(task);
      } else if (task.priority === "normal") {
        normal.push(task);
      } else if (task.priority === "high") {
        high.push(task);
      }
    });

    setTasks([...high, ...normal, ...low]);
  }

  function completionSort() {
    let complete = [];
    let incomplete = [];

    tasks.forEach(function (task) {
      if (task.status === true) {
        complete.push(task);
      } else {
        incomplete.push(task);
      }
    });

    setTasks([...incomplete, ...complete]);
  }
  function deleteCompleted() {
    let complete = [];
    let incomplete = [];

    tasks.forEach(function (task) {
      if (task.status === true) {
        complete.push(task);
      } else {
        incomplete.push(task);
      }
    });

    setTasks([...incomplete]);
  }
  function clear() {
    setTasks([]);
  }

  return (
    <div className="sortingButtonsContainer">
      <button className="prioritySortButton" onClick={prioritySort}>
        Sort By Priority
      </button>
      <button className="prioritySortButton" onClick={completionSort}>
        Sort By Completion
      </button>
      <button className="deleteCompletedButton" onClick={deleteCompleted}>
        Delete Completed
      </button>
      <button className="clearButton" onClick={clear}>
        Clear
      </button>
    </div>
  );
}
