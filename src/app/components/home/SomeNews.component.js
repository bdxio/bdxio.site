import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SomeNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            news: []
        }
    }

    goToCarouselPage(index) {
        this.setState({ index })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            news: nextProps.news.filter(n => n['Publiée'] == '1')
        });
    }

    render() {
        const { news, index } = this.state
        const newsDisplayed = news.slice(3 * index, 3 + 3 * index);
        const nbSelectors = Math.ceil(news.length / 3);
        return (
            <div className="row text-center someNews">
                <div className="columns">
                    <h5 className="sectionTitleBg">Nos Actualités en bref</h5>
                    <h6 className="sectionSubtitleBg">Que se passe-t-il avec BDX i/o ?</h6>

                    <div className="row">
                        <div className="columns someNews-content">
                            {newsDisplayed.map((n, i) => {
                                return (
                                    <div key={`'news_'${i}`}>
                                        <img src={n.Thumbnail} />
                                        <div>{n.Titre}</div>
                                        <div dangerouslySetInnerHTML={{ __html: n.Contenu }}></div>
                                        <div><Link to={'/news'}>Lire l'article ></Link></div>
                                    </div>

                                );
                            })}
                        </div>
                    </div>

                    <div>
                        {[...Array(nbSelectors)].map((v, i) => {
                            return (
                                <button key={`'select_'${i}`} type="button" onClick={() => { this.goToCarouselPage(i) }}>•</button>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <Link to={"/news"}>Les voir tous</Link>
                </div>
            </div>
        );
    }
}

SomeNews.propTypes = {
    news: PropTypes.array.isRequired,
}

export default SomeNews