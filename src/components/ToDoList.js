
import React from "react";
import ToDo from "./ToDo";
import List from '@mui/material/List';

function ToDoList({ todos, removeTodo, toggleComplete }) {
  return (
    <List>
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </List>
  );
}

export default ToDoList;
