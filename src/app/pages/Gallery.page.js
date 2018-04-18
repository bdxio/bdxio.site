import React, {Component} from 'react';
import displayPage from './_PageContainer';

class Gallery extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Gallery</h1>
                {this.props.children}
            </div>
        );
    }
}

export default displayPage(Gallery)