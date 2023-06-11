import React from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import "./showtask.css";
function Showtask(props) {
  const Navigate = useNavigate();
  const handleupdate = (e) =>{
    e.preventDefault();
    Navigate('/update', { state: { item: props.item } });
  }
  const { item, onDelete } = props;
  const deletetask = () => {
    axios
      .delete(`http://localhost:5000/task/delete/${item.name}`)
      .then((response) => {
        onDelete(); // Notify the parent component of the deletion
        console.log("yeah deletion possible!");
      })
      .catch((error) => {
        console.log("possible error");
      });
  };
  return (
    <div className="Showtask-layout">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Alkatra&family=Cedarville+Cursive&family=Lato:wght@700&family=Open+Sans:wght@300&display=swap');
      </style>
      <h4 style={{ paddingLeft: "14px" }}>{item.name}</h4>
      <div className="Showtask-layout-icons">
        <GrUpdate className="Showtask-layout-update" onClick={handleupdate} />
        <AiFillDelete onClick={deletetask} className="Showtask-layout-delete" />
      </div>
    </div>
  );
}

export default Showtask;
