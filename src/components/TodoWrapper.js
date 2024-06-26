import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./EditTodo";
uuidv4();

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  const isTaskComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (todo) => {
    setTodos((existingTodos) => {
      return existingTodos.filter((item) => item !== todo);
    });
    console.log("deleted");
  };
  const onEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="max-w-sm md:max-w-lg xl:max-w-2xl mx-auto text-cyan-700 p-6 bg-bg-color border border-border-bg shadow-7xl rounded-lg backdrop-blur-sm backdrop-filter">
      <h1 className="m-4 text-cyan-900">Welcome to the TODO APP</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} />
        ) : (
          <TodoList
            task={todo}
            key={index}
            isTaskComplete={isTaskComplete}
            deleteTodo={deleteTodo}
            editTodo={onEditing}
          />
        )
      )}
    </div>
  );
}
