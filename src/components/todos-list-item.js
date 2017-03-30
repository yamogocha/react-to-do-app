import React from 'react';


//TodosList is what we are going to call the component
export default class TodosListItem extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			isEditing: false
		};
	}

	renderTaskSection() {
		const { task, isCompleted } = this.props;

		const taskStyle = {
			color: isCompleted ? 'green' : 'red',
			cursor: 'pointer'
		};

		return (
			<td style={ taskStyle }
				onClick={this.props.toggleTask.bind(this)}
			>
				{task}
			</td>
		);
	}

	renderActionSection() {
		if(this.state.isEditing) {
			return (
				<td>
					<button>Save</button>
					<button>Cancel</button>
				</td>
			);
		}

		return (
			<td>
				<button onClick={this.onEditClick.bind(this)}>Edit</button>
				<button>Delete</button>					
			</td>
		);
	}

	render() {
		return (
			<tr>
				{this.renderTaskSection()}
				{this.renderActionSection()}
			</tr>
		);
	}

	onEditClick(){
		this.setState({ isEditing: true });
	}
}