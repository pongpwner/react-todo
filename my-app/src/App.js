import React, { useState } from "react";
import { Title } from "./components/Title";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import Today from "./components/Today";
import SettingButtons from "./components/SettingButtons";
import Defaults from "./components/Defaults";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [today, setToday] = useState("");
  console.log(Array.isArray(tasks));

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
