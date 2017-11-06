import React, { Component } from 'react';

import Post from './Post';

// Import classes
import LoginPage from './LoginPage.js';
import BrowserField from './BrowserField';

// Global GameState object. Used for setting return value in GameWindow class
const GameState = {
    LOGIN_PAGE: 0,
    MAIN_PAGE: 1
};

class GameWindow extends Component {

    constructor(props) {
        // Call constructor for super class (Component)
        super(props); 
        // Initialize state object (this.state is inherited from Component)
        // OBS! You can create any variable that you need in this object.
        this.state = {
            // gameState is set to LOGIN_PAGE by default (always start game on the Login Page)
            gameState: GameState.LOGIN_PAGE
        };
    }

    // Class member function for setting game state
    setGameState(state) {
        // this.setState() is a function inherited from Component
        this.setState({gameState: state});
    }


    render() {

        // Css style for the game window
        const windowStyle = {
            backgroundColor: '#3b5998',
            position: 'absolute',
            margin: 'auto',
            top: '12.5%',
            left: '12.5%',
            right: '12.5%',
            width: '75%',
            height: '75%'
        };

        // Switch statement for game state ( If LOGIN -> return the login page, If MAIN -> return the main page )
        switch(this.state.gameState) {
            case GameState.LOGIN_PAGE:

                return(
                    <div style={windowStyle}>
                        <BrowserField pageInfo={''} setGameState={this.setGameState.bind(this)} otherGameState={GameState.MAIN_PAGE} />
                        <LoginPage/>
                    </div>
                );
            case GameState.MAIN_PAGE:
                return (
                    <div style={windowStyle}>
                        <BrowserField pageInfo={'home'} setGameState={this.setGameState.bind(this)} otherGameState={GameState.LOGIN_PAGE} />
                        <div style={{width: '100%', height: '100%'}}>
                            <p style={{color: 'white', fontSize: '36px', textAlign: 'center'}}>MAIN PAGE WOOO!!</p>
                            <Post name='Dork Borksson' text='Last christmas I gave you my hearth byt the very next day, you gave it away. This year to save me my tears I will give it to someone special.'/>  
                        </div>
                    </div>
                );
            default:
                break;
        }
    }

}

export default GameWindow;