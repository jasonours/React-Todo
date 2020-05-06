import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: "Organize the Garage",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false
  },
  {
    task: "Wash the Dishes",
    id: 3,
    completed: false
  },
  {
    task: "Mow the Lawn",
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  toggleTodo = todoId => {
    console.log(todoId);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  addNewTodo = todoName => {
    console.log(todoName);
    this.setState({
      todos: [
        ...this.state.todos,
        { task: todoName, completed: false, id: Date.now() }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm addNewTodo={this.addNewTodo} />
        </div>
        <TodoList
          toggleTodo={this.toggleTodo}
          todos={this.state.todos}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;