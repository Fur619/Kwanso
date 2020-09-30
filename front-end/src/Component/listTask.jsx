import React from "react";
import { Link } from "react-router-dom";

const ListTask = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  return (
    <>
      <div>
        <h5 style={{ fontSize: 30, textAlign: "center" }}> Task List</h5>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <Link to={`/create-task`}>
            <div className="btn btn-primary m-4">Create Task</div>
          </Link>

          <Link to={`/bulk-delete`}>
            <div className="btn btn-danger m-4">Delete Task</div>
          </Link>
        </div>

        {data.length !== 0 ? (
          data.map((item) => (
            <div key={item.id} style={{ marginLeft: "10%" }}>
              <div
                className=" float-left m-2 card col-12 col-md-5 col-lg-3 col-xl-3 "
                style={{ height: 200 }}
              >
                {item.task}
              </div>
            </div>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}> No Tasks Found </h3>
        )}
      </div>
    </>
  );
};

export default ListTask;
