import React, { useCallback, useState } from "react";
import { AddInput } from "./components/AddInput";
import { TodoItem } from "./components/TodoItem";
import axios from 'axios';

const styles = {
  header: {
    width: "100%",
    height: 150,
    fontSize: 60,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  todolist: {
    width: "100%",
    listStyle: "none",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 300,
  }
};

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((content) => { }, []);

  const handleChange = useCallback(() => { }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>Todo List</div>
      <AddInput onAdd={addTodo} />
      <ul style={styles.todolist}>
        {todos.map((todo) => (
          <TodoItem {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
