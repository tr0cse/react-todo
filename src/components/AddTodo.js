import { useState } from "react";

function AddTodo({ todoList, setTodoList }) {
  let [todoText, setTodoText] = useState({
    job: "",
    status: "",
  });

  let onChangeTodo = (e) => {
    setTodoText({ job: e.target.value, status: false });
  };

  let onSubmitTodo = (e) => {
    if (todoText.job) {
      if (e.key === "Enter") {
        e.preventDefault();
        setTodoList([...todoList, todoText]);
        setTodoText({ job: "", status: "" });
      }
    }
  };

  return (
    <header className="header">
      <h1>reacttodo</h1>
      <form method="get">
        <input
          type="text"
          className="new-todo"
          placeholder="Ne yapılması gerekiyor?"
          value={todoText.job}
          onChange={onChangeTodo}
          onKeyDown={onSubmitTodo}
          autoFocus
        />
      </form>
    </header>
  );
}

export default AddTodo;
