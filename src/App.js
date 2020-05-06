import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const todos = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
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
    this.state({
      todos: [
        ...this.state.todos,
        { task: todoName, id: Date.now(), completed: false }
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
    return(
      <div className="App">
        <div>
          <h2>Welcome to your Todo App!</h2>
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