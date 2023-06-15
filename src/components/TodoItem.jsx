import React from "react";
import styled from "@emotion/styled";

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 4,
    marginBottom: 8,
    padding: 16,
    background: "white",
    fontWeight: "400",
    fontSize: 14,
    cursor: "pointer",
  },
  label: {
    fontSize: 20,
    margin: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: 300,
    "&:hover": {
      background: 'red',
    }
  },
  checkbox: {
    width: 16,
    height: 16,
    marginRight: 12,
  }
};

export const TodoItem = ({
  id,
  content,
  onClick,
}) => {
  return (
    <label style={styles.wrapper}>
      <div style={styles.label}>{content}</div>
    </label>
  );
};
