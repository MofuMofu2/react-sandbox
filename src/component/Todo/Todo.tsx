import React, { useState } from "react";
import "./Todo.modules.css";

interface TodoTask {
  id: number;
  title: string;
  created: Date;
  isDone: boolean;
}

let maxId = 0;

export default function Todo() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState<TodoTask[]>([]);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      ...todo,
      {
        id: ++maxId,
        title,
        created: new Date(),
        isDone: false,
      },
    ]);
  };

  const handleDone = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodo(
      todo.map((item) => {
        return item.id === Number(e.currentTarget.dataset.id)
          ? { ...item, isDone: true }
          : item;
      })
    );
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodo(
      todo.filter((item) => {
        return item.id !== Number(e.currentTarget.dataset.id);
      })
    );
  };

  return (
    <div>
      <label htmlFor="title">やること：</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChangeTitle}
      />
      <button type="button" onClick={handleClick}>
        追加
      </button>
      <hr />
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.title}
            <button type="button" onClick={handleDone} data-id={item.id}>
              DONE
            </button>
            <button type="button" onClick={handleRemove} data-id={item.id}>
              REMOVE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}