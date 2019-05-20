import React from 'react';
import ReactDOM from 'react-dom';
import Post from './Post';

ReactDOM.hydrate(<Post data={window.__PRELOADED_STATE__}/>, document.getElementById('root'));
