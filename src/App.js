// src/App.js
import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import TaskInput from "./Component/TaskInput";
import TaskList from "./Component/TaskList";

function App() {
  return (
    <Provider store={store}>
      <div className="app_container">
        <h1 className="app_heading">Todo App</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
