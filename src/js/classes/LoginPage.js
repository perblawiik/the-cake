import React, { Component } from 'react';

// Css
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
                    <table className = 'bookfaceTable'>
                        <tr className = 'bookfaceTable'>
                            <td className = 'bookfaceTable'> <p className= 'bookfaceTitle'>Bookface</p> </td>
                            <td className = 'bookfaceTable'> <img className = 'bookfaceLogo' src = {require('../../img/bookface_logo_white.svg')} alt='logo'/> </td>
                        </tr>
                    </table>

                </div>

                {/*Left div box with information to be added */}
                <div className='leftlogin'>
                    <img className='welcomePic' src={require('../../img/ms Mom.png')} alt='x'/>
                    <p>
                        Hello and welcome to Bookface! And you love us. We own you.
                    </p>
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

                    <button value="Submit" className={submitClasses} onClick={this.readSubmitButton.bind(this)} style={{order: '6'}}>
                        Join Bookface!
                    </button>
                </div>
                </div>
              );
        }
    }

export default LoginPage;