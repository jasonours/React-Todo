import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      addNewTodo: ""
    };
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({
      addNewTodo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.addNewTodo);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" task="todo" value={this.state.addNewTodo} onChange={this.handleChanges} />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;