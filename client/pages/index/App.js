import React, {Component} from 'react';

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
		return (
			<div className="hello">
				<p>{data.text}</p>
				<h1>{this.state.text}</h1>
			</div>
		);
	}
}

export default App;
