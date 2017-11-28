import React, { Component } from 'react';

// Css
import '../../css/GameOver.css';

class GameOver extends Component {

	render() {

		return (
			<div>
				<p style={{marginTop: '20%', fontSize: '76px', textAlign: 'center'}}>
					GAME OVER LOSER !
				</p>
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