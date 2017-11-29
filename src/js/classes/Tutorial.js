import React, { Component } from 'react';

import '../../css/Tutorial.css';

const Page = {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4
}

class Tutorial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: Page.FIRST
        }
    }

    completeTutorial() {
        this.props.setGameState(this.props.mainPage)
    }

    setPage(p) {
        this.setState({
            page: p
        });
    }

    render() {

        switch(this.state.page) {

            case Page.FIRST:
                return(
                    <div className= 'tutorialDiv'>
                        <div className = 'anonymousPicture' id='first'>
                            <div className='navigationBar'>
                            <button className='pageButton' onClick={this.completeTutorial.bind(this)}>SKIP</button>
                            <button className='pageButton' onClick={this.setPage.bind(this, Page.SECOND)}>NEXT</button>
                            </div>
                        </div>
                    </div>
                );
            case Page.SECOND:
                return (
                    <div className= 'tutorialDiv'>
                        <div className = 'anonymousPicture' id='second'>
                            <div className='navigationBar'>
                                <button className='pageButton' onClick={this.setPage.bind(this, Page.FIRST)}>PREVIOUS</button>
                                <button className='pageButton' onClick={this.setPage.bind(this, Page.THIRD)}>NEXT</button>
                            </div>
                        </div>
                    </div>
                );
            case Page.THIRD:
                return(
                    <div className= 'tutorialDiv'>
                        <div className = 'anonymousPicture' id='third'>
                            <div className='navigationBar'>
                                <button className='pageButton' onClick={this.setPage.bind(this, Page.SECOND)}>PREVIOUS</button>
                                <button className='pageButton' onClick={this.setPage.bind(this, Page.FOURTH)}>NEXT</button>
                            </div>
                            <p style={{fontSize: '30px', textAlign: 'center'}}>
                                Trollbar level stuff, Community Status stuff
                            </p>
                        </div>
                    </div>
                );
            case Page.FOURTH:
                return(
                    <div className= 'tutorialDiv'>
                        <div className = 'anonymousPicture'  id='fourth'>
                            <div className='navigationBar'>
                                <button className='pageButton' onClick={this.setPage.bind(this, Page.THIRD)}>PREVIOUS</button>
                                <button className='pageButton' onClick={this.completeTutorial.bind(this)}>FINISH</button>
                            </div>
                            <p style={{fontSize: '30px', textAlign: 'center'}}>
                                Good luck!
                            </p>
                        </div>
                    </div>
                );
            default:
                break;
        }
    }
}

export default Tutorial;