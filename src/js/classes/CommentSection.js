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

	setCommentTree (treeFirst, treeSecond, trollPoints, comPoints) {
        // Sound effect
        let sound = document.getElementById('sendSound');
        sound.play();

	    // Add player points
        this.props.addPlayerPoints(trollPoints, comPoints);
		
        // For updating the treeState for selected post
        let treeStates = {
            first: treeFirst,
            second: treeSecond
        };

        // Send comment options to update post data list
        this.props.processPlayerChoice(this.props.postInfo.index, treeStates);
	}

    displaypic(pic, x){

        if(pic){
            let picUrl = require('../../img/' + pic)
            if(x === 1)
            {
                return(<img className='postedPic' style={{height: '100px', width: '150px'}} src={picUrl} alt='x'/>)
            }
            else
            {
                return(<img className='postedPic' style={{height: '50px', width: '75px'}} src={picUrl} alt='x'/>)
            }
        }
    }

	displayFixedComments (choice) {

		// Image source for profile picture
        const imageUrl = require('../../img/' + this.props.postInfo.profilePic);

        // Contains info of the player and the poster
        const temp = [ {srcFile: this.props.playerImgUrl, name: this.props.playerName, text: choice.comment, postPic: choice.pic},
        			{srcFile: imageUrl, name: this.props.postInfo.userName, text: choice.reply ,postPic: null}
        	];

		return (
			<div>
				{
					temp.map((f) => {
						return (
							<div key={f.text}>
                                <hr/>
								<div className='sectionContainer'>
					                <div className='pictureContainer'>
					                    <img className='profilePicture' src={f.srcFile} alt='x'/>
					                </div>
                                    <div className='textContainer'>
                                        <p className='pName'>
                                            <b>{f.name}</b>
                                        </p>
                                        <p className='pComment'>
                                            {f.text}
                                        </p>
                                        <div>
                                            {this.displaypic(f.postPic,1 )}
                                        </div>
                                        
                                    </div>
				            	</div>
							</div>
						);
					})
				}
			</div>
		);
	}

	checkChoices (tree) {
	    // Array for choices
		const choices = [tree.choice1, tree.choice2];
        // Image source for profile picture

		switch(this.props.postInfo.treeStates.second) {
			case null:
                return (
					<div>
                        <hr/>
                        <p className='pHeading'>Pick a comment!</p>
                        {
                            choices.map((f) => {
                                return (
									<div key={f.comment} className='activeComments'
										 onClick={this.setCommentTree.bind(this, tree.TREE_NUMBER, f.CHOICE_NUMBER, f.trollPoints, f.communityPoints)}>
										<p className='pActiveComment'>
                                            {f.comment}
                                           
										</p>
                                        <div>
                                            {this.displaypic(f.pic,0)}
                                        </div>
									</div>
                                );
                            })
                        }
					</div>
                );
			case CommentTree.CHOICE1:

				return (
					<div>
						{this.displayFixedComments(tree.choice1)}
					</div>
				);

			case CommentTree.CHOICE2:

                return (
					<div>
						{this.displayFixedComments(tree.choice2)}
					</div>
				);

			default:
                return(<div>FAILED</div>);
		}
	}

    render() {

		// Array of comment trees (1-3)
        const trees = [this.props.postInfo.tree1, this.props.postInfo.tree2, this.props.postInfo.tree3];

        // treeState determine the player's completion progress of the post
    	switch(this.props.postInfo.treeStates.first) {
            // By default this.state.commentTree is null since no comment tree has been chosen by player
    		case null:
    			return( 
    				<div>
                        <hr/>
                        <p className='pHeading'>Pick a comment!</p>
                        {
                            trees.map((f) => {
                                return (
                                    <div key={f.comment} className='activeComments' onClick={this.setCommentTree.bind(this, f.TREE_NUMBER, null, f.trollPoints, f.communityPoints)}>
                                        <p className='pActiveComment'>
                                            {f.comment}
                                        </p>
                                        <div>
                                            {this.displaypic(f.pic,0)}
                                        </div>
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
						{ this.displayFixedComments(trees[0]) }
						{ this.checkChoices(trees[0]) }
	        		</div>
	        	);
            // Return comment tree 2
	        case CommentTree.TREE2:
	        	return(
                    <div>
                        { this.displayFixedComments(trees[1]) }
                        { this.checkChoices(trees[1]) }
					</div>
	        	);
            // Return comment tree 3
	        case CommentTree.TREE3:
	        	return(
                    <div>
                        { this.displayFixedComments(trees[2]) }
                        { this.checkChoices(trees[2]) }
					</div>
	        	);
	        default:
	        	return(<div>FAILED</div>);
    	}       
    }
}

export default CommentSection;