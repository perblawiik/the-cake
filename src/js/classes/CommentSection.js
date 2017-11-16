import React, { Component } from 'react';

// Constants representing different "tree states"
const CommentTree = {
	TREE1: 0,
	TREE2: 1,
	TREE3: 2,
	CHOICE1: 1,
	CHOICE2: 2
};

class CommentSection extends Component {

	constructor (props) {
		super(props);
		this.state = {
		    // Initialize commentTree as null as default (no comment has yet been chosen by player)
			commentTree: null,
			completed: false
		};
	}

	setCommentTree (treeFirst, treeSecond, trollPoints, comPoints, isCompleted) {

	    // Add player points
        this.props.addPlayerPoints(trollPoints, comPoints);

        let treeStates = {
            first: treeFirst,
            second: treeSecond
        };

        this.props.processPlayerChoice(this.props.postInfo.index, treeStates, isCompleted);
	}

	checkChoices (trees,commentStyle1,commentStyle2,pStyle) {

		const choices = [trees[0].choice1, trees[0].choice2];

		if (!this.props.postInfo.treeStates.second) {
			return (
				<div>
				{
					choices.map((f) => {
					return (
						<div style={commentStyle1} onClick={this.setCommentTree.bind(this, trees[0].TREE_NUMBER, f.CHOICE_NUMBER, f.trollPoints, f.communityPoints, true)}>
							<p style={pStyle}>
								Comment:<br/>
								{f.comment}
							</p>
	        			</div>
				);
				})
				}
				</div>
			);
		}
		else if (this.props.postInfo.treeStates.second === CommentTree.CHOICE1) {
			return (
					<div style={commentStyle2}>
						<p style={pStyle}>
							Comment:<br/>
							{trees[0].choice1.comment}
							Reply:<br/>
							{trees[0].choice1.reply}
						</p>
        			</div>
			);
		}
		else if (this.props.postInfo.treeStates.second === CommentTree.CHOICE2) {
			return (
					<div style={commentStyle2}>
						<p style={pStyle}>
							Comment:<br/>
							{trees[0].choice2.comment}
							Reply:<br/>
							{trees[0].choice2.reply}
						</p>
        			</div>
			);
		}
	}

    render() {

		// Css for active comment options (interactions available)
    	const commentStyle1 = {
    		margin: '4px', float: 'left', backgroundColor: 'green', width: "125px", height: '100px', cursor: 'pointer'
    	};

        // Css for inactive comments (interactions unavailable)
    	const commentStyle2 = {
            margin: 'auto', backgroundColor: 'grey', width: "125px", height: '100px'
		};

    	const pStyle = {
            margin: 0, padding: 0
    	};

    	const tree1 = this.props.postInfo.tree1;
        const tree2 = this.props.postInfo.tree2;
        const tree3 = this.props.postInfo.tree3;

        const trees = [this.props.postInfo.tree1, this.props.postInfo.tree2, this.props.postInfo.tree3]

    	switch(this.props.postInfo.treeStates.first) {
            // By default this.state.commentTree is null since no comment tree has been chosen by player
    		case null:
    			return( 
    				<div>
    				{
    					trees.map((f) => {
	            			return (
		            			<div style={commentStyle1} onClick={this.setCommentTree.bind(this, f.TREE_NUMBER, null, f.trollPoints, f.communityPoints, false)}>
				            		<p style={pStyle}>
										Comment :<br/>
										{f.comment}
									</p>
				            	</div>
	            			);
                		})
    				}
    				</div>
    			);
            // Return comment tree 1
	        case CommentTree.TREE1:

	        	

	        	return(
					<div>
						{/* Div for the first comment chosen */}
	        			<div style={commentStyle2}>
		            		<p style={pStyle}>
								Comment 1:<br/>
								{tree1.comment}
							</p>
		            		<p>Reply 1: {tree1.reply}</p>
		            	</div>
						<br/>
						{
							this.checkChoices(trees, commentStyle1, commentStyle2, pStyle)
						}
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
	        	return(<div>FAILED</div>);
    	}       
    }
}

export default CommentSection;