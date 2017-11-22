import React, { Component } from 'react';

// Css
import '../../css/PlayerInfo.css';

class PlayerInfo extends Component {

    addPoints(trollP, commP) {
        this.props.addPlayerPoints(trollP, commP);
    }

    render() {

        const playerImageUrl = require('../../img/troll.png');

        // Set bar length based on troll points and community points
        const trollBarLength = this.props.playerStats.trollPoints * 10 + '%';
        const communityBarLength = this.props.playerStats.comPoints + '%';

        // Lower the color code value based on community points
        const colorValue = Math.round( 235 * (this.props.playerStats.comPoints / 100) );
        const communityBarColor = 'rgb(255,' + colorValue + ',' + colorValue + ')';

        return(
            <div className='playerInfoContainer'>
                <table>
                    <tr>
                        <td>
                            <div className = 'blank'></div>
                        </td>
                        <td>
                            <img className = 'profilePic' src={playerImageUrl} alt='logo'/>
                        </td>
                        <td>
                        </td>
                    </tr>
                </table>
                <p className='playerName'> {this.props.playerStats.name} </p>
                <p> Level: {this.props.playerStats.level} </p>
                <p> Troll Points: {this.props.playerStats.trollPoints} </p>
                <div className = 'barContainer'>
                    <div className = 'trollBar' style={{width: trollBarLength}}>
                    </div>
                </div>
                <p> Community Status: {this.props.playerStats.comPoints} </p>
                <div className = 'barContainer'>
                    <div className = 'communityStatus' style={{width: communityBarLength, backgroundColor: communityBarColor}}>
                    </div>
                </div>
                <button onClick={this.addPoints.bind(this, 1, 0)}>Add Troll Points</button>
                <br/>
                <button onClick={this.addPoints.bind(this, 0, 5)}>Add Community Points</button>
                <br/>
                <button onClick={this.addPoints.bind(this, 0, -5)}>Subtract Community Points</button>
            </div>
        );
    }
}

export default PlayerInfo;