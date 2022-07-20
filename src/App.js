import AddTodo from "./components/AddTodo";
import List from "./components/List";
import { useState, useEffect } from "react";

function App() {
  let [todoList, setTodoList] = useState([
    { job: "React Çalış", status: true },
  ]);
  useEffect(() => {
    //console.log(todoList);
  }, [todoList]);
  return (
    <>
      <section className="todoapp">
        <AddTodo todoList={todoList} setTodoList={setTodoList} />
        <List todoList={todoList} setTodoList={setTodoList} />
      </section>
      <footer class="info">
        <p>React ile yapıldı.</p>
        <p>Gürkan Akyüz tarafından yazıldı.</p>
        <p>
          <a href="https://app.patika.dev/">patika.dev</a>
        </p>
      </footer>
    </>
  );
}

export default App;
