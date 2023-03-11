import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main:'#6a605c',
    },
    secondary: {
      main: '#6a605c',
    },
  },
});
function ToDo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
    <ThemeProvider theme={theme}>
      <Checkbox
      color="primary"
      className="check"
      onClick={handleCheckboxClick} />
      </ThemeProvider>
      <ListItem
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
        <IconButton onClick={handleRemoveClick}>
        <DeleteIcon className="but"/>
        </IconButton>
      </ListItem>


    </div>
  );
}

export default ToDo;
