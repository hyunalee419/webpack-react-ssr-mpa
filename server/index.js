const path = require('path');

// Express
import express from 'express';

// React
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/pages/index/App';
import WDM from './WDM';
import Html from './Html';

const server = express();
const port = 3000;

server.use(WDM);

server.use(express.static(path.join(__dirname,'../build')));

function renderReactDOMServer({ res, page, preloadState }) {
	const renderProps = {
		preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
		script: `/${page}/client.bundle.js`,
		css: `/${page}/${page}.css`
	};

	ReactDOMServer.renderToNodeStream(
		<Html {...renderProps}>
			<App data={preloadState}/>
		</Html>
	).pipe(res);
}

server.get('/', function (req, res, next) {
	renderReactDOMServer({
		res,
		page: 'index',
		preloadState: {
			text: 'index Server-Side Rendering'
		}
	});
});

server.get('/about', function (req, res, next) {
	renderReactDOMServer({
		res,
		page: 'about',
		preloadState: {
			text: 'about Server-Side Rendering'
		}
	});
});

server.listen(port, () => {
	console.log('http://localhost:3000')
});
