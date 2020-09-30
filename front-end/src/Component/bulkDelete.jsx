import React, { useState } from "react";

const BulkDelete = () => {
  const [check, setCheck] = useState([]);
  const checkCount = (e, d) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      console.log(d.id);

      setCheck([...check, { id: d.id }]);
      console.log("state", check);
    } else if (!e.target.checked) {
      setCheck(check.filter((item) => item.id !== d.id));
      console.log("falseCheck", check);
    }
  };
  const removeItem = () => {
    if (check.length === 0) {
      alert("Please select any task");
      return;
    }
    console.log(check);
    let data = JSON.parse(localStorage.getItem("data"));
    console.log("Before", data);
    for (let i = 0; i < check.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (check[i].id === data[j].id) {
          console.log("catch");

          data.splice(j, 1);
        }
      }
    }

    localStorage.setItem("data", JSON.stringify(data));
    console.log("after", data);
    window.location = "/list-tasks";
  };
  const data = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="container justify-content-center">
      <div>
        <h5 style={{ fontSize: 30, textAlign: "center" }}> Delete Task</h5>
      </div>
      {data.length !== 0 ? (
        <div className="row m-5 justify-content-center">
          <div className="btn btn-danger" onClick={removeItem}>
            Delete Selected items
          </div>
        </div>
      ) : (
        <div>
          <h5 style={{ fontSize: 18, marginTop: "10%", textAlign: "center" }}>
            There are no tasks
          </h5>
        </div>
      )}
      {data.map((item) => (
        <div
          key={item.id}
          className="justify-content-center align-item-center align-content-center"
          style={{ marginLeft: "10%" }}
        >
          <div
            style={{ height: 200 }}
            className=" float-left m-2 card col-12 col-md-6 col-lg-3 col-xl-3"
          >
            <div className="card-body">
              <div>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={(e) => checkCount(e, item)}
                />
              </div>

              {item.task}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BulkDelete;
