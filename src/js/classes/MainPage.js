import React, { Component } from 'react';

import Post from './Post';

import postInfo from '../../json/posts.json'

import CommentSection from'./CommentSection';

import PlayerInfo from'./PlayerInfo';

class MainPage extends Component {

	render () {

		const newsFlowInner = {
            backgroundColor: 'white',
            position: 'absolute',
            margin: 'auto',
            top: 0,
			bottom: '5%',
            width: '450px',
            overflowY: 'scroll'
        };

        const newsFlowOuter = {
            position: 'absolute',
            margin: 'auto',
            top: '12.5%',
            bottom: '5%',
            left: '12.5%',
            right: '12.5%',
            width: '412px',
            overflow: 'hidden'
        };

        const tableStyle = {
        	margin: 0,
        	padding: 0,
        	display: 'block',
        };

		return (
			<div style={{width: '100%', height: '100%'}}>
				<PlayerInfo player={this.props.player}/>
				<div style={newsFlowOuter}>
					<div style={newsFlowInner}>
						<thead>
							<tbody style={tableStyle}>
								<tr>
									<td style={{border:'1px solid black'}}>
										<Post postInfo={postInfo.lvl01.p01}/>
									</td>
								</tr>
								<tr>
									<td>
										<CommentSection postInfo={postInfo.lvl01.p01}/>
									</td>
								</tr>
								<tr>
									<td style={{border:'1px solid black'}}>
										<Post postInfo={postInfo.lvl01.p01}/>
									</td>
								</tr>
								<tr>
									<td style={{border:'1px solid black'}}>
										<Post postInfo={postInfo.lvl01.p01}/>
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