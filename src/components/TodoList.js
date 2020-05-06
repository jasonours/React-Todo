import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return(
        <div>
            {props.todos.map(todo => (
                <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
            ))}
            <button className="clear" onClick={props.clearTodo}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;