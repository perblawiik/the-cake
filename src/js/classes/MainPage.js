import React, { Component } from 'react';

import Post from './Post';

import postInformation from '../../json/posts.json'

import PlayerInfo from'./PlayerInfo';

class MainPage extends Component {

	constructor(props) {
		super(props);
		this.state ={
            trollPoints: props.player.getTrollPoints(),
            comPoints: props.player.getCommunityPoints(),
            playerLevel: props.player.getLevel()
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

        // Player level 1
        let postInfo = postInformation.lvl01;

        // Change postInfo when player level change
        // switch (this.state.playerLevel) {
		// 	case 1:
		// 		postInfo = postInformation.lvl01;
		// 		break;
		// 	case 2:
         //        postInfo = postInformation.lvl02;
         //        break;
		// 	case 3:
		// 		postInfo = postInformation.lvl03;
		// 		break;
		// 	case 4:
		// 		postInfo = postInformation.lvl04;
		// 		break;
		// 	default:
		// 		break;
		// }

		return (
			<div style={{width: '100%', height: '100%'}}>
				<PlayerInfo playerStats={playerStats} addPlayerPoints={this.addPlayerPoints.bind(this)}/>
				<div style={newsFlowOuter}>
					<div style={newsFlowInner}>
						<table>
							<tbody style={tableStyle}>
								<tr>
									<td style={{border:'1px solid black'}}>
										{/* First post (p01) */}
										<Post postInfo={postInfo.p01} addPlayerPoints={this.addPlayerPoints.bind(this)}/>
									</td>
								</tr>
								<tr>
									<td style={{border:'1px solid black'}}>
										{/* This should be post 2 (p02) */}
										<Post postInfo={postInfo.p01} addPlayerPoints={this.addPlayerPoints.bind(this)}/>
									</td>
								</tr>
								<tr>
									<td style={{border:'1px solid black'}}>
                                        {/* This should be post 3 (p03) */}
										<Post postInfo={postInfo.p01} addPlayerPoints={this.addPlayerPoints.bind(this)}/>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
            </div>
		);
	}
	
}

export default MainPage;