import React, { Component } from 'react';

// Css
import '../../css/BrowserField.css';

class BrowserField extends Component {

	constructor(props) {
		super(props);
		this.state = {
			setGameState: this.props.setGameState
		}
	}

	render() {

		const browserText = "https://www.bookface.com/" + this.props.pageInfo;

		const containerStyle = {
			position: 'absolute', width: '100%', height: '10%', backgroundColor: '#dddddd'
		};

		return (
			<div style={containerStyle}>
				<img src={require('../../img/left-arrow.png')} alt='x' className='arrowStyle' onClick={this.state.setGameState.bind(this, this.props.otherGameState)}/>
				<img src={require('../../img/browser.png')} alt='x' className='imageStyle'/>
				<div className='textFieldStyle'>
					<p>{browserText}</p>
				</div>
			</div>
		);
	}
}

export default BrowserField;