import React, { Component } from 'react';

import '../../css/LoginPage.css';


class LoginPage extends Component {




readSubmitButton(){

    let name = document.getElementById('playername').value;


    if(name === ''){
        console.log('ERROR');
    }
    else
    {
        this.props.createPlayer(name);
        this.props.setGameState(1);
        console.log(name);
    }
    
}



  render() {

/*const topbar = {
            backgroundColor: 'red',
            position: 'absolute',
            width: '100%',
            height: '10%',
            cursor: 'pointer',
            fontSize: '40px',
            textIndent: '10%'
        };
*/
       const leftlogin = {
            backgroundColor: 'pink',
            position: 'absolute',
            left: '10%',
            bottom: '5%',
            width: '37%',
            height: '80%',
        };

        const rightlogin = {
            backgroundColor: 'cyan',
            position: 'absolute',
            right: '10%',
            bottom: '5%',
            width: '37%',
            height: '80%',
        };
/* 
        const substyle = {
            position: 'absolute',
            bottom: '5%',
            margin: 'center'
        };

        const namestyle = {
            position: 'absolute',
            top: '10%',
            margin: 'center'
        };*/

        

		return(


            /*Div with title of page*/            
			<div style={{position: 'absolute', width: '100%', height: '90%', top: '10%'}}>
              	<div className = 'topbar'>
                    Bookface
               	</div>

               {/* <div className='leftlogin'>
                    left
                </div>*/}

                /*Left div box with information to be added*/ 

                <div style={leftlogin}>
                   	left
                </div>


                /*Right div box with registration for the player*/ 

                {/*<div className='rightlogin'>*/}

                <div style={rightlogin}>
                    right
					<div style={{padding: '20%'}}>
                        <div style={{ margin:'0 auto',textalign:'center'}}>
                            <label>
                                <input id = 'playername' placeholder='Username' type="text" name="name" className='namestyle'/>
                            </label>

                            <div>
                                <hr/>
                                Gender:
                                <br/>
                                <input type="checkbox"/>YES <br/>
                                <input type="checkbox"/>NO <br/>
                                <hr/>
                            </div>

							<button value="Submit" className='substyle' onClick={this.readSubmitButton.bind(this)}>

                            Submit
                            </button>
                        </div>
                    </div>           
                </div>
                </div>
              );

		}

	}

export default LoginPage;