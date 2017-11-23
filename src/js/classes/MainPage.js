import React, { Component } from 'react';

// Javascript Classes
import Post from './Post';
import PostWindow from './PostWindow';
import PlayerInfo from './PlayerInfo';
import ImageWindow from './ImageWindow';

// Css
import '../../css/MainPage.css';

// Json data
import postData from '../../json/postsdata.json'

class MainPage extends Component {

	constructor(props) {
		super(props);

		this.state ={
            trollPoints: props.player.getTrollPoints(),
            comPoints: props.player.getCommunityPoints(),
            playerLevel: props.player.getLevel(),
            currentPost: null,
            showPostWindow: false,
			showImageWindow: false,
			currentImage: null,
            posts: postData.posts // Contains all post data
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
            playerLevel: this.player.getLevel()
        });
	}

	selectPost(post) {

		this.setState({
			currentPost: post,
			showPostWindow: false
		});
	}

	selectImage(srcFile) {

        this.setState({
            showImageWindow: true,
            currentImage: srcFile
        });
	}

	closePostWindow() {

		this.setState({showPostWindow: false});
	}

    closeImageWindow() {

        this.setState({showImageWindow: false});
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

	setLikeActive(index,likeActive) {

		let newPosts = this.state.posts;

     	if (likeActive == 0) {
            newPosts[index].likeActive = '100%';
        } else {
            newPosts[index].likeActive = 0;
        }

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

		// Counter for limited posts
        let postCounter = 0;

		return (
			<div style={{width: '100%', height: '100%'}}>
				<PlayerInfo playerStats={playerStats}
							addPlayerPoints={this.addPlayerPoints.bind(this)}
							selectImage={this.selectImage.bind(this)}/>

				<div className='newsFlowOuter'>
					<div className='newsFlowInner'>
						<table>
							<tbody className='tableStyle'>
								{	// All posts available for a comment
					            	this.state.posts.map((f) => {
					            		// Only return three uncompleted posts
					            		if (!f.completed && (postCounter < 3) ) {
					            			++postCounter;
						                	return (
						                  		<tr key={f.userName}>
													<td className='postContainer' onClick={this.selectPost.bind(this, f)}>
														<Post postInfo={f}
															  addPlayerPoints={this.addPlayerPoints.bind(this)}
															  processPlayerChoice={this.processPlayerChoice.bind(this)}
															  showPostWindow={true}
                                                              playerName={this.player.getName()}
															  selectImage={this.selectImage.bind(this)}
															  setLikeActive={this.setLikeActive.bind(this)}/>

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
						                  		<tr key={f.userName} style={{backgroundColor: 'lightgrey'}}>
													<td className='postContainer' onClick={this.selectPost.bind(this, f)}>
														<Post postInfo={f}
															  addPlayerPoints={this.addPlayerPoints.bind(this)}
															  processPlayerChoice={this.processPlayerChoice.bind(this)}
															  showPostWindow={true}
															  backgroundColor={'#F0F0F0'}
                                                              playerName={this.player.getName()}
															  selectImage={this.selectImage.bind(this)}
															  setLikeActive={this.setLikeActive.bind(this)}/>
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
				<div className="ruleBox" >
					<p>
					<b>Welcome fellow troll to the Bookface.</b>
					</p>
					<p>
					We are an coalition of trolls bent on trolling the normie residens of the world wide webb for our amusment and we have recruteted you to be a part of this glorious endevour.
					</p>
					<p>
					Your task as a troll is to look at the post of the normies here and comment in a 'trolle' way but be carfull not to me to obvious in your atempts to wreak havoc. 
					</p>
					<p>
					We have modified your Bookface page to keep track of how succeful of a troll you are and how the normies view your action.
					</p>
					<p>
					I writing text
					</p>
				</div>
                {/* Pop out window for selected post */}
				<PostWindow postInfo={this.state.currentPost}
							addPlayerPoints={this.addPlayerPoints.bind(this)}
							processPlayerChoice={this.processPlayerChoice.bind(this)}
							showWindow={this.state.showPostWindow}
							closeWindow={this.closePostWindow.bind(this)}
							playerName={this.player.getName()}/>

				<ImageWindow showWindow={this.state.showImageWindow}
							 srcFile={this.state.currentImage}
							 closeWindow={this.closeImageWindow.bind(this)}/>
            </div>
		);
	}
	
}

export default MainPage;