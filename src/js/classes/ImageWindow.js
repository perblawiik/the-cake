import React, { Component } from 'react';

import '../../css/ImageWindow.css';

class ImageWindow extends Component {

    render() {

        if (this.props.showWindow){
            return (
                <div className='container'>
                    <div className='tintedBackground' onClick={this.props.closeWindow} >
                    </div>
                    <div className='imgDiv'>
                        <button className='closeButton' onClick={this.props.closeWindow}>✖</button>
                        <img className='selectedImage' src={this.props.srcFile} alt='logo'/>
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }
}

export default ImageWindow;