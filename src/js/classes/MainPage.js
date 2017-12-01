import React, { Component } from 'react';

// Javascript Classes
import Post from './Post';
//import PostWindow from './PostWindow';
import PlayerInfo from './PlayerInfo';
import ImageWindow from './ImageWindow';

// Css
import '../../css/MainPage.css';

// Json data
import postData from '../../json/postsdata.json'

// Global GameState object. Used for setting return value in GameWindow class
const GameState = {
    LOGIN_PAGE: 0,
    MAIN_PAGE: 1,
    GAME_OVER: 2,
    TUTORIAL: 3,
    VICTORY_SCREEN: 4
};

const NUMBER_OF_POSTS = 1;

class MainPage extends Component {

	constructor(props) {
		super(props);

		this.state ={
            trollPoints: props.player.getTrollPoints(),
            comPoints: props.player.getCommunityPoints(),
            playerLevel: props.player.getLevel(),
            playerImgUrl: props.player.getImgUrl(),
			showImageWindow: false,
			currentImage: null,
            nextPostSize: '19px',
			intervalId: null,
            posts: postData.posts,
			currentPost: null
		};

		// Instance of player
		this.player = props.player;
	}

	addPlayerPoints(trollP, commP){

		// Add points to the player
		this.player.addPoints(trollP, commP);

		// Update player stats
        this.setState({
            comPoints: this.player.getCommunityPoints(),
            trollPoints: this.player.getTrollPoints(),
            playerLevel: this.player.getLevel(),
            playerImgUrl: this.player.getImgUrl()
        });
	}

	selectImage(srcFile) {

        this.setState({
            showImageWindow: true,
            currentImage: srcFile
        });
	}

    closeImageWindow() {

        this.setState({showImageWindow: false});
    }

	processPlayerChoice(index, treeStates) {

		// Copy the list of posts and change completed for given index to true
		let newPosts = this.state.posts;
		newPosts[index].treeStates = treeStates;

		// Update the list of posts
		this.setState({
			posts: newPosts
		});
	}

	setLikeActive(index,likeActive) {

		let newPosts = this.state.posts;

     	if (likeActive === 0) {
            newPosts[index].likeActive = '100%';
        } else {
            newPosts[index].likeActive = 0;
        }

        this.setState({
			posts: newPosts
		});
    }

    setPostCompleted (index) {

        // Copy the list of posts and change completed for given index to true
        let newPosts = this.state.posts;
        newPosts[index].completed = true;

        let nextPostIndex = index;
        if (newPosts.length > index+1) {
            nextPostIndex = index+1;
		}

        // Update the list of posts
        this.setState({
            posts: newPosts,
			currentPost: newPosts[nextPostIndex]
        });
    }

    getNextPost (f) {

	    if (!f.completed && f.treeStates.second) {

            return (
            	<div className='nextPostContainer'>
	                <div className='getNextPost'>
	                    <p style={{fontSize: this.state.nextPostSize}}>
	                        New post available!
	                    </p>
						<div onClick={this.setPostCompleted.bind(this, f.index)}>
							<p> GET POST </p>
						</div>
	                </div>
                </div>
            );
        }
	}

	animate () {

        if (this.state.nextPostSize === "19px") {
            this.setState({nextPostSize: "20px"});
        }
        else {
            this.setState({nextPostSize: "19px"});
        }
	}

	resetPosts() {

		let result = this.state.posts;

        for (let i = 0; i < result.length; ++i) {
            result[i].completed = false;
            result[i].likeActive = 0;
            result[i].treeStates.first = null;
            result[i].treeStates.second = null;
		}

		this.setState({posts: result});
	}

	componentDidUpdate() {

		// Set animation interval for next post
        if (!this.state.currentPost.completed && this.state.currentPost.treeStates.second) {
            // Check if animation interval is active
            if (!this.state.intervalId) {
                let id = setInterval(this.animate.bind(this), 500);
                this.setState({intervalId: id});
            }
        }
        else {
            // If animation interval is active, deactivate it.
            if (this.state.intervalId) {
                clearInterval(this.state.intervalId);
                this.setState({intervalId: null});
            }
		}

		// If community status is zero, switch to game over
		if (this.state.comPoints === 0) {
        	// Reset all progress
        	this.resetPosts();
            // Set game state to Game Over
			this.props.setGameState(GameState.GAME_OVER);
		}

		// Check if last post is completed
		if (this.state.lastPost.completed) {
			this.resetPosts();
			this.props.setGameState(GameState.VICTORY_SCREEN);
		}
	}

	componentDidMount() {

		let lastIndex = this.state.posts.length - 1;

		// Set current post to first index in the array
		this.setState({
			currentPost: this.state.posts[0],
			lastPost: this.state.posts[lastIndex]
		});
	}

	componentWillUnmount() {
        // Clear interval
        clearInterval(this.state.intervalId);
        this.setState({intervalId: null});
	}

	render() {

		// An object containing all player stats that goes into PlayerInfo class
		const playerStats = {
			name: this.player.getName(),
			trollPoints: this.state.trollPoints,
            comPoints: this.state.comPoints,
            level: this.state.playerLevel,
            imgUrl: this.state.playerImgUrl
        };

		// Counter for limited posts
        let postCounter = 0;

		return (
			<div style={{width: '100%', height: '100%'}}>
				<PlayerInfo playerStats={playerStats}
							addPlayerPoints={this.addPlayerPoints.bind(this)}
							selectImage={this.selectImage.bind(this)}/>
				<div className = 'blueBar'>
					<table className = 'bookfaceTable'>
						<tbody>
                            <tr className = 'bookfaceTable'>
                                <td className = 'bookfaceTable'> 
                                	<p className= 'bookfaceTitle'>
                                		Bookface
                                	</p> 
                                </td>
                                <td className = 'bookfaceTable'> 
                                	<img className = 'bookfaceLogo' src = {require('../../img/bookface_logo_white.svg')} alt='logo'/> 
                                </td>
                            </tr>
						</tbody>
					</table>
					<div className='helpButtonContainer'>
						<button className='helpButton' onClick={this.props.setGameState.bind(this, GameState.TUTORIAL)}>
							<p>
								?
							</p>
						</button>
					</div>
				</div>

				<div className='newsFlowOuter'>
					<div className='newsFlowInner'>
						<table>
							<tbody className='tableStyle'>
								{	// All posts available for a comment
					            	this.state.posts.map((f) => {
					            		// Only return three uncompleted posts
					            		if (!f.completed && (postCounter < NUMBER_OF_POSTS) ) {
					            			++postCounter;
						                	return (
						                  		<tr key={f.userName}>
													<td className='postContainer'>
                                                        {
                                                            this.getNextPost(f)
                                                        }
														<Post postInfo={f}
															  addPlayerPoints={this.addPlayerPoints.bind(this)}
															  processPlayerChoice={this.processPlayerChoice.bind(this)}
                                                              playerName={this.player.getName()}
                                                              playerImgUrl={this.state.playerImgUrl}
															  selectImage={this.selectImage.bind(this)}
															  setLikeActive={this.setLikeActive.bind(this)}/>
													</td>
												</tr>
											);
					                	}
					                	else {
					                		return(<tr key={f.userName}></tr>);
					                	}
					                })
					            }
					            {	// All posts unavailable for a comment (completed posts)
					                this.state.posts.map((f) => {
					                	// Only return completed posts
					                	if (f.completed) {
						                	return (
						                  		<tr key={f.userName} style={{backgroundColor: 'lightgrey'}}>
													<td className='postContainer'>
														<Post postInfo={f}
															  addPlayerPoints={this.addPlayerPoints.bind(this)}
															  processPlayerChoice={this.processPlayerChoice.bind(this)}
															  backgroundColor={'#F0F0F0'}
                                                              playerName={this.player.getName()}
                                                              playerImgUrl={this.state.playerImgUrl}
															  selectImage={this.selectImage.bind(this)}
															  setLikeActive={this.setLikeActive.bind(this)}/>
													</td>
												</tr>
											);
					                	}
					                	else {
					                		return(<tr key={f.userName}></tr>);
					                	}
					                })
					            }
							</tbody>
						</table>
					</div>
				</div>
				<div className="ruleBox" >
					<p>
						<b>Welcome fellow troll to the Bookface.</b>
					</p>
					<p>
					    We are an coalition of trolls bent on trolling the normie residents of the world wide web for our amusement and we have recruited you to be a part of this glorious endeavour.
					</p>
                    <br/>
					<p>
					    Your task as a troll is to look at the post of the normies here and comment in a 'trollie' way but be careful not to be to obvious in your attempts to wreak havoc.
					</p>
                    <br/>
					<p>
					    We have modified your Bookface page to keep track of how successful of a troll you are and how the normies view your action.
					</p>
				</div>
                {/* Pop out window for selected post */
				/*<PostWindow postInfo={this.state.currentPost}
							addPlayerPoints={this.addPlayerPoints.bind(this)}
							processPlayerChoice={this.processPlayerChoice.bind(this)}
							showWindow={this.state.showPostWindow}
							closeWindow={this.closePostWindow.bind(this)}
							playerName={this.player.getName()}/>*/}

				<ImageWindow showWindow={this.state.showImageWindow}
							 srcFile={this.state.currentImage}
							 closeWindow={this.closeImageWindow.bind(this)}/>
            </div>
		);
	}
	
}

export default MainPage;