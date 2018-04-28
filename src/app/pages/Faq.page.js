import React, { Component } from 'react';
import displayPage from './_PageContainer';
import Header from '../components/common/Header.component';

import { Actions as GSheetActions } from '../actions/gsheet.actions';

class Faq extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.dispatch(GSheetActions.fetchFAQ());
    }

    render() {
        const { FAQ } = this.props.gsheet;
        const categories = FAQ.reduce((acc, cur, i) => {
            if (acc.indexOf(cur.category) === -1) {
                acc.push(cur.category)
            }
            return acc;
        }, []);

        return (
            <div>
                <Header title="FAQ" />
                <div className="row align-center">
                    <div className="column small-12 large-8">
                        <div className="row">
                            <div className="columns small-12 large-2 hide-for-small-only">
                                <ul>
                                    {categories.map((category, i) => {
                                        return (
                                            <li key={`category_${i}`}>{category}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="columns small-12 large-10">
                                <ul>
                                    {FAQ.map((f, i) => {
                                        return (
                                            <li key={`question_${i}`}>
                                                <h4>{f.question}</h4>
                                                <div dangerouslySetInnerHTML={{__html: f.response}}></div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default displayPage(Faq)