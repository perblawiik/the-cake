import React, { Component } from 'react';

import Post from './Post';

class PostWindow extends Component {

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

		if (this.props.showWindow){
			return (
				<div style={containerStyle} >
					<div style={{position: 'absolute', width: '100%', height: '100%'}} >
					</div>
					<div style={{zIndex: 1, backgroundColor: 'white'}}>
						<button onClick={this.props.closeWindow}>X</button>
						<Post postInfo={this.props.postInfo}
							  addPlayerPoints={this.props.addPlayerPoints.bind(this)}
							  processPlayerChoice={this.props.processPlayerChoice.bind(this)}/>
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