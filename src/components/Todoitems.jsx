import React from "react";

const Todoitems = ({ Text, id, isComplete, deleteTodo}) => {

  return (
    <div className="flex items-center justify-between p-2 mr-5 ml-4">
      <div className="flex gap-4 items-center">
      <img className="w-4" src="./src/assets/check-box.png" alt="" />
        <p className="text-white">{Text}</p>
      </div>

      <img onClick={() =>deleteTodo(id)} src="./src/assets/trash.png" alt="" className="w-4 h-4 ml-auto cursor-pointer " />
    </div>
  );
}
export default Todoitems;
