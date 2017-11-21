import React, { Component } from 'react';

// Css
import '../../css/CommentSection.css';

// Constants representing different "tree states"
const CommentTree = {
	TREE1: 1,
	TREE2: 2,
	TREE3: 3,
	CHOICE1: 1,
	CHOICE2: 2
};

class CommentSection extends Component {

	setCommentTree (treeFirst, treeSecond, trollPoints, comPoints, isCompleted) {
	    // Add player points
        this.props.addPlayerPoints(trollPoints, comPoints);

        // For updating the treeState for selected post
        let treeStates = {
            first: treeFirst,
            second: treeSecond
        };

        // Send comment options to update post data list
        this.props.processPlayerChoice(this.props.postInfo.index, treeStates, isCompleted);
	}

	checkChoices (tree) {
	    // Array for choices
		const choices = [tree.choice1, tree.choice2];
        // Image source for profile picture
        const imageUrl = require('../../img/' + this.props.postInfo.profilePic);
        const playerImageUrl = require('../../img/troll.png');

		switch(this.props.postInfo.treeStates.second) {
			case null:
                return (
					<div>
                        {
                            choices.map((f) => {
                                return (
									<div key={f.comment} className='activeComments' onClick={this.setCommentTree.bind(this, tree.TREE_NUMBER, f.CHOICE_NUMBER, f.trollPoints, f.communityPoints, true)}>
										<p className='pStyle'>
											Comment:<br/>
                                            {f.comment}
										</p>
									</div>
                                );
                            })
                        }
					</div>
                );
			case CommentTree.CHOICE1:
                return (
					<div>
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={playerImageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.playerName}</b>
                            </p>
                            <p className='pStyle'>
                                {tree.choice1.comment}
                            </p>
                        </div>
                        <br/>
						<hr/>
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={imageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.postInfo.userName}</b>
                            </p>
                            <p className='pStyle'>
                                {tree.choice1.reply}
                            </p>
                        </div>
					</div>
                );
			case CommentTree.CHOICE2:
                return (
					<div>
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={playerImageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.playerName}</b>
                            </p>
                            <p className='pStyle'>
                                {tree.choice2.comment}
                            </p>
                        </div>
                        <br/>
						<hr/>
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={imageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.postInfo.userName}</b>
                            </p>
                            <p className='pStyle'>
                                {tree.choice2.reply}
                            </p>
                        </div>
					</div>
                );
			default:
                return(<div>FAILED</div>);
		}
	}

    render() {

		// Array of comment trees (1-3)
        const trees = [this.props.postInfo.tree1, this.props.postInfo.tree2, this.props.postInfo.tree3];

        // Image source for profile picture
        const imageUrl = require('../../img/' + this.props.postInfo.profilePic);
        const playerImageUrl = require('../../img/troll.png');

        // treeState determine the player's completion progress of the post
    	switch(this.props.postInfo.treeStates.first) {
            // By default this.state.commentTree is null since no comment tree has been chosen by player
    		case null:
    			return( 
    				<div>
    				{
    					trees.map((f) => {
	            			return (
		            			<div key={f.comment} className='activeComments' onClick={this.setCommentTree.bind(this, f.TREE_NUMBER, null, f.trollPoints, f.communityPoints, false)}>
				            		<p className='pStyle'>
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
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={playerImageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.playerName}</b>
                            </p>
                            <p className='pStyle'>
                                {trees[0].comment}
                            </p>
                        </div>
                        <br/>
                        <hr/>
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={imageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.postInfo.userName}</b>
                            </p>
                            <p className='pStyle'>
                                {trees[0].reply}
                            </p>
                        </div>
		            	<hr/>
						{ this.checkChoices(trees[0]) }
	        		</div>
	        	);
            // Return comment tree 2
	        case CommentTree.TREE2:
	        	return(
                    <div>
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={playerImageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.playerName}</b>
                            </p>
                            <p className='pStyle'>
                                {trees[1].comment}
                            </p>
                        </div>
                        <br/>
                        <hr/>
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={imageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.postInfo.userName}</b>
                            </p>
                            <p className='pStyle'>
                                {trees[1].reply}
                            </p>
                        </div>
						<hr/>
                        { this.checkChoices(trees[1]) }
					</div>
	        	);
            // Return comment tree 3
	        case CommentTree.TREE3:
	        	return(
                    <div>
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={playerImageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.playerName}</b>
                            </p>
                            <p className='pStyle'>
                                {trees[2].comment}
                            </p>
                        </div>
                        <br/>
                        <hr/>
                        <div className='sectionContainer'>
                            <img className='profilePicture' src={imageUrl} alt='x'/>
                            <p className='pName'>
                                <b>{this.props.postInfo.userName}</b>
                            </p>
                            <p className='pStyle'>
                                {trees[2].reply}
                            </p>
                        </div>
						<hr/>
                        { this.checkChoices(trees[2]) }
					</div>
	        	);
	        default:
	        	return(<div>FAILED</div>);
    	}       
    }
}

export default CommentSection;