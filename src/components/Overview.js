import React, { Component } from 'react';
import '../Overview.css';

class Overview extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.tasks.map((task, index) => 
                        <li key={index}>
                            <input type="text" value={task} onChange={() => this.props.onEdit(index)} disabled/>
                            <button onClick={(e) => this.props.toggle(e,index)}>Edit</button>
                            <button onClick={() => this.props.onDelete(index)}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Overview;