import React from 'react';


//TodosList is what we are going to call the component
export default class TodosListItem extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			isEditing: false
		};
	}

	renderActionSection(){
		if(this.state.isEditing){
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
				<td>{this.props.task}</td>
				{this.renderActionSection()}
			</tr>
		);
	}

	onEditClick(){
		this.setState({ isEditing: true });
	}
}