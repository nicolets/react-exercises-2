import React, { useState } from 'react';
import './Todo.css';
import CreateTask from './CeateTask';
import Task from './Task'

function Todo() {

	const [tasks, setTasks] = useState([]);

	function onAdd(task) {
		setTasks([...tasks, task])
	}

	function onDelete(index) {
		setTasks(tasks.filter((task, i) => i !== index))
	}

	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<CreateTask onAdd={onAdd}/>
			<ul>
				{tasks.map((task, index) => <Task key={index} id={index} onDelete={onDelete}>{task}</Task>)}
			</ul>
		</div>
	)
}

export default Todo;
