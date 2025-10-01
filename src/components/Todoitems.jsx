import React from "react";
import uncheck from "../assets/check-box.png";
import check from "../assets/check.png";
import trash from "../assets/trash.png";

const todoitems = ({ Text, id, complete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center justify-between p-2 mr-5 ml-4">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex gap-4 items-center cursor-pointer"
      >
        <img className="w-4" src={complete ? check : uncheck} alt="" />
        <p className="text-white">{Text}</p>
      </div>

      <img
        onClick={() => deleteTodo(id)}
        src={trash}
        alt=""
        className="w-4 h-4 ml-auto cursor-pointer "
      />
    </div>
  );
};
export default todoitems;
