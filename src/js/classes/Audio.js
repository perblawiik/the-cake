import React, { Component } from 'react';

class Audio extends Component {

    componentDidMount() {
        // Set volume
        let sound = document.getElementById(this.props.idTag);
        sound.volume = this.props.volume;
    }

    render() {

        return (
            <audio id={this.props.idTag}>
                <source src={this.props.srcFile}></source>
                Your browser does not support the audio element.
            </audio>
        );
    }
}

export default Audio;