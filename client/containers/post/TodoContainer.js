import React, { useEffect, useState } from 'react';
import TodoList from '../../components/post/TodoList';

const TodoContainer = () => {
	const [ todos , setTodos ] = useState(null);

	const firstUpdate = React.useRef(true);
	useEffect(() => {
		if ( !firstUpdate.current ) return;

		firstUpdate.current = false;
		fetch('http://jsonplaceholder.typicode.com/todos')
			.then((response) => {
				response.json().then((result) => {
					setTodos(result);
				})
			});
	});

	return (
		<div>
			Container of Todo. Call by http://jsonplaceholder.typicode.com/todos.
			<TodoList data={todos}/>
		</div>
	)
};

export default TodoContainer;
