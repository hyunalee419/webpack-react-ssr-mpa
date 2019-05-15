import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<About/>, document.getElementById('root'));
ReactDOM.hydrate(<App data={window.__PRELOADED_STATE__}/>, document.getElementById('root'));
