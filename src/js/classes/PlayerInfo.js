import React, { Component } from 'react';

// Css
import '../../css/PlayerInfo.css';

class PlayerInfo extends Component {

	addPoints(trollP, commP) {
		this.props.addPlayerPoints(trollP, commP);
	}

	render() {


		return(
			<div className='containerStyle'>
				<table>
					<tr>
						<td>
						</td>
						<td>
							<img className = 'bookfaceLogo' src = {require('../../img/bookface_logo_white.svg')} alt='logo'/>
						</td>
						<td>
						</td>
					</tr>
				</table>
				<p className='playerName'> {this.props.playerStats.name} </p>
				<p> Level: {this.props.playerStats.level} </p>
				<p> Troll Points: {this.props.playerStats.trollPoints} </p>
				<div className = 'container'>
					<div className = 'trollBar'>
					</div>
				</div>
				<p> Community Points: {this.props.playerStats.comPoints} </p>
				<button onClick={this.addPoints.bind(this, 1, 0)}>Add Troll Points</button>
				<button onClick={this.addPoints.bind(this, 0, 1)}>Add Community Points</button>
			</div>
		);
	}
}

export default PlayerInfo;