import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';

ReactDOM.hydrate(<About data={window.__PRELOADED_STATE__}/>, document.getElementById('root'));
