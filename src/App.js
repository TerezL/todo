import React, { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import Box from '@mui/material/Box';

const LOCAL_STORAGE_KEY = "react-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Box display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh">
    <div className="App">
      <h1>To Do</h1>
      <ToDoForm addTodo={addTodo} />
      <ToDoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
    </Box>
  );
}

export default App;
