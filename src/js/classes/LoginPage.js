import React, { Component } from 'react';

// Css
import '../../css/LoginPage.css';

class LoginPage extends Component {

    constructor(props){
        super(props);
        this.state = {welcomePic: require('../../img/WelcomePicture.png')};
    }    
    readSubmitButton(){

        let name = document.getElementById('playername').value;
        if(name === ''){
            this.setState({welcomePic: require('../../img/WelcomePicture_2.png')});
        }
        else
        {
            this.props.createPlayer(name);
            this.props.setGameState(3);
        }
    }
    _handleKeyPress(target) {
        //If enter is pressed.
        if (target.charCode === 13) {
            document.getElementById('theButton').click();
        }
        else 
        {

        }
    }

    render() {
        return(
            /*Div with title of page*/
            <div className='mainWindowContainer'>
                <div className = 'topbar'>
                    <table className = 'bookfaceTable'>
                        <tbody>
                            <tr className = 'bookfaceTable'>
                                <td className = 'bookfaceTable'> <p className= 'bookfaceTitle'>Bookface</p> </td>
                                <td className = 'bookfaceTable'> <img className = 'bookfaceLogo' src = {require('../../img/bookface_logo_white.svg')} alt='logo'/> </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/*Left div box with information to be added */}
                <div className='leftlogin'>
                    <h2>
                        Hello and welcome to Bookface!
                    </h2>
                    <img className='welcomePic' src={this.state.welcomePic} alt='x'/>
                    <h2>
                         You love us. We own you.
                    </h2>
                </div>

                {/*Right div box with registration for the player*/}
                <div className='rightlogin'>

                    <h2>
                        Create an account
                    </h2>

                    <div className = 'inputBox' style={{order: '2'}}>
                        <label>
                            <input id = 'playername' placeholder='User name' type="text" name="name" className='namestyle' onKeyPress={this._handleKeyPress} maxLength='12' />
                        </label>
                    </div>

                    <button id= 'theButton' value='Submit' className={'substyle'} onClick={this.readSubmitButton.bind(this)} style={{order: '6'}}>
                        Join Bookface!
                    </button>
                </div>
                </div>
              );
        }
     
  }

    

export default LoginPage;