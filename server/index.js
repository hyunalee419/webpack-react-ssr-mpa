const path = require('path');

// Express
import express from 'express';

// React
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/pages/index/App';
import About from '../client/pages/about/About';
import Post from '../client/pages/post/Post';
import WDM from './WDM';
import Html from './Html';

const server = express();
const port = 3000;

server.use(WDM);

server.use(express.static(path.join(__dirname,'../build')));

function renderReactDOMServer({ res, page, content, preloadState }) {
	const renderProps = {
		preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
		script: `/${page}/client.bundle.js`,
		css: `/${page}/${page}.css`
	};

	ReactDOMServer.renderToNodeStream(
		<Html {...renderProps}>
			<content data={preloadState}/>
		</Html>
	).pipe(res);
}

server.get('/', function (req, res, next) {
	renderReactDOMServer({
		res,
		page: 'index',
		content: App,
		preloadState: {
			text: 'index Server-Side Rendering',
			hello: 'myname'
		}
	});
});

server.get('/about', function (req, res, next) {
	renderReactDOMServer({
		res,
		page: 'about',
		content: About,
		preloadState: {
			text: 'about Server-Side Rendering'
		}
	});
});

server.get('/post', function (req, res, next) {
	renderReactDOMServer({
		res,
		page: 'post',
		content: Post,
		preloadState: {
			result: [{
				title: 'hello',
				id: 11111
			}, {
				title: 'man',
				id: 222222
			}, {
				title: 'woman',
				id: 33333
			}]
		}
	});
});

server.listen(port, () => {
	console.log('http://localhost:3000')
});
