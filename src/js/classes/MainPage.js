import React, { Component } from 'react';

import Post from './Post';

import PostWindow from './PostWindow';

import postsdata from '../../json/postsdata.json'

import PlayerInfo from'./PlayerInfo';

class MainPage extends Component {

	constructor(props) {
		super(props);
		this.state ={
            trollPoints: props.player.getTrollPoints(),
            comPoints: props.player.getCommunityPoints(),
            playerLevel: props.player.getLevel(),
            currentPost: null,
            showPostWindow: false,
            posts: postsdata.posts
		};
		this.player = props.player;
	}

	addPlayerPoints(trollP, commP){

		// Add points to the player
		this.player.addPoints(trollP, commP);

		// Update player stats
        this.setState({
            comPoints: this.player.getCommunityPoints(),
            trollPoints: this.player.getTrollPoints(),
            playerLevel: this.player.getLevel()
        });
	}

	selectPost(post) {

		this.setState({
			currentPost: post,
			showPostWindow: true
		});
	}

	closePostWindow() {
		this.setState({showPostWindow: false});
	}

	processPlayerChoice(index, treeStates, isCompleted) {

		// Copy the list of posts and change completed for given index to true
		let newPosts = this.state.posts;
		newPosts[index].completed = isCompleted;
		newPosts[index].treeStates = treeStates;

		// Update the list of posts
		this.setState({
			posts: newPosts
		});
	}

	render() {

		// An object containing all player stats that goes into PlayerInfo class
		const playerStats = {
			name: this.player.getName(),
			trollPoints: this.state.trollPoints,
            comPoints: this.state.comPoints,
            level: this.state.playerLevel
        };

		// Css for inner div containing the posts
		const newsFlowInner = {
            backgroundColor: 'white',
            position: 'absolute',
            margin: 'auto',
            top: 0,
			bottom: '5%',
            width: '450px',
            overflowY: 'scroll'
        };

		// Css for outer div (used to hide the scrollbar)
        const newsFlowOuter = {
            position: 'absolute',
            margin: 'auto',
            top: '12.5%',
            bottom: '5%',
            left: '12.5%',
            right: '12.5%',
            width: '420px',
            overflow: 'hidden'
        };

        const tableStyle = { margin: 0, padding: 0, display: 'block'};

        let counter = 0;

		return (
			<div style={{width: '100%', height: '100%'}}>
				<PlayerInfo playerStats={playerStats} addPlayerPoints={this.addPlayerPoints.bind(this)}/>
				<div style={newsFlowOuter}>
					<div style={newsFlowInner}>
						<table>
							<tbody style={tableStyle}>
								{	// All posts available for a comment
					            	this.state.posts.map((f) => {
					            		// Only return three uncompleted posts
					            		if (!f.completed && (counter < 3) ) {
					            			++counter;
						                	return (
						                  		<tr key={f.userName}>
													<td style={{border:'1px solid black'}} onClick={this.selectPost.bind(this, f)}>
															{/* First post (p01) */}
														<Post postInfo={f}
															  addPlayerPoints={this.addPlayerPoints.bind(this)}
															  processPlayerChoice={this.processPlayerChoice.bind(this)}/>
													</td>
												</tr>
											);
					                	}
					                	/*
					                	else {
					                		return(<div></div>);
					                	}
					                	*/
					                })
					            }
					            {	// All posts unavailable for a comment (completed posts)
					                this.state.posts.map((f) => {
					                	// Only return completed posts
					                	if (f.completed) {
						                	return (
						                  		<tr key={f.userName}>
													<td style={{border:'1px solid black'}} onClick={this.selectPost.bind(this, f)}>
															{/* First post (p01) */}
														<Post postInfo={f}
															  addPlayerPoints={this.addPlayerPoints.bind(this)}
															  processPlayerChoice={this.processPlayerChoice.bind(this)}/>
													</td>
												</tr>
											);
					                	}
					                	/*
					                	else {
					                		return(<div></div>);
					                	}
					                	*/
					                })
					            }
							</tbody>
						</table>
					</div>
				</div>
				<PostWindow postInfo={this.state.currentPost}
							addPlayerPoints={this.addPlayerPoints.bind(this)}
							processPlayerChoice={this.processPlayerChoice.bind(this)}
							showWindow={this.state.showPostWindow}
							closeWindow={this.closePostWindow.bind(this)}/>
            </div>
		);
	}
	
}

export default MainPage;