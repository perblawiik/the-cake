import React, { Component } from 'react';

import '../../css/LoginPage.css';


class LoginPage extends Component {


    readSubmitButton(){

        let name = document.getElementById('playername').value;

        if(name === ''){
            window.alert('Type a user name');
        }
        else
        {
            this.props.createPlayer(name);
            this.props.setGameState(1);
        }
    }

    render() {

        return(
            /*Div with title of page*/
            <div className='mainWindowContainer'>
                <div className = 'topbar'>
                    
                    <img className = 'bookfaceLogo' src = {require('../../img/bookface_logo_white.svg')} alt='logo'/>
                    <p className= 'bookfaceTitle'>
                        Bookface
                    </p>    
                    
                </div>

                {/*Left div box with information to be added */}
                <div className='leftlogin'>
                    left
                </div>

                {/*Right div box with registration for the player*/}
                <div className='rightlogin'>

                    <div className='Blankspace' style={{order: '0'}}>
                    </div>

                    <div className='Line' style={{order: '1'}}>
                        <hr/>
                    </div>

                    <div style={{order: '2'}}>
                        <label>
                            <input id = 'playername' placeholder='User name' type="text" name="name" className='namestyle'/>
                        </label>
                    </div>

                    <div className='Line' style={{order: '3'}}>
                        <hr/>
                    </div>

                    <div className='genderBoxes' style={{order: '4'}}>
                        Gender:
                        <br/>
                        <input type="checkbox"/>YES <br/>
                        <input type="checkbox"/>NO <br/>
                        <input type="checkbox"/>I DON'T KNOW<br/>
                        <input type="checkbox"/>CAN YOU REPEAT THE QUESTION?<br/>
                    </div>

                    <div className='Line' style={{order: '5'}}>
                        <hr/>
                    </div>


                    <button value="Submit" className='substyle' onClick={this.readSubmitButton.bind(this)} style={{order: '6'}}>
                        Submit
                    </button>
                </div>
                </div>
              );
        }
    }

export default LoginPage;