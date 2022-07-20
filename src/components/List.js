let number = 0;
function List({ todoList, setTodoList }) {
  const filterActive = todoList.filter((todo) => {
    if (!todo.status) {
      return todo;
    }
  });
  const filterCompleted = todoList.filter((todo) => {
    if (todo.status) {
      return todo;
    }
  });
  let showList = [];
  let filterClassNames = ["selected", "", ""];
  let checkBoxToggle = [];
  try {
    checkBoxToggle = document.querySelectorAll(".toggle");
  } catch (error) {}
  if (number === 0) {
    showList = [...todoList];
    filterClassNames[0] = "selected";
    filterClassNames[1] = "";
    filterClassNames[2] = "";
  } else if (number === 1) {
    showList = [...filterActive];
    filterClassNames[1] = "selected";
    filterClassNames[2] = "";
    filterClassNames[0] = "";
    checkBoxToggle.forEach((check) => {
      check.checked = false;
    });
  } else if (number === 2) {
    showList = [...filterCompleted];
    filterClassNames[2] = "selected";
    filterClassNames[0] = "";
    filterClassNames[1] = "";
    checkBoxToggle.forEach((check) => {
      check.checked = false;
    });
  }

  return (
    <div>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label
          htmlFor="toggle-all"
          onClick={() => {
            checkBoxToggle.forEach((check) => {
              check.checked = true;
            });
            showList.forEach((item) => {
              item.status = "completed";
            });
            setTodoList([...todoList]);
          }}
        >
          {" "}
          Mark all as complete{" "}
        </label>

        <ul className="todo-list">
          {showList.map((item, k) => {
            let nameClass = "";
            if (item.status) {
              nameClass = "completed";
            }
            return (
              <li key={k} className={nameClass}>
                <div className="view">
                  <input
                    onChange={() => {
                      item.status = !item.status;
                      setTodoList([...todoList]);
                    }}
                    type="checkbox"
                    className="toggle"
                  />
                  <label>{item.job}</label>
                  <button
                    onClick={() => {
                      todoList.splice(k, 1);
                      setTodoList([...todoList]);
                    }}
                    className="destroy"
                  ></button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <footer className="footer">
        <span className="todo-count">
          <strong>{filterActive.length} </strong>
          görev kaldı.
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              onClick={() => {
                number = 0;
                setTodoList([...todoList]);
              }}
              className={filterClassNames[0]}
            >
              Hepsi
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={filterClassNames[1]}
              onClick={() => {
                number = 1;
                setTodoList([...todoList]);
              }}
            >
              Yapılması Gereken
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={filterClassNames[2]}
              onClick={() => {
                number = 2;
                setTodoList([...todoList]);
              }}
            >
              Yapılmış
            </a>
          </li>
        </ul>

        <button
          onClick={() => {
            todoList = todoList.filter((todo) => {
              if (!todo.status) {
                return todo;
              }
            });
            checkBoxToggle.forEach((check) => {
              check.checked = false;
            });
            setTodoList([...todoList]);
          }}
          className="clear-completed"
        >
          Yapışmışları Sil
        </button>
      </footer>
    </div>
  );
}

export default List;
