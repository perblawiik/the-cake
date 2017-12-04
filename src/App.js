import React, { Component } from 'react';

import GameWindow from './js/classes/GameWindow';

import Audio from './js/classes/Audio'

import './css/App.css';

class App extends Component {

    render() {

        const lvlUpSrc = require('./audio/trololol.mp3');
        const sendSrc = require('./audio/blupp.mp3');
        const recieveSrc = require('./audio/recieve.mp3');

        return (
            <div>
                <Audio idTag={'levelUpSound'} srcFile={lvlUpSrc} volume={0.5}/>
                <Audio idTag={'sendSound'} srcFile={sendSrc} volume={0.5}/>
                <Audio idTag={'recieveSound'} srcFile={recieveSrc} volume={0.5}/>
                <h1 className='titleStyle'>Troll Simulator</h1>
                <GameWindow/>
            </div>
        );
    }
}

export default App;
