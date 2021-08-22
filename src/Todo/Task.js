import React from 'react';

const Task = props => {

    function removeTask() {
        {props.onDelete(props.id)}
    }

    return (
        <li>
            {props.children}
            <button onClick={removeTask}>Delete</button>
        </li>
    );
};

export default Task;