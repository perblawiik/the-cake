import React, { Component } from 'react';

// Javascript classes
import CommentSection from'./CommentSection';

// Css
import '../../css/Post.css';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showComments: false,
        }
    }

    // Switch between true and false
    commentSwitch() {
        // If comments are showing set to false
        if (this.state.showComments) {
            this.setState({showComments: false})
        } // If comments are hidden set to true
        else {
            this.setState({showComments: true})
        }
    }


    showCommentSection () {

        if (this.props.showPostWindow && this.state.showComments) {

            return (
                <div>
                    <CommentSection processPlayerChoice={this.props.processPlayerChoice.bind(this)}
                                    postInfo={this.props.postInfo}
                                    addPlayerPoints={this.props.addPlayerPoints.bind(this)}
                                    playerName={this.props.playerName}/>
                </div>
            );
        }
    }

    render() {
        
        const imageUrl = require('../../img/' + this.props.postInfo.profilePic);

        return(
            <div className='mainWindowPost' style={{backgroundColor: this.props.backgroundColor}}>
                {/**/}
                {/* Table 1: Contains information of the post */} 
                <table>
                    <tbody>
                        <tr className='userBar'>
                            <td className='userFaceContainer'>
                                <img className='userFace' src={imageUrl} alt='x' onClick={this.props.selectImage.bind(this, imageUrl)}/>
                            </td>
                            <td className='userName'>
                                {this.props.postInfo.userName}
                            </td>
                        </tr>
                        <tr className='textBar'>
                             {/*colspan -> 1 cell spans 2 cells*/}
                            <td colSpan='2'>
                                <p className='postText'>
                                    {this.props.postInfo.text}
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/*Table 2: Contains reaction and comment button*/}
                <table>
                    <tbody>
                        <tr className='reactionBar'>
                            <td className='likeButton'>
                                <p style={{cursor: 'pointer'}} onClick={this.props.setLikeActive.bind(this,this.props.postInfo.index,this.props.postInfo.likeActive)}>
                                    {/*Add like button and other reactions*/}
                                    Like
                                    
                                        <img style={{height: this.props.postInfo.likeActive}} className='likeSymbole' src={require('../../img/like.png')} alt='x'/>
                                    
                                 </p>

                            </td>
                            <td className='commentButton'>
                                <p style={{cursor: 'pointer'}} onClick={this.commentSwitch.bind(this)}>
                                    Comment
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* Add post information, a function for adding points and boolean for showing and hiding comments */}
                {   
                    this.showCommentSection()
                }
            </div>
        );
    }
}

export default Post;