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

                    <div className="column small-10">
                        <div className="row align-middle contact-container-block">
                            <div className="column">
                                <div className="row contact-container-content">
                                    <div className="columns small-12 medium-12 large-4 text-left contact-container-content-partner">
                                        <img src="img/svg/icon_partner_contact.svg"/>
                                        <h5 className="contact-container-content-partner-title">Vous souhaitez nous
                                            contacter pour devenir <span className="textGradient">sponsor</span> ou vous
                                            avez des questions concernant les <span
                                                className="textGradient">partenariats</span> c'est ici :</h5>
                                        <span className="contact-container-content-partner-adress">
                                         <i className="fa fa-arrow-right"></i>
                                        <a href="mailto:" target="_blank"
                                           className="button small primary">partenariats@bdx.io</a>
                                    </span>
                                    </div>

                                    <div
                                        className="columns small-12 medium-12 large-4 text-left contact-container-content-speaker">
                                        <img src="img/svg/icon_speaker_contact.svg"/>
                                        <h5 className="contact-container-content-partner-title">Vous souhaitez nous
                                            contacter pour devenir sponsor ou vous avez des questions
                                            concernant les partenariats c'est ici :</h5>
                                        <span className="contact-container-content-speaker-adress">
                                         <i className="fa fa-arrow-right"></i>
                                        <a href="mailto:" target="_blank"
                                           className="button small primary">partenariats@bdx.io</a>
                                    </span>
                                    </div>

                                    <div className="columns small-12 medium-12 large-4 text-left contact-container-content-news">
                                        <img src="img/svg/icon_about_contact.svg"/>
                                        <h5 className="contact-container-content-pa-title">Vous souhaitez nous
                                            contacter pour devenir sponsor ou vous avez des questions
                                            concernant les partenariats c'est ici :</h5>
                                        <span className="contact-container-content-ns">
                                         <i className="fa fa-arrow-right"></i>
                                       <a href="mailto:" target="_blank"
                                          className="button small primary">partenariats@bdx.io</a>
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