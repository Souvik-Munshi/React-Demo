import React, {Component} from 'react';

export class List extends Component {
    render() {
        return (<ol>
            {this.props.task.map((task, index) => <li key={index}>{task}</li>)}
        </ol>)
    }
}