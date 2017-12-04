
import React, { Component } from 'react';

import Audio from './Audio';

class VictoryScreen extends Component {

	componentDidMount() {
		let sound = document.getElementById('victoryClap');
		sound.play();
	}

	render() {

		const winningSrc = require('../../audio/shia_labeouf_clapping.mp3');

		return (
			<div className='gameOverContainer'>
				<Audio idTag={'victoryClap'} srcFile={winningSrc} volume={1}/>
				<p className='gameOverText'>
					CONGRATULATIONS!
				</p>
				<br/>
                <div className='centerDiv'>
                    <div className='gameOverMessage'>
                        <p>
                            You have proven yourself to be a blablablablabla.
                            The coalition of trolls is proud of you blablablabla.
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

export default VictoryScreen;