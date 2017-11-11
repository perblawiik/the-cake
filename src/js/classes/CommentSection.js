import React, { Component } from 'react';

// Constants representing different "tree states"
const CommentTree = {
	TREE1: 0,
	TREE2: 1,
	TREE3: 2
};

class CommentSection extends Component {

	constructor (props) {
		super(props);
		this.state = {
		    // Initialize commentTree as null as default (no comment has yet been chosen by player)
			commentTree: null
		};
	}

	setCommentTree (tree, trollPoints, comPoints) {

	    // Add player points
        this.props.addPlayerPoints(trollPoints, comPoints);

        // Set tree state only once
        if (!tree) {
            this.setState({commentTree: tree});
        }
	}

    render() {

    	const commentStyle1 = {
    		margin: '4px', display: 'inline-block', backgroundColor: 'green', width: "125px", height: '100px', cursor: 'pointer'
    	};

    	const commentStyle2 = {
            margin: 'auto', backgroundColor: 'grey', width: "125px", height: '100px'
		};

    	const pStyle = {
            margin: 0, padding: 0
    	};

    	const tree1 = this.props.postInfo.tree1;
        const tree2 = this.props.postInfo.tree2;
        const tree3 = this.props.postInfo.tree3;

    	switch(this.state.commentTree) {
            // By default this.state.commentTree is null since no comment tree has been chosen by player
    		case null:
	    		return(
		            <div>
		            	<div style={commentStyle1} onClick={this.setCommentTree.bind(this, CommentTree.TREE1, tree1.trollPoints, tree1.communityPoints)}>
		            		<p style={pStyle}>
								Comment 1:<br/>
								{tree1.comment1}
							</p>
		            	</div>
		            	<div style={commentStyle1} onClick={this.setCommentTree.bind(this, CommentTree.TREE2, tree2.trollPoints, tree2.communityPoints)}>
		            		<p style={pStyle}>
								Comment 2:<br/>
								{tree2.comment1}
							</p>
		            	</div>
		            	<div style={commentStyle1} onClick={this.setCommentTree.bind(this, CommentTree.TREE3, tree3.trollPoints, tree3.communityPoints)}>
		            		<p style={pStyle}>
								Comment 3:<br/>
								{tree3.comment1}
							</p>
		            	</div>
		            </div>
	        	);
            // Return comment tree 1
	        case CommentTree.TREE1:
	        	return(
                    <div>
	        			<div style={commentStyle2}>
		            		<p style={pStyle}>
								Comment 1:<br/>
								{tree1.comment1}
							</p>
		            		<p>Reply 1: {tree1.reply1}</p>
		            	</div>
		            	<div style={commentStyle1} onClick={this.setCommentTree.bind(this, 1, tree1.tree1_1.trollPoints, tree1.tree1_1.communityPoints)}>
							<p style={pStyle}>
								Comment 2.1:<br/>
								{tree1.tree1_1.comment2_1}
							</p>
		            	</div>
		            	<div style={commentStyle1} onClick={this.setCommentTree.bind(this, 1, tree1.tree1_2.trollPoints, tree1.tree1_2.communityPoints)}>
		            		<p style={pStyle}>
								Comment 2.2:<br/>
								{tree1.tree1_2.comment2_2}
							</p>
		            	</div>
	        		</div>
	        	);
            // Return comment tree 2
	        case CommentTree.TREE2:
	        	return(
	        		<div>
	        		</div>
	        	);
            // Return comment tree 3
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