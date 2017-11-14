import React, { Component } from 'react';

import Post from './Post';

class PostWindow extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showPostWindow: true
		};
	}

	closePostWindow() {

		this.setState({showPostWindow: false});
	}

	render() {

		const containerStyle = {
			position: 'absolute',
			backgroundColor: 'rgba(0, 0, 0, 0.75)',
			height: '100%',
			width: '100%',
			display: 'flex',
		    alignItems: 'center',
		    justifyContent: 'center',
		    cursor: 'pointer'
		};
		
		if (!this.state.showPostWindow) {
			return (<div></div>);
		}

		if (this.props.postInfo){
			return (
				<div style={containerStyle}>
					<button onClick={this.closePostWindow.bind(this)}>X</button>
					<Post postInfo={this.props.postInfo} addPlayerPoints={this.props.addPlayerPoints.bind(this)}/>
				</div>
			);
		}
		else {
			return (<div></div>);
		}
	}	
}

export default PostWindow;