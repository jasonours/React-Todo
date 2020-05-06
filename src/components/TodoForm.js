import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            newTodo: ""
        };
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({
            newTodo: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="todo" value={this.state.newTodo} onchange={this.handleChanges} />
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;