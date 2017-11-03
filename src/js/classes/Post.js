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
        return(

                <table className='mainWindowPost'>
                
                    <tr className='userBar'>
                        <th> 
                            <img className='userFace' src={require('../../img/' + this.props.name + '.png')}/>
                        </th>
                        <th className='userName'> 
                            {this.props.name}
                        </th>
                    </tr>

                    <tr className='textBar'>
                        <th className='postText'>
                            {this.props.text}
                        </th>
                    </tr>

                    <tr className='reactionBar'>
                        <th className='likeButton'>
                            <p> Like! </p>
                        </th>
                        <th className='commentButton'>
                            <p> Comment! </p>
                        </th>
                    </tr>

                </table>
            );
    }
}

export default Post;