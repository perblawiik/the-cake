import React, { Component } from 'react';

import LoginPage from './LoginPage.js';
// Global GameState object
const GameState = {
    LOGIN_PAGE: 0,
    MAIN_PAGE: 1
};

class GameWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gameState: GameState.LOGIN_PAGE
        };
    }

    setGameState(state) {
        this.setState({gameState: state});
    }

    render() {

        const windowStyle = {

            backgroundColor: 'blue',
            position: 'absolute',
            margin: 'auto',
            top: '12.5%',
            left: '12.5%',
            right: '12.5%',
            width: '75%',
            height: '75%'
        };

        const arrowStyle = {
            backgroundColor: 'red',
            position: 'absolute',
            left: '10px',
            top: '10px',
            cursor: 'pointer'
        };

        switch(this.state.gameState) {
            case GameState.LOGIN_PAGE:
                return(<div style={windowStyle}>
                    <LoginPage/>
                    </div>
                );
            case GameState.MAIN_PAGE:
                return (
                    <div style={windowStyle}>
                        <div style={{width: '100%', height: '100%'}}>
                            <img src={require('../../img/left-arrow.png')} alt='x' style={arrowStyle} onClick={this.setGameState.bind(this, GameState.LOGIN_PAGE)}/>
                            <p style={{color: 'white', fontSize: '36px', textAlign: 'center'}}>MAIN PAGE WOOO!!</p>
                        </div>
                    </div>
                );
            default:
                break;
        }
    }

}

export default GameWindow;