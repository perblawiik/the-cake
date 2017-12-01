import React, { Component } from 'react';

import GameWindow from './js/classes/GameWindow';

import './css/App.css';

class App extends Component {

  render() {

    return (
      <div>
      	<h1 className='titleStyle'>Troll Simulator</h1>
        <GameWindow/>
      </div>
    );
  }
  
}

export default App;
