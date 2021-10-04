import React, { Component } from 'react';
import Overview from './components/Overview';

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

    }

    handleChange(event) {
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
    }

    handleDelete(index) {
        this.setState({
            tasks: this.state.tasks.filter((task,id) => id !== index),
        });
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.task} onChange={this.handleChange}></input>
                    <input type="submit"></input>
                </form>
                <Overview tasks={this.state.tasks} onDelete={this.handleDelete}/>
            </div>
        );
    }

}

export default App;
