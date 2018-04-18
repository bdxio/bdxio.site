import React, {Component} from 'react';
import displayPage from './_PageContainer';
import Header from '../components/common/Header.component';

class Contact extends Component {
    constructor() {
        super();
    }

    render() {
        return (

            <div className="contact">
                <Header title="CONTACT"/>
                <div className="row auto align-center contact-container">
                    <div className="contact-contactFlottant">
                        <img src="img/svg/theme2_flottant.svg"/>
                    </div>

                    <div className="column small-12">
                        <div className="row align-middle contact-container-block">
                            <div className="column">
                                <div className="row contact-container-content">
                                    <div
                                        className="columns small-12 medium-12 large-3 text-left contact-container-content-partner">
                                        <div>
                                            <img src="img/svg/icon_partner_contact.svg"/>
                                            <h5 className="contact-container-content-partner-title">Vous souhaitez nous
                                                contacter pour devenir <span className="textGradient">sponsor</span> ou
                                                vous
                                                avez des questions concernant les <span
                                                    className="textGradient">partenariats</span> c'est ici :</h5>
                                        </div>
                                        <span className="contact-container-content-partner-adress align-middle">
                                         <i className="fa fa-arrow-right slideRight"></i>
                                        <a href="mailto:" target="_blank"
                                           className="button small primary">partenariats@bdx.io</a>
                                    </span>
                                    </div>

                                    <div
                                        className="columns small-12 medium-12 large-3 text-left contact-container-content-speaker">
                                        <div>
                                            <img src="img/svg/icon_speaker_contact.svg"/>
                                            <h5 className="contact-container-content-partner-title">Vous êtes <span
                                                className="textGradient">speaker</span> ou vous cherchez à <span
                                                className="textGradient">le devenir</span>, vous pouvez nous contacter
                                                ici :</h5>
                                        </div>
                                        <span className="contact-container-content-speaker-adress align-middle">
                                         <i className="fa fa-arrow-right slideRight"></i>
                                        <a href="mailto:" target="_blank"
                                           className="button small primary">contact@bdx.io</a>
                                    </span>
                                    </div>

                                    <div className="columns small-12 medium-12 large-3 contact-container-content-news">
                                        <div>
                                            <img src="img/svg/icon_about_contact.svg"/>
                                            <h5 className="contact-container-content-news-title">Vous voulez connaître
                                                la date exacte de <span className="textGradient">l'ouverture du
                                                    CFP</span> vous avez le choix c'est ici :
                                            </h5>
                                        </div>
                                        <div className="contact-container-content-news-adress align-middle">
                                            <div>
                                                <i className="fa fa-arrow-right slideRight"></i>
                                                <a href="https://www.facebook.com/bdxio" target="_blank" className="button small primary">
                                                    <i className="fa fa-facebook-f"></i>
                                                </a>
                                                <a href="https://twitter.com/bdxio" target="_blank" className="button small primary">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/company/10651416/" target="_blank" className="button small primary">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </div>

                                            <div className="contact-container-content-news-adress-mail">
                                                <span>
                                                     <i className="fa fa-arrow-right slideRight"></i>
                                                        <a className="button small primary">Inscription newletter</a>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="columns small-12 medium-12 large-3 text-left contact-container-content-contact">
                                        <div>
                                            <img src="img/svg/icon_contact_contact.svg"/>
                                            <h5 className="contact-container-content-contact-title">Vous souhaitez
                                                contacter un <span
                                                    className="textGradient">membre de la team</span> en particulier
                                                c'est ici :</h5>
                                        </div>
                                        <span className="contact-container-content-contact-adress align-middle">
                                         <i className="fa fa-arrow-right slideRight"></i>
                                        <a href="mailto:" target="_blank"
                                           className="button small primary">team@bdx.io</a>
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default displayPage(Contact)