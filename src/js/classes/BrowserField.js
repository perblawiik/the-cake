import React, { Component } from 'react';

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
		}

		const textFieldStyle = {
			position: 'absolute', width: '80%', height: '40%', backgroundColor: 'white', bottom: '15%', left: '5%', paddingLeft: '20px'
		}

		const textStyle = {
			margin: '0'
		}

		const imageStyle = {
			position: 'absolute',
			width: '10%',
			height: '35%',
			right: 0,
			cursor: 'pointer'
		}

		// Css style for arrow "button"
        const arrowStyle = {
            backgroundColor: 'red',
            position: 'absolute',
            left: '10px',
            top: '10px',
            cursor: 'pointer'
        };

		return (
			<div style={containerStyle}>
				<img src={require('../../img/left-arrow.png')} alt='x' style={arrowStyle} onClick={this.state.setGameState.bind(this, this.props.otherGameState)}/>
				<img src={require('../../img/browser.png')} alt='x' style={imageStyle}/>
				<div style={textFieldStyle}>
					<p style={textStyle}>{browserText}</p>
				</div>
			</div>
		);
	}
}

export default BrowserField;