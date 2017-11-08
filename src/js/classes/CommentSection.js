import React, { Component } from 'react';


const CommentState = {
	TREE1: 0,
	TREE2: 1,
	TREE3: 2
};

class CommentSection extends Component {

	constructor (props) {
		super(props);
		this.state = {
			color: 'pink',
			commentState: null
		};
	}

	changeColor () {
		if (this.state.color == 'pink') {
			this.setState({color: 'yellow'});
		}
		else {
			this.setState({color: 'pink'});
		}

		this.setState({commentState: CommentState.TREE1});
	}



    render() {

    	const tree1Style = {
    		backgroundColor: this.state.color, width: "200px", height: '100px', cursor: 'pointer'
    	};
    	const tree2Style = {
    		backgroundColor: this.state.color, width: "200px", height: '100px', cursor: 'pointer'
    	};
    	const tree3Style = {
    		backgroundColor: this.state.color, width: "200px", height: '100px', cursor: 'pointer'
    	};

    	const pStyle1 = {
    		fontSize: 0
    	};
    	const pStyle2 = {
    		fontSize: 0
    	};

    	switch(this.state.commentState) {

    		case null:
	    		return(
		            <div>
		            	<div style={tree1Style} onClick={this.changeColor.bind(this)}>
		            		<p>Comment 1: {this.props.postInfo.tree1.comment1}</p>
		            	</div>
		            	<div style={tree2Style} onClick={this.changeColor.bind(this)}>
		            		<p>Comment 2: {this.props.postInfo.tree2.comment2}</p>
		            	</div>
		            	<div style={tree3Style} onClick={this.changeColor.bind(this)}>
		            		<p>Comment 3: {this.props.postInfo.tree3.comment3}</p>
		            	</div>
		            </div>
	        	);
	        case CommentState.TREE1:
	        	return(
	        		<div>
	        			<div style={tree1Style} onClick={this.changeColor.bind(this)}>
		            		<p>Comment 1: {this.props.postInfo.tree1.comment1}</p>
		            		<p>Reply 1: {this.props.postInfo.tree1.reply1}</p>
		            	</div>
		            	<div style={tree1Style}>
		            		<p>Comment 1.1:{this.props.postInfo.tree1.tree1_1.comment1_1}</p>
		            		<p style={pStyle1}>{this.props.postInfo.tree1.tree1_1.reply1_1}</p>
		            	</div>
		            	<div style={tree1Style}>
		            		<p>Comment 1.2:{this.props.postInfo.tree1.tree1_2.comment1_2}</p>
		            		<p style={pStyle2}>{this.props.postInfo.tree1.tree1_2.reply1_2}</p>
		            	</div>
	        		</div>
	        	);
	        case CommentState.TREE2:
	        	return(
	        		<div>
	        		</div>
	        	);
	        case CommentState.TREE3:
	        	return(
	        		<div>
	        		</div>
	        	);
	        default:
	        	break;
    	}        
    }
}

export default CommentSection;