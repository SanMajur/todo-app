import React from "react";
import { FaRegCheckCircle, FaRegCircle, FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export default function TodoList({
  task,
  isTaskComplete,
  deleteTodo,
  editTodo,
}) {
  return (
    <div className="">
      <div className="flex items-center mt-2 rounded px-4 shadow-md bg-white min-h-12 mx-4">
        <button
          className={`text-[#2564cf] cursor-pointer mr-2 ${
            task.completed ? "bg-green-700 rounded-full text-gray-100" : ""
          }`}
          type="submit"
          onClick={() => isTaskComplete(task.id)}
        >
          {task.completed ? <FaRegCheckCircle /> : <FaRegCircle />}
        </button>
        <p
          className={`py-2 px-1 capitalize text-[#2564cf] flex items-center ${
            task.completed ? "text-green-700 line-through" : ""
          }`}
        >
          {task.task}
        </p>

        <div className="ml-auto flex items-center gap-4">
          <FaRegEdit
            className="cursor-pointer"
            onClick={() => editTodo(task.id)}
          />

          <GoTrash
            className="hover:text-red-700 cursor-pointer"
            onClick={() => deleteTodo(task)}
          />
        </div>
      </div>
    </div>
  );
}
