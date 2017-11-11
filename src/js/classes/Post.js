import React, { Component } from 'react';

import '../../css/Post.css';

class Post extends Component {

    render() {
        
        const imageUrl = require('../../img/' + this.props.postInfo.profilePic);

        return(

            <div className='mainWindowPost'>
                {/**/}
                {/* Table 1: Contains information of the post */} 
                <table>
                    <tbody>
                        <tr className='userBar'>
                            <td className='userFaceContainer'>
                                <img className='userFace' src={imageUrl} alt='x'/>
                            </td>
                            <td className='userName'>
                                {this.props.postInfo.userName}
                            </td>
                        </tr>
                        <tr className='textBar'>
                             {/*colspan -> 1 cell spans 2 cells*/}
                            <td colSpan='2' className='postText'>
                                {this.props.postInfo.text}
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/*Table 2: Contains reaction and comment button*/}
                <table>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Post;