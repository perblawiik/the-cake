import React, { Component } from 'react';

// Css
import '../../css/PlayerInfo.css';

class PlayerInfo extends Component {

	addPoints(trollP, commP) {
		this.props.addPlayerPoints(trollP, commP);
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
				<p> Name: {this.props.playerStats.name} </p>
				<p> Level: {this.props.playerStats.level} </p>
				<p> Troll Points: {this.props.playerStats.trollPoints} </p>
				<p> Community Points: {this.props.playerStats.comPoints} </p>
				<button onClick={this.addPoints.bind(this, 1, 0)}>Add Troll Points</button>
				<button onClick={this.addPoints.bind(this, 0, 1)}>Add Community Points</button>
			</div>
		);
	}
}

export default PlayerInfo;