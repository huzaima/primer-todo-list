import React, { useState } from "react";

const styles = {
  form: {
    width: "100%",
  },
  input: {
    width: "100%",
    border: "none",
    padding: 16,
    outline: "none",
    borderRadius: 3,
    marginBottom: 8,
  }
};

export const AddInput = ({ onAdd }) => {
  const [input, setInput] = useState("");

  return (
    <form
      style={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
      }}
    >
      <input
      style={styles.input}
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add a new todo item here"
      />
    </form>
  );
};
