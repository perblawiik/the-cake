
import React, { Component } from 'react';

class VictoryScreen extends Component {

	render() {

		return (
			<div className='gameOverContainer'>
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