import React, { useEffect, useState } from "react";
import axios from "axios";
import Showtask from "../showtask/showtask";
import "./form.css";
function Form() {
  const [list, setlist] = useState([]);
  const [key, setkey] = useState(false);
  const [task, settask] = useState("");
  const [success, setsuccess] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(list);
    if (list.length >= 1) setkey(true);
  }, [list]);

  const fetchData = () => {
    axios
      .get("http://localhost:5000/task/show")
      .then((response) => {
        const responseData = response.data;
        const jsonArray = Array.isArray(responseData)
          ? responseData
          : [responseData];
        setlist(jsonArray);
        //
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlesubmit = (e) => {
    if(task.length===0)return alert('You need to Type a Task');
    e.preventDefault();
    axios
      .post("http://localhost:5000/task/add", { name: task })
      .then(() => {
        setsuccess(true);
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = () => {
    fetchData(); // Fetch updated task list after deleting a task
  };

  return (
    <div className="form-layout">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alkatra&family=Cedarville+Cursive&family=Lato:wght@700&family=Open+Sans:wght@300&display=swap');
      </style>
      <div className="form-box">
        <h2 className="form-box-title">Task Manager</h2>
        <div className="form-box-dataentry">
          <label htmlFor="task-title"></label>
          <input
            id="task-title"
            type="text"
            placeholder="e.g - wash Dishes"
            className="form-box-dataentry-input"
            onChange={(e) => settask(e.target.value)}
          ></input>
          <button className="form-box-dataentry-submit" onClick={handlesubmit}>
            <h3>Submit</h3>
          </button>
        </div>
        {success && <h6>Item added successfully!!</h6>}
      </div>
      {key &&
        list.map((item) => {
          return (
            <div key={item.id} className="form-layout-tasks">
              <Showtask item={item} onDelete={handleDelete} />
            </div>
          );
        })}
      {key && <div className="form-spacer"></div>}
    </div>
  );
}

export default Form;


