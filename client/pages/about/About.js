import React, { useEffect, useState } from 'react';

const About = ({
	data
}) => {
	const [ text, setText ] = useState('About Server-Side Rendering!!!!');

	const firstUpdate = React.useRef(true);
	useEffect(() => {
		if ( !firstUpdate.current ) return;

		firstUpdate.current = false;
		setText('About Client Loaded');
	});

	return (
		<div className="hello">
			<p>{data.text}</p>
			<h1>{text} Hello</h1>
		</div>
	);
};

export default About;
