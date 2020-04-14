import React from 'react';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';

const ContactPage = ({ path }: { path: string }) => {
  return (
    <>
      <SEO title="Home" />
      <Layout path={path}>
        <div className="contact">
          <div className="row pageHeader">
            <div className="columns small-12 pageHeader-title">
              <h3 className="sectionTitle text-center">Contact</h3>
            </div>
          </div>
          <div className="row auto align-center contact-container">
            <div className="contact-contactFlottant">
              <img src="img/svg/theme2_flottant.svg" />
            </div>

            <div className="column small-12">
              <div className="row align-middle contact-container-block">
                <div className="row contact-container-content">
                  <div
                    className="columns small-12 medium-12 large-4
                                    contact-container-content-partner"
                  >
                    <div>
                      <img src="img/svg/icon_partner_contact.svg" />
                      <h5 className="contact-container-content-partner-title">
                        Vous souhaitez nous contacter pour devenir{' '}
                        <span className="textGradient">sponsor</span> ou vous
                        avez des questions concernant les{' '}
                        <span className="textGradient">partenariats</span> c'est
                        ici :
                      </h5>
                    </div>
                    <span className="contact-container-content-partner-address align-middle">
                      <a
                        href="mailto:partenariats@bdxio.fr"
                        target="_blank"
                        className="button small primary"
                      >
                        partenariats@bdxio.fr
                      </a>
                    </span>
                  </div>

                  <div
                    className="columns small-12 medium-12 large-4
                                    contact-container-content-speaker separate-contact-item"
                  >
                    <div>
                      <img src="img/svg/icon_speaker_contact.svg" />
                      <h5 className="contact-container-content-partner-title">
                        Vous êtes <span className="textGradient">speaker</span>{' '}
                        ou vous cherchez à le devenir, attendez{' '}
                        <span className="textGradient">
                          l'ouverture du CFP{' '}
                        </span>
                        début juin <br />
                        ou contacter nous ici :
                      </h5>
                    </div>
                    <span className="contact-container-content-speaker-address align-middle arrowElement">
                      <a
                        href="mailto:team@bdxio.fr"
                        target="_blank"
                        className="button small primary"
                      >
                        team@bdxio.fr
                      </a>
                    </span>
                  </div>

                  <div
                    className="columns small-12 medium-12 large-4
                                        contact-container-content-news separate-contact-item"
                  >
                    <div>
                      <img src="img/svg/icon_about_contact.svg" />
                      <h5 className="contact-container-content-news-title">
                        Vous voulez tout savoir de
                        <span className="textGradient"> BDX I/O</span> vous avez
                        le choix ici :
                      </h5>
                    </div>
                    <div className="contact-container-content-news-address arrowElement align-middle">
                      <div className="socialNetwork">
                        <a
                          href="https://www.facebook.com/bdxio"
                          target="_blank"
                          className="button small primary"
                        >
                          <i className="fa fa-facebook-f" />
                        </a>
                        <a
                          href="https://twitter.com/bdxio"
                          target="_blank"
                          className="button small primary"
                        >
                          <i className="fa fa-twitter" />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/10651416/"
                          target="_blank"
                          className="button small primary"
                        >
                          <i className="fa fa-linkedin" />
                        </a>
                      </div>

                      <div className="contact-container-content-news-address-mail">
                        <span className="arrowElement">
                          <a
                            className="button small primary"
                            //onClick={this.focusSubscription}
                          >
                            Inscription newletter
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default ContactPage;
