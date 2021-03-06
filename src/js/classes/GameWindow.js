import React, { Component } from 'react';

// Javascript classes
import LoginPage from './LoginPage.js';
import BrowserField from './BrowserField';
import MainPage from './MainPage';
import Player from './Player';
import GameOver from './GameOver';
import Tutorial from './Tutorial';
import VictoryScreen from './VictoryScreen';

// Css
import '../../css/GameWindow.css';

// Global GameState object. Used for setting return value in GameWindow class
const GameState = {
    LOGIN_PAGE: 0,
    MAIN_PAGE: 1,
    GAME_OVER: 2,
    TUTORIAL: 3,
    VICTORY_SCREEN: 4
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
        // Initiate the player as null
        this.player = null;
    }

    // Class member function for setting game state
    setGameState(state) {
        // this.setState() is a function inherited from Component
        this.setState({gameState: state});
    }

    createPlayer(name) {
        if (!this.player) {
            this.player = new Player(name);
        }
    }

    resetGame() {
        this.player = null;
        this.setGameState(GameState.LOGIN_PAGE);
    }

    render() {
        // Switch statement for game state ( If LOGIN -> return the login page, If MAIN -> return the main page )
        switch(this.state.gameState) {
            case GameState.LOGIN_PAGE:
                return(
                    <div className='windowStyle'>
                        <BrowserField pageInfo={''}/>
                        <LoginPage createPlayer={this.createPlayer.bind(this)} setGameState={this.setGameState.bind(this)}/>
                    </div>
                );
            case GameState.MAIN_PAGE:
                return (
                    <div className='windowStyle'>
                        <BrowserField pageInfo={'main'}/>
                        <MainPage player={this.player} setGameState={this.setGameState.bind(this)}/>
                    </div>
                );
            case GameState.GAME_OVER:
                return (
                    <div className='windowStyle'>
                        <BrowserField pageInfo={'game-over'}/>
                        <GameOver resetGame={this.resetGame.bind(this)}/>
                    </div>
                );
            case GameState.TUTORIAL:
                return (
                    <div className='windowStyle'>
                        <BrowserField pageInfo={'we-have-taken-over'}/>
                        <Tutorial setGameState={this.setGameState.bind(this)} mainPage={GameState.MAIN_PAGE}/>
                    </div>
                );
            case GameState.VICTORY_SCREEN:
                return (
                    <div className='windowStyle'>
                        <BrowserField pageInfo={'you-have-won'}/>
                        <VictoryScreen resetGame={this.resetGame.bind(this)}/>
                    </div>
                );
            default:
                break;
        }
    }
}

export default GameWindow;