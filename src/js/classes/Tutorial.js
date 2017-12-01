import React, { Component } from 'react';

import '../../css/Tutorial.css';

const Page = {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4
};

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
                            <div className='introTextBG'>
                                <p>
                                    Welcome fellow troll to the Bookface.<br/><br/>
                                    We are an coalition of trolls bent on trolling the normie residents of the world wide web for our amusement and we have recruited you to be a part of this glorious endeavour.<br/>
                                    Your task as a troll is to look at the post of the normies here and comment in a 'trollie' way but be careful not to be to obvious in your attempts to wreak havoc.<br/>
                                    We have modified your Bookface page to keep track of how successful of a troll you are and how the normies view your action.<br/>
                                    What follows is a simple instruction on how to use this modified version of the bookface.
                                </p>
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
                            <div className='introTextBG'>
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
                                <button className='pageButton' onClick={this.completeTutorial.bind(this)}>FINISH</button>
                            </div>
                            <div className='introTextBG'>
                            </div>
                        </div>
                    </div>
                );
            default:
                break;
        }
    }
}

export default Tutorial;