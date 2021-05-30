import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import TaskList from "./components/TaskList";
import Today from "./components/Today";
import SettingButtons from "./components/SettingButtons";
import Defaults from "./components/Defaults";
import Weather from "./components/Weather";
import NewListModal from "./components/NewListModal.js";
import Lists from "./components/Lists.js";
//
import "./App.css";

function App() {
  var localData;
  var JSONData;

  var localData1;
  var JSONData1 = [];

  localData = localStorage.getItem("tasks");
  if (localData === undefined) {
    console.log("yahoo");
    JSONData = [];
  } else {
    JSONData = JSON.parse(localData);
  }

  localData1 = localStorage.getItem("lists");
  if (localData1 === undefined) {
    console.log("yaaahoo");
    JSONData1 = [];
  } else {
    JSONData1 = JSON.parse(localData1);
  }

  const [tasks, setTasks] = useState(JSONData);
  const [today, setToday] = useState("");
  const [lists, setLists] = useState(JSONData1);
  const [listName, setListName] = useState("");
  const [modalState, setModalState] = useState(false);
  const [currentList, setCurrentList] = useState(0); // list id
  //console.log(Array.isArray(tasks));

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

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
          modalState={modalState}
          setModalState={setModalState}
        />

        <Input
          tasks={tasks}
          setTasks={setTasks}
          lists={lists}
          currentList={currentList}
          setLists={setLists}
        />
        <SettingButtons tasks={tasks} setTasks={setTasks} />
        <NewListModal
          lists={lists}
          setLists={setLists}
          modalState={modalState}
          setModalState={setModalState}
          setCurrentList={setCurrentList}
        />
        <div class="domLists">
          <Lists
            lists={lists}
            setTasks={setTasks}
            setCurrentList={setCurrentList}
            currentList={currentList}
            setLists={setLists}
          />
          <TaskList
            tasks={tasks}
            setTasks={setTasks}
            lists={lists}
            setLists={setLists}
            currentList={currentList}
            setCurrentList={setCurrentList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
