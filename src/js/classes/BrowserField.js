import React, { Component } from 'react';

class BrowserField extends Component {

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

		return (
			<div style={containerStyle}>
				<img src={require('../../img/browser.png')} alt='x' style={imageStyle}/>
				<div style={textFieldStyle}>
					<p style={textStyle}>{browserText}</p>
				</div>
			</div>
		);
	}
}

export default BrowserField;