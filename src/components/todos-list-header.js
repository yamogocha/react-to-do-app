import React from 'react';


//TodosList is what we are going to call the component
export default class TodosListHeader extends React.Component {
	render() {
		return (
			<thead>
				<tr>
					<th>Task</th>
					<th>Action</th>
				</tr>
			</thead>
		);
	}
}