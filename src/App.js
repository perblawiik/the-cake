import React, { Component } from 'react';

import GameWindow from './js/classes/GameWindow';
import Post from './js/classes/Post';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<h1 style={{fontSize: '52px', color: 'black', textAlign: 'center'}}>Troll Simulator</h1>
        <Post name='Dork Borksson' text='Last christmas I gave you my hearth byt the very next day, you gave it away. This year to save me my tears I will give it to someone special.'/>
      </div>
    );
  }
  
}

export default App;
