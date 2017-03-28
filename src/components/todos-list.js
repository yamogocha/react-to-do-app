//only going to import a few things from lodash tsw use _
import _ from 'lodash';
import React from 'react';
//import todos-list-header.js
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';


//TodosList is what we are going to call the component
export default class TodosList extends React.Component {
	renderItems(){
		return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
	}

	render() {
		console.log(this.props.todos);

		return (
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		);
	}
}