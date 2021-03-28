import React, { useState } from "react";
import { default1 } from "./defaultTasks/Default1";

export default function Defaults({ tasks, setTasks, today, setToday }) {
  function handleDefault(e) {
    setDate();
    if (e.target.value === "1") {
      setDefault1();
    }
  }
  //not sure if i need this set date method.  but i want it to recheck the date everytime
  //i click a efault because it would be a new day if i did not close the app
  //its most likely that i dont need to set date here beacuse it does not overwrite the date from Today.js
  function setDate() {
    let currentDate = new Date();
    let y = currentDate.getFullYear();
    let m = currentDate.getMonth();
    let d = currentDate.getDate();
    setToday(`${m}/${d}/${y}`);
  }

  function setDefault1() {
    setTasks(default1);
  }
  return (
    <div className="defaultsContainer">
      <button
        className="default1Button"
        value="1"
        onClick={(e) => handleDefault(e)}
      >
        Default 1
      </button>
    </div>
  );
}
