import React, {Component} from 'react';
import displayPage from './_PageContainer';
import Header from '../components/common/Header.component';

import {Actions as GSheetActions} from '../actions/gsheet.actions';

class Faq extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.dispatch(GSheetActions.fetchFAQ());
    }

    render() {
        const {FAQ} = this.props.gsheet;
        const categories = FAQ.reduce((acc, cur, i) => {
            if (acc.indexOf(cur.category) === -1) {
                acc.push(cur.category)
            }
            return acc;
        }, []);

        return (
            <div>
                <Header title="FAQ"/>
                <div className="row align-center faq-container">
                    <div className="faq-container-right-flottant">
                        <img src="img/svg/home_flottant.svg"/>
                    </div>

                    <div className="faq-container-left-flottant">
                        <img src="img/svg/price_flottant.svg"/>
                    </div>

                    <div className="column small-24">
                        {/* <div className="row">
                            <div className="columns shrink hide-for-small-only">
                                <ul className="faq-tag">
                                    {categories.map((category, i) => {
                                        return (
                                            <li className="faq-tag-item text-justify" key={`category_${i}`}>{category}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div> */}

                        <div className="row align-center">
                            <div className="columns small-12 large-8 faq-content">
                                <ul>
                                    {FAQ.map((f, i) => {
                                        return (
                                            <li className="faq-content-item" key={`question_${i}`}>
                                                <h5 className="faq-content-item-title">{f.question}</h5>
                                                <div className="text-justify"
                                                     dangerouslySetInnerHTML={{__html: f.response}}></div>
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