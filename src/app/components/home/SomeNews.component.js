import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class SomeNews extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            news: []
        }
    }

    goToCarouselPage(index) {
        this.setState({index})
    }

    componentWillMount() {
        this.setState({
            news: this.props.news.filter(n => n['Publiée'] == '1')
        });
    }

    render() {
        const {news, index} = this.state
        const newsDisplayed = news.slice(3 * index, 3 + 3 * index);
        const nbSelectors = Math.ceil(news.length / 3);
        return (
            <div className="row someNews">
                <div className="columns small-12 text-center">
                    <h5 className="sectionTitleBg">Nos Actualités en bref</h5>
                    {/* <h6 className="sectionSubtitleBg">Que se passe-t-il à BDX I/O ?</h6> */}
                </div>

                <div className="align-center">

                    <div className="row collapse align-center someNews-content">
                        {newsDisplayed.map((n, i) => {
                            return (
                                <div key={`'news_'${i}`} className="columns small-10 large-3 someNews-content-item">
                                    <div className="news-container">
                                        <div className="img-container">
                                            <img className="someNews-content-item-picture" src={n.Thumbnail}/>
                                        </div>
                                        <div className="someNews-content-item-title">{n.Titre}</div>
                                        <div className="text-content someNews-content-item-news"
                                             dangerouslySetInnerHTML={{__html: n.Contenu}}></div>
                                    </div>
                                    <div className="text-center someNews-content-item-button">
                                        <Link className="button tiny secondary" to={'/news'}>Lire l'article<i
                                            className="fas fa-angle-right"></i>

                                        </Link>
                                    </div>
                                </div>

                            );
                        })}
                    </div>

                    <div className="row align-center someNews-navigate">
                        {nbSelectors > 1 &&
                        [...Array(nbSelectors)].map((v, i) => {
                            return (
                                <button className={(index === i ? 'selected' : '')} key={`'select_'${i}`} type="button"
                                        onClick={() => {
                                            this.goToCarouselPage(i)
                                        }}><i className="fa fa-circle"></i></button>
                            );
                        })}
                    </div>
                </div>

                <div className="columns shrink text-center">
                    <Link className="button small white" to={"/news"}>TouT voir</Link>
                </div>
            </div>
        );
    }
}

SomeNews.propTypes = {
    news: PropTypes.array.isRequired,
}

export default SomeNews