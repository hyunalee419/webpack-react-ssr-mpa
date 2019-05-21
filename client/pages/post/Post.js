import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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

Post.propTypes = {
	data: PropTypes.shape({
		result: PropTypes.arrayOf({
			title: PropTypes.string.isRequired,
			id: PropTypes.number.isRequired
		}).isRequired
	}).isRequired
};

export default Post;
