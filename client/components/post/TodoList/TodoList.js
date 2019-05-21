import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ data }) => {
	const items = data && data.map((item) => (
		<li key={item.id}>{item.title} {item.userId}</li>
	));

	return <ul>{items}</ul>
};

TodoList.propTypes = {
	data: PropTypes.shape({
		completed: PropTypes.bool.isRequired,
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		userId: PropTypes.number.isRequired
	}).isRequired
};

export default TodoList;
