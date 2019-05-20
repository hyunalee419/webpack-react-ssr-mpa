import React, { useEffect, useState } from 'react';
import PostList from '../../components/post/PostList';
import TodoContainer from '../../containers/post/TodoContainer';

const Post = ({
	data
}) => {
	const [ text, setText ] = useState('Post Server-Side Rendering!!!!');

	const firstUpdate = React.useRef(true);
	useEffect(() => {
		if ( !firstUpdate.current ) return;

		firstUpdate.current = false;
		setText('Post Client Loaded');
	});

	return (
		<div id="postContainer">
			<h1>{text} Hello</h1>

			<PostList data={data.result}/>

			<TodoContainer/>
		</div>
	);
};

export default Post;
