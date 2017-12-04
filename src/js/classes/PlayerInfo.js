import React, { Component } from 'react';

// Css
import '../../css/PlayerInfo.css';

// Constant for setting blinking community status bar
const WARNING_TRIGGER = 20;

// Milliseconds per tick
const TICK_MS = 500;

const NUMBER_OF_CHANGES = 6;
const DEFAULT_SIZE = '17px';
const DEFAULT_WEIGHT = 400;

class PlayerInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            comBarColor: 'red',
            intervalId: null,
            intervalId2: null,
            lastLevel: this.props.playerStats.level,
            animationCounter: 0,
            levelFontSize: DEFAULT_SIZE,
            levelFontWeight: DEFAULT_WEIGHT
        };
    }

    switchCommunityBarColors () {

        // Switch between color red and white
        if(this.state.comBarColor === 'red') {
            this.setState({comBarColor: 'white'});
        }
        else {
            this.setState({comBarColor: 'red'});
        }
    }

    changeLevelUpSize() {

        if (this.state.animationCounter < NUMBER_OF_CHANGES) {

            if (this.state.levelFontSize === DEFAULT_SIZE) {
                this.setState({
                    levelFontSize: '20px',
                    levelFontWeight: 700
                });
            }
            else {
                this.setState({
                    levelFontSize: DEFAULT_SIZE,
                    levelFontWeight: DEFAULT_WEIGHT
                });
            }

            this.setState({animationCounter: this.state.animationCounter + 1});
        }
        else {
            clearInterval(this.state.intervalId2);
            this.setState({
                intervalId2: null,
                animationCounter: 0,
                levelFontSize: '17px',
                levelFontWeight: DEFAULT_WEIGHT
            });
        }
    }

    communityBarWarning () {
        // Check if community points is lower than WARNING_TRIGGER
        if (this.props.playerStats.comPoints <= WARNING_TRIGGER && this.props.playerStats.comPoints > 0) {

            // If no interval is active, activate it
            if (!this.state.intervalId) {
                // Call the animate function in a frequency based on const TICK_MS
                let id = setInterval(this.switchCommunityBarColors.bind(this), TICK_MS);
                this.setState({intervalId: id});
            }
        }
        else {
            // If there is an active interval, but the community point is higher than WARNING_TRIGGER
            // Deactivate interval.
            if (this.state.intervalId) {
                // Clear the interval
                clearInterval(this.state.intervalId);
                this.setState({intervalId: null});
            }
        }
    }

    levelUpEvent() {

        if (this.state.lastLevel < this.props.playerStats.level) {
            // Play level up sound
            let sound = document.getElementById("levelUpSound");
            sound.play();

            // Set animation effect
            if (!this.state.intervalId2) {
                let id = setInterval(this.changeLevelUpSize.bind(this), TICK_MS);
                this.setState({intervalId2: id});
            }

            // Update to current level
            this.setState({lastLevel: this.props.playerStats.level});
        }
    }

    componentDidUpdate() {

        this.communityBarWarning();

        this.levelUpEvent();
    }

    componentWillUnmount() {

        // Clear the intervals
        clearInterval(this.state.intervalId);
        clearInterval(this.state.intervalId2);
        this.setState({
            intervalId: null,
            intervalId2: null
        });
    }

    render() {

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

                <div className='profilePicContainer'>
                    <img className = 'profilePic' src={this.props.playerStats.imgUrl} alt='logo'/>
                </div>

                <p className='playerName'>
                    {this.props.playerStats.name}
                </p>

                <div style={{height: '30px'}}>
                    <p style={{fontSize: this.state.levelFontSize, fontWeight: this.state.levelFontWeight, transition: 'font-size .6s, font-weight 1s'}}>
                        Level: {this.props.playerStats.level}
                    </p>
                </div>
                <p>
                    Troll Points: {this.props.playerStats.trollPoints+10*this.props.playerStats.level-10} / {10*this.props.playerStats.level}
                </p>
                <div className = 'barContainer'>
                    <div className = 'trollBar' style={{width: trollBarLength}}>
                    </div>
                </div>
                <p>
                    Community Status: {this.props.playerStats.comPoints} / 100
                </p>
                <div className = 'barContainer'>
                    <div className = 'communityStatus' style={{width: communityBarLength, backgroundColor: this.communityBarColor}}>
                    </div>
                </div>
                {/*
                <button onClick={this.addPoints.bind(this, 1, 0)}>Add Troll Points</button>
                <br/>
                <button onClick={this.addPoints.bind(this, 0, 5)}>Add Community Points</button>
                <br/>
                <button onClick={this.addPoints.bind(this, 0, -20)}>Subtract Community Points</button>*/}
            </div>
        );
    }
}

export default PlayerInfo;