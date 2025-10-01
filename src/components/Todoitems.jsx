import React from "react";

const todoitems = ({ Text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center justify-between p-2 mr-5 ml-4">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex gap-4 items-center cursor-pointer"
      >
        <img
          className="w-4"
          src={
            isComplete
              ? "./src/assets/check-box-checked.png"
              : "./src/assets/check-box.png"
          }
          alt=""
        />
        <p className="text-white">{Text}</p>
      </div>

      <img
        onClick={() => deleteTodo(id)}
        src="./src/assets/trash.png"
        alt=""
        className="w-4 h-4 ml-auto cursor-pointer "
      />
    </div>
  );
};
export default todoitems;
