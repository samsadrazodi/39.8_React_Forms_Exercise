import React, { useState } from "react";
import './TodoList.css';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const INITIAL_STATE = [

    ];
    const [todos, setTodos] = useState(INITIAL_STATE);
    const [editIndex, setEditIndex] = useState(-1);
    const [editedTodo, setEditedTodo] = useState(""); // State to hold edited todo text

    const handleRemove = (value) => {
        setTodos(todos.filter((todo) => todo.todo !== value));
    }

    const handleEdit = (index, todo) => {
        setEditIndex(index);
        setEditedTodo(todo); // Initialize the edited todo text
    }

    const handleUpdate = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].todo = editedTodo;
        setTodos(updatedTodos);
        setEditIndex(-1);
    }

    const addTask = (newTask) => {
        setTodos(items => [...items, { ...newTask }]);
    }

    return (
        <div className="TodoList">
            <h3>TO DO LIST:</h3>
            <NewTodoForm addTask={addTask} />


            <ul>
                {todos.map(({ todo }, index) => (
                    <li key={index}>
                        {editIndex === index ? (
                            <>
                                <input
                                    type="text"
                                    value={editedTodo}
                                    onChange={(e) => setEditedTodo(e.target.value)}
                                />
                                <button onClick={() => handleUpdate(index)}>Save</button>
                            </>
                        ) :( <Todo  todo={todo} handleRemove={handleRemove} handleEdit={handleEdit} index={index} /> )
                           
                        }
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default TodoList;
