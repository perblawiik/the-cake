import React, { Component } from 'react';

// Css
import '../../css/BrowserField.css';

class BrowserField extends Component {

	render() {

		const browserText = "https://www.bookface.com/" + this.props.pageInfo;

		const fieldContainer = {
			position: 'absolute', width: '100%', height: '10%', backgroundColor: '#dddddd'
		};

		return (
			<div style={fieldContainer}>
				<img src={require('../../img/browser.png')} alt='x' className='imageStyle'/>
				<div className='textFieldStyle'>
					<p>{browserText}</p>
				</div>
			</div>
		);
	}
}

export default BrowserField;