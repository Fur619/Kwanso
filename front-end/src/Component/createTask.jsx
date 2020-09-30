import React, { useState } from "react";
import nextId from "react-id-generator";

const CreateTask = () => {
  // let count = 5;
  const [newTask, setnewTask] = useState("");
  const [count, setCount] = useState(2);
  const addTask = () => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (data.length === 0) {
      localStorage.setItem("data", JSON.stringify([{ id: 1, task: newTask }]));
      window.location = "/";
    } else {
      data = [...data, { id: Math.floor(Math.random() * 100), task: newTask }];

      setCount((prevTime) => prevTime + 1);
      console.log("count", count);
      localStorage.setItem("data", JSON.stringify(data));
      window.location = "/";
    }
    console.log(data);
  };
  return (
    <>
      <div className="container mt-5">
        <h5 style={{ fontSize: 30, textAlign: "center" }}> Create Task</h5>
        <div className="justify-content-center row">
          <div className=" float-left m-2 card col-12 col-md-6 col-lg-3 col-xl-3">
            <div className="card-header">Add Task</div>
            <div className="card-body">
              <textarea
                name="Text1"
                style={{ width: "100%", height: 100 }}
                value={newTask}
                onChange={(e) => setnewTask(e.target.value)}
                placeholder="Enter Task"
              ></textarea>
              <div className="btn btn-info mt-2" onClick={addTask}>
                Add
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
