import React from 'react';

const Html = (props) => (
	<html lang="en">
	<head>
		<meta charSet="utf-8"/>
		<title>React Server-Side Rendering</title>
		<link rel="stylesheet" href={props.css} type="text/css"/>
		<script dangerouslySetInnerHTML={{ __html: props.preloadState }}></script>
	</head>
	<body>
	<div id="root">{props.children}</div>
	<script src={props.script}></script>
	</body>
	</html>
);

export default Html;
