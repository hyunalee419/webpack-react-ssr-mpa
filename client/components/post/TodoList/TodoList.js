import React from 'react';

const TodoList = ({ data }) => {
	const items = data && data.map((item, i) => (
		<li key={item.id}>{item.title} {item.userId}</li>
	));

	return <ul>{items}</ul>
};

export default TodoList;
