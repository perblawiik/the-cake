import React, { Component } from 'react';

import Post from './Post';

import postInfo from '../../json/posts.json'

class MainPage extends Component {

	render () {

		const newsFlowInner = {
            backgroundColor: 'white',
            position: 'absolute',
            margin: 'auto',
            top: 0,
			bottom: '5%',
            width: '450px',
            overflow: 'hidden',
            overflowY: 'scroll'
        };

        const newsFlowOuter = {
            position: 'absolute',
            margin: 'auto',
            top: '12.5%',
            bottom: '5%',
            left: '12.5%',
            right: '12.5%',
            width: '414px',
            overflow: 'hidden'
        };

        const tableStyle = {
        	margin: 0,
        	padding: 0,
        	display: 'block',
        	border: '1px solid black'
        };

		return (
			<div style={{width: '100%', height: '100%'}}>
				<div style={newsFlowOuter}>
					<div style={newsFlowInner}>
						<thead>
							<tbody style={tableStyle}>
								<tr>
									<td style={{border:'1px solid black'}}>
										<Post name={postInfo.lvl01.p01.userName} text={postInfo.lvl01.p01.text}/>
									</td>
								</tr>
								<tr>
									<td style={{border:'1px solid black'}}>
										<Post name={postInfo.lvl01.p01.userName} text={postInfo.lvl01.p01.text}/>
									</td>
								</tr>
								<tr>
									<td style={{border:'1px solid black'}}>
										<Post name={postInfo.lvl01.p01.userName} text={postInfo.lvl01.p01.text}/>
									</td>
								</tr>
							</tbody>
						</thead>
					</div>
				</div>
            </div>
		);
	}
	
}

export default MainPage;