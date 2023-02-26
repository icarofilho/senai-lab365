import "./App.css";

import { useState } from "react";

import { TaskComponent } from "./components/TaskComponent/TaskCOmponent";

function App() {
  const [task, setTask] = useState([]);
  const [search, setSearch] = useState([]);

  const handlerEdit = (pos) => {
    const newTask = String(prompt("Qual a nova tarefa ? "));
    task.splice(pos, 1, newTask);
    setTask(() => [...task]);
  };

  const handlerDelete = (pos) => {
    if (pos === 0) {
      task.shift();
      setTask(() => [...task]);
    } else {
      task.splice(1, pos);
      setTask(() => [...task]);
    }
  };

  const handleAddTask = () => {
    setTask((l) => [...l, document.querySelector("#input").value]);
  };

  const handleFindTask = () => {
    const find = task.filter((t) => {
      console.log(t);
      const input = document.querySelector("#input").value;
      return t.includes(input);
    });
    console.log(find);
    setSearch((f) => [...f, ...find]);
  };

  const handleClearSearch = () => {
    setSearch([]);
  };

  return (
    <main>
      <header>
        <input type="text" id="input" />
        <input type="submit" onClick={handleAddTask} value="Gravar" />
        <input type="submit" onClick={handleFindTask} value="Buscar" />
        <input type="submit" onClick={handleClearSearch} value="Limpar" />
      </header>
      <section>
        <ul>
          {search &&
            search.map((t, i) => {
              return (
                <TaskComponent
                  key={i}
                  handlerEdit={handlerEdit}
                  handlerDelete={handlerDelete}
                  taskTitle={t}
                  pos={i}
                />
              );
            })}
          <div>
            <hr></hr>
            <hr></hr>
          </div>
        </ul>
        <ul>
          {task.map((t, i) => {
            return (
              <TaskComponent
                key={i}
                handlerEdit={handlerEdit}
                handlerDelete={handlerDelete}
                taskTitle={t}
                pos={i}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default App;

const handleAddTask = () => {
  setTask((l) => [...l, document.querySelector("#input").value]);
};
