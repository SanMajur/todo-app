import React, { useState } from "react";
import { IoAddSharp } from "react-icons/io5";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <div className="mx-4">
      <form className="flex shadow-lg justify-between bg-white px-4 min-h-12 rounded">
        <input
          className="flex-1 py-2 px-1 text-[#2564cf] outline-none"
          placeholder="Add a Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button
          className="text-[#2564cf]"
          disabled={!input}
          type="submit"
          onClick={handleSubmit}
        >
          <IoAddSharp size={25} />
        </button>
      </form>
      <h2 className="my-6 text-lg font-semibold text-cyan-900">
        Lists of Tasks
      </h2>
    </div>
  );
}
