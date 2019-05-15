const path = require('path');

// Express
import express from 'express';

// React
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/pages/index/App';
import WDM from './WDM';
import Html from './Html';

const app = express();
const port = 3000;

app.use(WDM);

app.use(express.static(path.join(__dirname,'../build')));

function renderReactDOMServer({ res, page, preloadState }) {
	let renderProps = {
		preloadState: `window.__PRELOADED_STATE__ =${JSON.stringify(preloadState).replace(/</g, '\\u003c')}`,
		script: `/${page}/client.bundle.js`
	};

	ReactDOMServer.renderToNodeStream(
		<Html {...renderProps}>
		<App data={preloadState}/>
		</Html>
	).pipe(res);
}

app.get('/', function (req, res, next) {
	renderReactDOMServer({
		res,
		page: 'index',
		preloadState: {
			text: 'index Server-Side Rendering'
		}
	});
});

app.get('/about', function (req, res, next) {
	renderReactDOMServer({
		res,
		page: 'about',
		preloadState: {
			text: 'about Server-Side Rendering'
		}
	});
});

app.listen(port, () => {
	console.log('http://localhost:3000')
});
