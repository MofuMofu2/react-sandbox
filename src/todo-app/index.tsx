import React, { useState } from "react";

function TodoApp() {
  const [todos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: true },
    { id: 3, text: "Deploy React app", completed: false },
  ]);

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} {todo.completed ? "(done)" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
