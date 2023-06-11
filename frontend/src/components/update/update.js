import React, { useState } from "react";
import axios from "axios";
import "./update.css";
import { useLocation, useNavigate } from "react-router-dom";
function Update() {
  const Navigate = useNavigate();
  const location = useLocation();
  const { item } = location.state;
  const [name, newname] = useState("");
  const [check, setcheck] = useState(false);
  const [nameupdate, updatename] = useState(false);
  const [namedelete, deletename] = useState(false);
  const handleedit = (e) => {
    e.preventDefault();
    if (!check && newname.length > 0) {
      axios
        .patch(`http://localhost:5000/task/update/${item.name}`, { name })
        .then(() => {
          updatename(true);
        })
        .catch(() => {
          console.log("error changing the name");
        });
    }
    else{
      axios
      .delete(`http://localhost:5000/task/delete/${item.name}`)
      .then((response) => {
        deletename(true);
      })
      .catch((error) => {
        console.log("possible error");
      });
    }
  };
  const handletotaks = (e) => {
    Navigate("/");
  };
  const handleCheckboxChange = (e) => {
    setcheck(e.target.checked);
  };
  return (
    <div className="update-layout">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alkatra&family=Cedarville+Cursive&family=Lato:wght@700&family=Open+Sans:wght@300&display=swap');
      </style>
      <div className="update-box">
        <div className="update-box-title">
          <h3>Edit Task</h3>
        </div>
        <div className="update-box-tochange">
          <div className="form-field">
            <div className="form-field-left">
              <label htmlFor="Taskid">
                <h4>Task Current Name:</h4>
              </label>
              <label htmlFor="name">
                <h4>Task New Name</h4>
              </label>
              <label htmlFor="completed">
                <h5>Completed</h5>
              </label>
            </div>
            <div className="form-field-right">
              <h4>{item.name}</h4>
              <input
                id="name"
                type="text"
                className="form-field-right-newtask"
                onChange={(e) => newname(e.target.value)}
              />
              <input
                id="completed"
                type="checkbox"
                checked={check}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
          <button className="update-box-tochange-submit" onClick={handleedit}>
            Edit
          </button>
          {nameupdate && <h6>Name updated Successfully!!</h6>}
          {namedelete && <h6>Name Deleted Successfully!!</h6>}
        </div>
      </div>
      <div>
        <button className="update-layout-button" onClick={handletotaks}>
          Back to Tasks
        </button>
      </div>
    </div>
  );
}

export default Update;
