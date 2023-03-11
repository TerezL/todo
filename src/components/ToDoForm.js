import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a605c',
    },
    secondary: {
      main: '#6a605c',
    },
  },
});

function ToDoForm({
  addTodo
}) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({
      ...todo,
      task: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({
        ...todo,
        id: uuid()
      });
      setTodo({
        ...todo,
        task: ""
      });
    }
  }


  return (
    <Box
    sx={{pl: 2 }}
    display = "flex"
    justifyContent = "center"
    alignItems = "center" >
    <
    ThemeProvider theme = {
      theme
    } >
    <
    form className = "todo-form"
    onSubmit = {
      handleSubmit
    } >
    <
    TextField className = "field"
    variant = "standard"
    label = "Task"
    type = "text"
    name = "task"
    color = "primary"
    value = {
      todo.task
    }
    onChange = {
      handleTaskInputChange
    }
    /> <
    IconButton type = "submit" >
    <
    AddCircleIcon className = "but" / >
    <
    /IconButton>

    <
    /form> <
    /ThemeProvider> <
    /Box>
  );
}

export default ToDoForm;
