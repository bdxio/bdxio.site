import React, { Component } from 'react';

class IframeContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>
            </div>
        );
    }
}

export default IframeContainer