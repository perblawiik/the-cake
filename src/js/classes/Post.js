import React, { Component } from 'react';

import '../../css/Post.css';

// Global GameState object
const GameState = {
    LOGIN_PAGE: 0,
    MAIN_PAGE: 1
};

class Post extends Component {

    constructor(props){
        super(props);
        this.state = {
            gameState: GameState.MAIN_PAGE
        };


    }

    render() {
        
        const imageUrl = require('../../img/' + this.props.name + '.png');

        return(

            <div className='mainWindowPost'>
                {/**/}
                {/* Table 1: Contains information of the post */} 
                <table >
                    <tr className='userBar'>
                        <td className='userFaceContainer'> 
                            <img className='userFace' src={imageUrl} alt='x'/>
                        </td>
                        <td className='userName'> 
                            {this.props.name}
                        </td>
                    </tr>

                    <tr className='textBar'>
                         {/*colspan -> 1 cell spans 2 cells*/}
                        <td colspan='2' className='postText'>
                            {this.props.text}
                        </td>
                    </tr>

                </table>

                {/*Table 2: Contains reaction and comment button*/}
                <table>
                    <tr className='reactionBar'>
                        <td className='likeButton'>
                            <p>
                                {/*Add like button and other reactions*/}
                                Like 
                             </p>
                        </td>
                        <td className='commentButton'>
                            <p> 
                                {/*Add clickabillity*/}
                                Comment 
                            </p>
                        </td>
                    </tr>
                </table>
            </div>

            );
    }
}

export default Post;