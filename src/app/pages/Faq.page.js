import React, {Component} from 'react';
import displayPage from './_PageContainer';
import Header from '../components/common/Header.component';

import { Actions as GSheetActions } from '../actions/gsheet.actions';

class Faq extends Component {
    constructor() {
        super();
    }

    componentWillMount(){
        this.props.dispatch(GSheetActions.fetchFAQ());
    }

    render() {
        console.log(this.props)
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