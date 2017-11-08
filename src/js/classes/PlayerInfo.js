import React, { Component } from 'react';

class PlayerInfo extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			trollPoints: props.player.getTrollPoints(),
			comPoints: props.player.getCommunityPoints(),
			playerLevel: props.player.getLevel()
		}
		this.player = props.player;
	}

	addTrollPoints() {
		this.player.addPoints(1,0);
		this.setState({
			trollPoints: this.player.getTrollPoints(),
			playerLevel: this.player.getLevel()
		});
	}

	addCommPoints() {
		this.player.addPoints(0,1);
		this.setState({
			comPoints: this.player.getCommunityPoints()
		});
	}

	render() {

		const containerStyle = {
			position: 'absolute',
			backgroundColor: 'white',
			width: '20%',
			left: '5%',
			top: '12.5%',
            bottom: '25%',
            border: '1px solid black'
		};

		return(
			<div style={containerStyle}>
				<p> Name: {this.player.getName()} </p>
				<p> Level: {this.state.playerLevel} </p>
				<p> Troll Points: {this.state.trollPoints} </p>
				<p> Community Points: {this.state.comPoints} </p>
				<button onClick={this.addTrollPoints.bind(this)}>Add Troll Points</button>
				<button onClick={this.addCommPoints.bind(this)}>Add Community Points</button>
			</div>
		);
	}
}

export default PlayerInfo;