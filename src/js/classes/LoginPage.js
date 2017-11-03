import React, { Component } from 'react';


class LoginPage extends Component {
  render() {
const topbar = {
            backgroundColor: 'red',
            position: 'absolute',
            width: '100%',
            height: '10%',
            cursor: 'pointer',
            fontSize: '40px',
            textIndent: '10%'
        };

        const leftlogin = {
            backgroundColor: 'pink',
            position: 'absolute',
            left: '10%',
            bottom: '5%',
            width: '37%',
            height: '80%',
            cursor: 'pointer'
        };

        const rightlogin = {
            backgroundColor: 'cyan',
            position: 'absolute',
            right: '10%',
            bottom: '5%',
            width: '37%',
            height: '80%',
            cursor: 'pointer'
        };

        const substyle = {
            position: 'absolute',
            bottom: '5%',
            margin: 'center'
        };

        const namestyle = {
            position: 'absolute',
            top: '10%',
            margin: 'center'
        };

        const dropbtn = {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '16px',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer'
        };

        const dropdown = {
            position: 'relative',
            display: 'inlineBlock'
        };

        const dropdownContent = {
            display: 'none',
            position: 'absolute',
            backgroundColor: '#f9f9f9',
            minWidth: '160px',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            zIndex: '1'
        }


		return(
			<div style={{position: 'absolute', width: '100%', height: '90%', top: '10%'}}>
              	<div style={topbar}>
                    Bookface
               	</div>

                <div style={leftlogin}>
                   	left
                </div>
                <div style={rightlogin}>
                    right
					<div style={{padding: '20%'}}>
                        <form style={{ margin:'0 auto',textalign:'center'}}>
                            <label>
                                <input type="text" name="name" style={namestyle}/>
                            </label>
                            <div class="dropdown">
                                <button onclick"dropDownFunction()" class="dropbtn">Dropdown</button>
                                <div id="dropDownID" class="dropDownContent">
                                    <a>No</a>
                                    <a>Yes</a>
                                </div>
                            </div>
							<input type="submit" value="Submit" style={substyle} />
                        </form>
                    </div>           
                </div>
                </div>
              );

		}

	}

export default LoginPage;