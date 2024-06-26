import { useState } from "react";
import { MdUpdate } from "react-icons/md";

export default function EditTodo({ editTodo, task }) {
  const [input, setInput] = useState(task.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(input, task.id);
    setInput("");
  };
  return (
    <div className="mx-4 my-2">
      <form className="flex shadow-lg justify-between bg-white px-4 min-h-12 rounded">
        <input
          className="flex-1 py-2 px-1 text-[#2564cf] outline-none"
          placeholder="Update Task"
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
          <MdUpdate size={25} />
        </button>
      </form>
    </div>
  );
}
