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


		return(
			<div>
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
							<input type="submit" value="Submit" style={substyle} />
                        </form>
                    </div>           
                </div>
                </div>
              );

		}

	}

export default LoginPage;