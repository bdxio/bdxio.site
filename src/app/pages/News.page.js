import React, {Component} from 'react';
import PropTypes from 'prop-types';
import displayPage from './_PageContainer';
import Header from '../components/common/Header.component';

class News extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {News} = this.props.gsheet;
        const newsDisplayed = News.filter(n => n['Publiée'] == '1');

        return (
            <div>
                <Header title="NEWS"/>
                <div className="fixContainer">
                    {newsDisplayed.map((news, i) => {
                        return (
                            <div className="row newsContainer" key={`'news_${i}`}>
                                <div className="columns small-12 large-10 large-offset-1">
                                    <section className="row align-middle">
                                        <div className="newsContainer-newsFlottant small-12">
                                            <img src="img/svg/price_flottant.svg"/>
                                        </div>
                                        <div className="columns newsContainer-img small-12 large-4">
                                            <img src={news.Thumbnail}/>
                                        </div>
                                        <div className="columns small-12 large-8 newsContainer-content" key={`'news_${i}`}>
                                            <h4>{news.Titre}</h4>
                                            <h6>Le {news.Date}</h6>
                                            <div dangerouslySetInnerHTML={{__html: news.Contenu}}></div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

News.propTypes = {
    gsheet: PropTypes.object.isRequired,
}

export default displayPage(News)