import React from 'react';

//TodosList is what we are going to call the component
export default class CreateTodo extends React.Component {

	render() {
		console.log(this.props.todos);

		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="what do I need to do?" ref="createInput"/>
				<button>Create</button>
			</form>
		);
	}

	handleCreate(event) {
		event.preventDefault();
		console.log(this.refs.createInput.value);
	}
}