import React from 'react';
import ToDo from './ToDo';
import FormAdd from './FormAdd';
export default class ToDoList extends React.Component {
    state = {
        todos:
            [
                { id: 1, content: "Study" },
                { id: 2, content: "Sleep" },
                { id: 3, content: "Take a shower" }
            ]
    }

    addToDo = (dodo) => {

        const todosN = [...this.state.todos, { id: this.state.todos.length + 1, content: dodo }];

        this.setState({
            todos: todosN
        })
    }
    
    

    render() {

        return (
            <div>
                <ToDo list={this.state.todos} />
                <FormAdd addToDo={this.addToDo} />

            </div>

        )
    }
}