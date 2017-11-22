import React, { Component } from 'react';

// Css
import '../../css/LoginPage.css';

class LoginPage extends Component {

    readSubmitButton(){
        

        let name = document.getElementById('playername').value;

        if(name === ''){
            var msg = new SpeechSynthesisUtterance("EEEEEEE. You need a user name!");
            window.speechSynthesis.speak(msg);
            
            window.alert('Type a user name');

        }
        else
        {
            //EXPERIMENTAL: Read out the users username.s
            var msg = new SpeechSynthesisUtterance(name  + " has logged in.");
            window.speechSynthesis.speak(msg);

            this.props.createPlayer(name);
            this.props.setGameState(1);
        }
    }

    render() {
        var submitClasses;
        if (document.getElementById('playername') === null || document.getElementById('playername').value === '')
        {
            submitClasses = 'substyle, noName';
        }
        else
        {
            submitClasses = 'substyle';
        }

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
                    <h2>
                        Hello and welcome to Bookface!
                    </h2>
                    <img className='welcomePic' src={require('../../img/WelcomePicture.png')} alt='x'/>
                    <h2>
                         You love us. We own you.
                    </h2>
                </div>

                {/*Right div box with registration for the player*/}
                <div className='rightlogin'>

                    <h2 >
                        Create an account
                    </h2>
                


                    <div className = 'inputBox' style={{order: '2'}}>
                        <label>
                            <input id = 'playername' placeholder='User name' type="text" name="name" className='namestyle'/>
                        </label>
                    </div>

                    <button value="Submit" className={'substyle'} onClick={this.readSubmitButton.bind(this)} style={{order: '6'}}>
                        Join Bookface!
                    </button>
                </div>
                </div>
              );
        }
    }

export default LoginPage;