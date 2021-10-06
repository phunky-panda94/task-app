import React, { Component } from 'react';
import Overview from './components/Overview';
import './Overview.css';

class App extends Component {
    
    constructor() {
        super();

        this.state = {
            task: '',
            tasks: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            task: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        });
        event.target.reset();
    }

    handleDelete(index) {
        this.setState({
            tasks: this.state.tasks.filter((task,id) => id !== index),
        });
    }

    handleEdit(index) {

        let taskInput = document.querySelectorAll(`li > input`)[index];
        console.log(taskInput.value);
        // update item in array
        let list = this.state.tasks.map((task,id) => {
            if (id === index) {
                return taskInput.value;
            } 
            return task;
        })

        this.setState({
            tasks: list
        })

    }

    toggle(event, index) {

        let taskInput = document.querySelectorAll(`li > input`)[index];

        if (taskInput.disabled) {
            taskInput.disabled = false;
            event.target.textContent = 'Save';
        } else {
            taskInput.disabled = true;
            event.target.textContent = 'Edit';
        }

    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
                <Overview tasks={this.state.tasks} onDelete={this.handleDelete} onEdit={this.handleEdit} toggle={this.toggle} />
            </div>
        );
    }

}

export default App;
