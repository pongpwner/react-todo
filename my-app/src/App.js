import React, { useState, useEffect, useReducer } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import Today from "./components/Today";
import SettingButtons from "./components/SettingButtons";
import Defaults from "./components/Defaults";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  var localData;
  var JSONData;

  localData = localStorage.getItem("tasks");
  if (localData === undefined) {
    console.log("yahoo");
    JSONData = [];
  } else {
    JSONData = JSON.parse(localData);
  }

  const [tasks, setTasks] = useState(JSONData);
  const [today, setToday] = useState("");
  //console.log(Array.isArray(tasks));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <div className="appContainer">
        <Today today={today} setToday={setToday} />
        <Weather />
        <Defaults
          tasks={tasks}
          setTasks={setTasks}
          today={today}
          setToday={setToday}
        />

        <Input tasks={tasks} setTasks={setTasks} />
        <SettingButtons tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
