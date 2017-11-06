import React, { Component } from 'react';

import Post from './Post';

import postInfo from '../../json/posts.json'

class MainPage extends Component {

	render () {

		const windowStyle = {
            backgroundColor: 'white',
            position: 'absolute',
            margin: 'auto',
            top: '12.5%',
            left: '12.5%',
            right: '12.5%',
            width: '400px',

        };

        const tableStyle = {

        	maring: 0,
        	padding: 0,
        	overflow: 'hidden', 
        	overflowY: 'scroll',
        	display: 'block',
        	height: '400px',
        	border: '1px solid black'
        }

		return (
			<div style={{width: '100%', height: '100%'}}>
				<div style={windowStyle}>
					<thead>
						<tbody style={tableStyle}>
							<tr>
								<td>
									<Post name='Dork Borksson' text='Last christmas I gave you my hearth byt the very next day, you gave it away. This year to save me my tears I will give it to someone special.'/>  
								</td>
							</tr>
							<tr>
								<td>
									<Post name='Dork Borksson' text='Last christmas I gave you my hearth byt the very next day, you gave it away. This year to save me my tears I will give it to someone special.'/>  
								</td>
							</tr>
							<tr>
								<td>
									<Post name='Dork Borksson' text='Last christmas I gave you my hearth byt the very next day, you gave it away. This year to save me my tears I will give it to someone special.'/>  
								</td>
							</tr>
						</tbody>
					</thead>
				</div>
            </div>
		);
	}
	
}

export default MainPage;