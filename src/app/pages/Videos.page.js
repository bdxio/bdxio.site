import React, {Component} from 'react';
import displayPage from './_PageContainer';

class Videos extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Videos</h1>
            </div>
        );
    }
}

export default displayPage(Videos)