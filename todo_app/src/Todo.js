import React from "react";
import './Todo.css'; // Make sure to adjust the path to your CSS file

const Todo = ({ todo, handleRemove, handleEdit, index }) => {
  return (
    <div className="Todo">
      <div className="TodoContent">{todo}</div>
      <div className="ButtonsContainer">
        <button onClick={() => handleRemove(todo)}>X</button>
        <button onClick={() => handleEdit(index, todo)}>Edit</button>
      </div>
    </div>
  );
}

export default Todo;
