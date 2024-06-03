import { useEffect, useRef, useState } from "react";
import "./App.css";
import Todolist from "./Todolist";
import { db } from "./config/firebase-config";
import { getDocs, collection, addDoc } from "firebase/firestore";

const KEY_VALUE = "toApp.todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState(0);
  const [newTodos, setNewTodos] = useState([]);
  console.log(todos);

  const todonameRef = useRef();
  const todoCollectionRef = collection(db, "todoItems");

  useEffect(() => {
    const getTodoItems = async () => {
      try {
        const data = await getDocs(todoCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
        }));
        // console.log(filteredData);
        setTodos(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getTodoItems();
  }, []);

  const addTodoToDatabase = async () => {
    try {
      await addDoc(todoCollectionRef, { newTodos });
    } catch (err) {
      console.error(err);
    }
    setNewTodos([]);
  };

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo?.id === id);
    todo.complete = todo?.complete && !todo?.complete;
    setTodos(newTodos);
  }

  function handleaddtodo(e) {
    const name = todonameRef.current.value;

    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: value, name: name, complete: false }];
    });
    setNewTodos((prevNewTodos) => {
      return [...prevNewTodos, { id: value, name: name, complete: false }];
    });

    // console.log(todos);
    todonameRef.current.value = "";
    setValue(value + 1);
    addTodoToDatabase();
  }

  function todoComplete() {
    const newtodos = todos.filter((todo) => !todo.complete);
    setTodos(newtodos);
  }
  function clearAll() {
    setTodos(() => {
      return [];
    });
  }

  return (
    <>
      <div className="header">
        <h1>Todo List</h1>
      </div>
      <input
        className="data-input"
        ref={todonameRef}
        type="text"
        placeholder="Add the tasks here..."
      ></input>
      <div className="buttons-block">
        <button onClick={handleaddtodo}> Add </button>
        <button onClick={todoComplete}> Clear Completed</button>
        <button onClick={clearAll}> Clear All</button>
      </div>
      <div>
        {todos.filter((todo) => !todo.complete).length} To be completed{" "}
      </div>
      <h1>
        <Todolist numbers={todos} toggleTodo={toggleTodo} />
      </h1>
    </>
  );
}

export default App;
