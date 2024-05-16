import "./App.css";
import { useState } from "react";
import { Check, X } from "lucide-react";

function App() {
  let [todoList, setTodo] = useState([]);
  let [newTask, setNewTask] = useState("");

  const AddTask = () => {
    const Task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    let setNewTodo = [...todoList, Task];
    setTodo(setNewTodo);
  };

  const handleEvent = (event) => {
    setNewTask(event.target.value); //to handle event so that entered value in the input box can be assigned to new todo
  };

  const ClearTask = () => {
    setTodo([]);
  };

  const Completefunction = (id) => {
    setTodo(
      todoList.map((Task) => {
        if (Task.id === id) return { ...Task, completed: true };
        else {
          return Task;
        }
      })
    );
  };
  const deleteTask = (id) => {
    setTodo(
      todoList.filter((Task) => {
        return id !== Task.id;
      })
    );
  };
  return (
    <div className="App">
      <div className="AddTask">
        <input onChange={handleEvent} />
        <div className="btn">
          <button style={{ margin: "2%" }} onClick={AddTask}>
            AddTask
          </button>
          <button style={{ margin: "2%" }} onClick={ClearTask}>
            clear
          </button>
        </div>
      </div>
      <div className="List">
        {todoList.map((Task) => {
          return (
            <div
              className="listItem"
              style={{
                backgroundColor: Task.completed ? "#0fbb4c" : "",
                width: "100%",
                color: "whitesmoke",
              }}
            >
              <div className="btn">
                <h1>
                  <li>{Task.taskName}</li>{" "}
                </h1>
                <div>
                  <button
                    style={{
                      backgroundColor: Task.completed ? "gray" : "#0fbb4c",
                    }}
                    onClick={() => {
                      Completefunction(Task.id);
                    }}
                  >
                    <Check />
                  </button>
                  <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => {
                      deleteTask(Task.id);
                    }}
                  >
                    <X />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
