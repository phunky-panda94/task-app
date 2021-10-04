import React, { Component } from 'react';

class Overview extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map((task, index) => 
                        <li key={index}>{task}
                            <button>Edit</button>
                            <button onClick={() => this.props.onDelete(index)}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Overview;