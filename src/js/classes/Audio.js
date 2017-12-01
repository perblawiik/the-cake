import React, { Component } from 'react';

class Audio extends Component {

    render() {

        if (!this.props.active) {
            return (
                <audio muted>
                    <source src={this.props.srcFile}></source>
                    Your browser does not support the audio element.
                </audio>
            );
        }
        else {
            return (
                <audio autoPlay>
                    <source src={this.props.srcFile}></source>
                    Your browser does not support the audio element.
                </audio>
            );
        }
    }
}

export default Audio;