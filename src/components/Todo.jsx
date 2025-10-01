import React, { useEffect, useRef } from "react";
import Todoitems from "./todoitems";

export const Todo = () => {
  const [todolist, setTodolist] = React.useState([]);

  const inputRef = useRef();

  //fungsi add
  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    //buat object baru
    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    //pakai prev biar dapet value terbaru (previous)
    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  //fungsi delete
  const deleteTodo = (id) => {
    setTodolist((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  //fungsi complete
  const toggle = (id) => {
    setTodolist((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    // frame
    <div className="bg-gray-800 place-self-center rounded-4xl flex flex-col p-2 w-11/12 max-w-md min-h-[550px]">
      {/* header */}
      <div className="flex items-center place-self-center gap-2 ">
        <p className="text-white font-semibold text-center ">To-Do List App</p>
        <img
          className="w-10 h-10"
          src="./src/assets/checklist.png"
          alt="Logo"
        />
      </div>

      {/* input button */}
      <div className="flex justify-between items-center gap-2 my-4 pl-5 pr-2">
        <input
          ref={inputRef}
          className="flex-1 text-white border bg-slate-800 border-gray-500 pl-4 p-0.5 rounded-full"
          placeholder="Add a new task..."
        />
        <button
          onClick={add}
          className="bg-gray-600 font-semibold text-white rounded-full ml-2 px-3 py-1 hover:bg-gray-700"
        >
          Add +
        </button>
      </div>

      <div>
        {todolist.map((item, index) => {
          return (
            <Todoitems
              key={index}
              Text={item.text}
              id={item.id}
              complete={item.complete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};
