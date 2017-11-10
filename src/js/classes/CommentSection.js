import React, { Component } from 'react';


const CommentTree = {
	TREE1: 0,
	TREE2: 1,
	TREE3: 2
};

class CommentSection extends Component {

	constructor (props) {
		super(props);
		this.state = {
			commentTree: null
		};
	}

	setCommentTree () {

		this.setState({commentTree: CommentTree.TREE1});
	}



    render() {

    	const treeStyle1 = {
    		margin: '4px', display: 'inline-block', backgroundColor: 'red', width: "125px", height: '100px', cursor: 'pointer'
    	};

    	const treeStyle2 = {
            backgroundColor: 'grey', width: "125px", height: '100px', cursor: 'pointer'
		};

    	const pStyle = {
            margin: 0, padding: 0
    	};

    	switch(this.state.commentTree) {

    		case null:
	    		return(
		            <div style={{width: '100%', height: '100%'}}>
		            	<div style={treeStyle1} onClick={this.setCommentTree.bind(this)}>
		            		<p style={pStyle}>
								Comment 1:<br/>
								{this.props.postInfo.tree1.comment1}
							</p>
		            	</div>
		            	<div style={treeStyle1} onClick={this.setCommentTree.bind(this)}>
		            		<p style={pStyle}>
								Comment 2:<br/>
								{this.props.postInfo.tree2.comment2}
							</p>
		            	</div>
		            	<div style={treeStyle1} onClick={this.setCommentTree.bind(this)}>
		            		<p style={pStyle}>
								Comment 3:<br/>
								{this.props.postInfo.tree3.comment3}
							</p>
		            	</div>
		            </div>
	        	);
	        case CommentTree.TREE1:
	        	return(
	        		<div>
	        			<div style={treeStyle2} onClick={this.setCommentTree.bind(this)}>
		            		<p style={pStyle}>
								Comment 1:<br/>
								{this.props.postInfo.tree1.comment1}
							</p>
		            		<p>Reply 1: {this.props.postInfo.tree1.reply1}</p>
		            	</div>
		            	<div style={treeStyle1}>
							<p style={pStyle}>
								Comment 1.1:<br/>
								{this.props.postInfo.tree1.tree1_1.comment1_1}
							</p>
		            	</div>
		            	<div style={treeStyle1}>
		            		<p style={pStyle}>
								Comment 1.2:<br/>
								{this.props.postInfo.tree1.tree1_2.comment1_2}
							</p>
		            	</div>
	        		</div>
	        	);
	        case CommentTree.TREE2:
	        	return(
	        		<div>
	        		</div>
	        	);
	        case CommentTree.TREE3:
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