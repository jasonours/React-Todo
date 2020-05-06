import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map(todo => (
        <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
      ))}
      <button className="clear-btn" onClick={props.clearCompleted}>
        Clear Completed Todo
      </button>
    </div>
  );
};

export default TodoList;