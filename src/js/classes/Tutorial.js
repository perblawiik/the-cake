import React, { Component } from 'react';

import '../../css/Tutorial.css';

class Tutorial extends Component {

    render() {

        return (
            <div className= 'tutorialDiv'>
                <div className = 'anonymousPicture'>
                    <p style={{marginTop: '20%', fontSize: '76px', textAlign: 'center'}}>
                        PICTURE
                    </p>
                    <div className = 'youKnowStuff'>
                        <p style={{marginTop: '20%', fontSize: '76px', textAlign: 'center'}}>
                            GAME OVER LOSER !
                        </p>
                    </div>
                </div>

            </div>

        );
    }
}

export default Tutorial;