import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'Server-Side Rendering!!!!'
		}
	}

	componentDidMount(){
		this.setState({
			text : 'Client Loaded'
		})
	}

	render() {
		const { data } = this.props;
		const { text } = this.state;
		return (
			<div className="hello">
				<p>{data.text} {data.hello}</p>
				<h1>{text}</h1>
				<a href="/about">click about</a>
				<a href="/post">click post</a>
			</div>
		);
	}
}

App.propTypes = {
	data: PropTypes.shape({
		text: PropTypes.string.isRequired
	}).isRequired
};

export default App;
