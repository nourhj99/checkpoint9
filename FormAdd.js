import React from 'react';


export default class FormAdd extends React.Component {
    state = {
        content: ""
    }
    handleEventClick = (e) => {
        this.setState({
            content: e.target.value
        });
    }

    handleEventSubmit =(e) => {
        e.preventDefault();
        this.props.addToDo(this.state.content)
    }
    render() {

        return (

            <form onSubmit={this.handleEventSubmit} >
                <input type="text" onChange={this.handleEventClick} />
                <button> Add</button>
            </form>

        )

    }

}