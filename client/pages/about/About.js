import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const About = ({
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
		<div className="hello">
			<p>{data.text}</p>
			<h1>{text} Hello</h1>
		</div>
	);
};

About.propTypes = {
	data: PropTypes.shape({
		text: PropTypes.string.isRequired
	}).isRequired
};

export default About;
