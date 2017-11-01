import React, { Component } from 'react';

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

            backgroundColor: '#55986e',
            position: 'absolute',
            margin: 'auto',
            top: '12.5%',
            left: '12.5%',
            right: '12.5%',
            width: '75%',
            height: '75%'
        };

        const arrowStyle = {

            position: 'absolute',
            left: '100px',
            top: '100px',
            cursor: 'pointer'
        };

        switch(this.state.gameState) {
            case GameState.LOGIN_PAGE:
                return(
                    <div style={windowStyle}>
                        <div style={{width: '100%', height: '100%'}}>
                            <img src={require('../../img/right-arrow.png')} alt='x' style={arrowStyle} onClick={this.setGameState.bind(this, GameState.MAIN_PAGE)}/>
                            <p style={{color: 'white', fontSize: '36px', textAlign: 'center'}}>LOG IN PAGE WOOO!!</p>
                        </div>
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