import React, { Component } from 'react';

class Overview extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map((task, index) => 
                        <li key={index}>{task}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Overview;