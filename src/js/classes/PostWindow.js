import React, { Component } from 'react';

import Post from './Post';

import '../../css/PostWindow.css';

class PostWindow extends Component {

	render() {

		if (this.props.showWindow){
			return (
				<div className='container'>
					<div className='tintedBackground' onClick={this.props.closeWindow} >
					</div>
					<div className='postDiv'>
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