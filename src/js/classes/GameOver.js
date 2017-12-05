import React, { Component } from 'react';

import Audio from './Audio';

// Css
import '../../css/GameOver.css';

class GameOver extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'rgba(255,0,0,0.2)',
            intervalId: null
        }
    }

    animate () {

        if (this.state.color === 'rgba(255,0,0,0.75)') {
            this.setState({
               color: 'rgba(255,0,0,0.2)'
            });
        }
        else { // Color is none, change to red
            this.setState({
                color: 'rgba(255,0,0,0.75)'
            });
        }
    }

    componentDidMount() {
        let id = setInterval(this.animate.bind(this), 1500);
        this.setState({
            intervalId: id
        });

        let sound = document.getElementById('gameOverSound');
        sound.play();
    }

    componentWillUnmount () {
        clearInterval(this.state.intervalId);
        this.setState({
            intervalId: null
        });
    }

	render() {

        const losingSrc = require('../../audio/wah_wah_wah.mp3');

		return (
			<div className='gameOverContainer' style={{backgroundColor: this.state.color}}>
                <Audio idTag={'gameOverSound'} srcFile={losingSrc} volume={.5}/>
				<p className='gameOverText'>
					GAME OVER LOSER !
				</p>
				<br/>
                <div className='centerDiv'>
                    <div className='gameOverMessage'>
                        <p>
                            Your reckless behaviour and distasteful comments has united the bookface community against you.
                            The admins have therefore used their almighty authority to ban your account forever.
                        </p>
                    </div>
                </div>
				<div className='centerDiv'>
					<div>
						<button className='retryStyle' onClick={this.props.resetGame.bind(this)}>
							Play Again!
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default GameOver;