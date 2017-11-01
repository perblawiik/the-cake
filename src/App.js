import React, { Component } from 'react';

import GameWindow from './js/classes/GameWindow';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<h1 style={{fontSize: '52px', color: 'black', textAlign: 'center'}}>Troll Simulator</h1>
        <GameWindow/>
      </div>
    );
  }
  
}

export default App;
