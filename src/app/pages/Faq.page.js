import React, {Component} from 'react';
import displayPage from './_PageContainer';
import Header from '../components/common/Header.component';

class Faq extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header title="FAQ"/>
                <div className="row">

                </div>
                {this.props.children}
            </div>
        );
    }
}

export default displayPage(Faq)