import React, { Component } from 'react';

// Css
import '../../css/PlayerInfo.css';

// Constant for setting blinking community status bar
const WARNING_TRIGGER = 20;

class PlayerInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comBarColor: 'red'
        }
    }

    addPoints(trollP, commP) {
        this.props.addPlayerPoints(trollP, commP);
    }

    tick () {

        // Do nothing if community status is above 20 (WARNING_TRIGGER)
        if (this.props.playerStats.comPoints <= WARNING_TRIGGER) {
            if(this.state.comBarColor === 'red') {
                this.setState({comBarColor: 'white'});
            }
            else {
                this.setState({comBarColor: 'red'});
            }
        }
    }

    componentDidMount () {

        // Call the tick function every 500 ms
        this.intervalId = setInterval(this.tick.bind(this), 500);
    }

    render() {

        const playerImageUrl = require('../../img/troll.png');

        // Set bar length based on troll points and community points
        const trollBarLength = this.props.playerStats.trollPoints * 10 + '%';
        const communityBarLength = this.props.playerStats.comPoints + '%';

        // Lower the color code value based on community points
        const colorValue = Math.round( 235 * (this.props.playerStats.comPoints / 100) );

        if (this.props.playerStats.comPoints > WARNING_TRIGGER) {
            this.communityBarColor = 'rgb(255,' + colorValue + ',' + colorValue + ')';
        }
        else {
            // If comPoints is equal to or smaller than 20 the bar will blink
            this.communityBarColor = this.state.comBarColor;
        }

        return(
            <div className='playerInfoContainer'>
                <table>
                    <tbody>
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
                    </tbody>
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
                    <div className = 'communityStatus' style={{width: communityBarLength, backgroundColor: this.communityBarColor}}>
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