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
		    justifyContent: 'center'
		};
		
		if (!this.state.showPostWindow) {
			return (<div></div>);
		}

		if (this.props.postInfo){
			return (
				<div style={containerStyle} >
					<div style={{position: 'absolute', width: '100%', height: '100%'}} >
					</div>
					<div style={{zIndex: 1}}>
						<button onClick={this.closePostWindow.bind(this)}>X</button>
						<Post postInfo={this.props.postInfo} addPlayerPoints={this.props.addPlayerPoints.bind(this)}/>
					</div>
				</div>
			);
		}
		else {
			return (<div></div>);
		}
	}	
}

export default PostWindow;