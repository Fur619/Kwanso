import React, { useState, createContext } from "react";

export const TaskContext = createContext();

export const StateProvider = (props) => {
  const [task, setTask] = useState([
    { id: 1, task: "My first Task" },
    {
      id: 2,
      task: "My Second Task  ",
    },
    { id: 3, task: "My Third Task" },
    { id: 4, task: "My Fourth Task" },
    { id: 5, task: "My Fifth Task" },
  ]);
  return (
    <TaskContext.Provider value={[task, setTask]}>
      {props.children}
    </TaskContext.Provider>
  );
};
