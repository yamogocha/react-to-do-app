import React from 'react';
//import create-todo.js
import CreateTodo from './create-todo';
//importing todos-list.js
import TodosList from './todos-list';

//creating data 
const todos = [
{
	task: 'make React tutorial',
	isCompleted: false
},
{
	task: 'eat dinner',
	isCompleted: true
}
]

//App is what we are going to call the component
export default class App extends React.Component {
		constructor(props){
		super(props);

		this.state = {
			todos
		}
	}

	render() {
		return (
			<div>
				<h1>React ToDos App</h1>
				<CreateTodo />
				<TodosList todos={ this.state.todos }/>
			</div>
		);
	}
}