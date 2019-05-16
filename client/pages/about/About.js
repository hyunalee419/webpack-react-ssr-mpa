import React, {Component} from 'react';

class About extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'About Server-Side Rendering!!!!'
		}
	}

	componentDidMount(){
		this.setState({
			text : 'About Client Loaded'
		})
	}

	render() {
		const { data } = this.props;
		return (
			<div className="hello">
				<p>{data.text}</p>
				<h1>{this.state.text} Hello</h1>
			</div>
		);
	}
}

export default About;
