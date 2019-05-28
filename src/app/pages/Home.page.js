import moment from "moment";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Countdown from "../components/Countdown.component";
import ConferenceThemes from "../components/home/ConferenceThemes.component";
import Location from "../components/home/Location.component";
import MetricsBar from "../components/home/MetricsBar.component";
import Quote from "../components/home/Quote.component";
import SomeNews from "../components/home/SomeNews.component";
import SomeSpeakersPresentation from "../components/home/SomeSpeakersPresentation.component";
import TicketingAccess from "../components/home/TicketingAccess.component";
import { Constants } from "../constants";
import displayPage from "./_PageContainer";

class Home extends Component {
  constructor() {
    super();
    moment.locale("fr");
    this.state = {
      isMobile: false,
      isTabletOrSmaller: false
    };
    this._onResize = this._onResize.bind(this);
  }

  componentWillMount() {
    this._onResize();
    window.addEventListener("resize", this._onResize);
  }

  componentWillUnmount() {
    document.removeEventListener("resize", this._onResize);
  }

  _onResize() {
    const isTabletOrSmaller = window.innerWidth <= 767;
    const isMobile = window.innerWidth <= 450;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
    if (isTabletOrSmaller !== this.state.isTabletOrSmaller) {
      this.setState({ isTabletOrSmaller });
    }
  }

  opendWindow() {}

  render() {
    const { isMobile } = this.state;
    const { isTabletOrSmaller } = this.state;
    const { News, Sponsors, Speakers, Speakers18, Config } = this.props.gsheet;

    return (
      <div className="home">
        <div className="home-homeFlottant">
          <img className="homeFlottant" src="img/svg/home_flottant.svg" />
        </div>
        <img className="homeBg" src="img/png/header_bg.png" />

        <div className="row home-header">
          <div className="columns auto">
            <h1 className="text-center">{isMobile ? "BDX I/O 2019" : "BDX I/O 2019 !"}</h1>
            <div className="row align-center">
              <div className="columns shrink">
                <div className="home-header-content">
                  <span>
                    <i className="fa fa-calendar" />
                    15 novembre
                  </span>
                  <span>
                    <i className="fa fa-map-marker" />
                    Palais des congrès
                  </span>
                </div>
              </div>
            </div>

            {isMobile ? <div className="replace-countdown-space" /> : <Countdown />}

            <div className="row">
              <div className="columns auto text-center home-header-button">
                {Config.registrationOpened === "opened" && (
                  <button
                    className="button medium white"
                    onClick={() => {
                      window.open(
                        "https://www.billetweb.fr/shop.php?event=bdx-i-o-2019",
                        "Billetterie BDX I/O 2019",
                        "width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no"
                      );
                    }}
                  >
                    Achetez votre place
                  </button>
                )}
                {moment().isBefore(moment(Constants.eventDate)) &&
                  moment().isAfter(moment(Config.programPublishingDate)) && (
                    <a href="http://program.bdx.io" className="button medium white" target="_blank">
                      Programme
                    </a>
                  )}
                {Config.registrationOpened !== "opened" &&
                  moment().isBefore(moment(Config.talksListPublishingDate)) && (
                    <a href="/static/plaquette.pdf" className="button medium white" target="_blank">
                      Devenir sponsor
                    </a>
                  )}
                {moment().isSameOrAfter(moment(Config.cfpOpeningDate)) &&
                  moment().isSameOrBefore(moment(Config.cfpClosingDate)) && (
                    <a
                      href="https://conference-hall.io/public/event/XGTzWawB3ZwLR7u462O8"
                      className="button medium white"
                      target="_blank"
                    >
                      Devenir speaker·euse
                    </a>
                  )}

                {/* <button
                  className="button medium ticket-switch switch-tickets-button"
                  type="button"
                >
                  <Link to="/tickets/switch">Transférer votre place</Link>
                </button> */}
              </div>
            </div>
            {moment().isSameOrAfter(moment(Config.cfpOpeningDate)) &&
              moment().isSameOrBefore(moment(Config.cfpClosingDate)) && (
                <div className="row cfp-date">
                  <div className="columns auto text-center">
                    {`CFP ouvert du 
                ${moment(Config.cfpOpeningDate).format("LL")} 
                au 
                ${moment(Config.cfpClosingDate).format("LL")}`}
                  </div>
                </div>
              )}
          </div>
        </div>

        <svg
          version="1.1"
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 12 50 30"
          xmlSpace="preserve"
        >
          <g>
            <defs>
              <polygon id="SVGID_1_" points="0,11.7 0,24.8 25,40.3 50,24.8 50,11.7" />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlinkHref="#SVGID_1_" />
            </clipPath>
            <g style={{ clipPath: "url(#SVGID_2_)" }}>
              <image
                width="4500"
                height="3500"
                xlinkHref="img/png/bdxio_header.png"
                transform="matrix(1.256919e-02 0 0 1.256919e-02 -3.513 3.5492)"
              />
            </g>
          </g>
        </svg>

        <section className="row text-center home-about">
          <div className="home-about-aboutFlottant">
            <img className="aboutFlottant" src="img/svg/about_flottant.svg" />
          </div>
          <div className="home-about-text">
            <h4 className="sectionTitle align-center">À propos de Bdxio</h4>
            <h6>
              BDX I/O est une conférence sur le thème de la programmation et de ses métiers annexes.{" "}
              <br />
              Pour cette sixième édition, nous recevrons plus de 900 passioné·e·s pour une nouvelle
              journée de découverte dans la bonne humeur !!!
            </h6>
          </div>
        </section>

        <MetricsBar />

        {/*<div className="row align-center">*/}
        {/*<Link className="columns shrink button small primary disabled" to="/gallery">Voir la galerie</Link>*/}
        {/*</div>*/}

        <ConferenceThemes />

        <Quote />

        <SomeSpeakersPresentation
          speakers={Speakers.length > 0 ? Speakers : Speakers18}
          isPrevious={Speakers.length === 0}
          isMobile={isTabletOrSmaller}
        />

        <SomeNews news={News} />

        <TicketingAccess
          registrationIsOpened={Config.registrationOpened === "opened"}
          earlyBirdSoldout={Config.earlyBird === "soldout"}
          gtSoldout={Config.goldenTicket === "soldout"}
          soldout={Config.registrationOpened === "soldout"}
        />

        <Location />

        {this.props.children}
      </div>
    );
  }
}

Home.propTypes = {
  gsheet: PropTypes.object.isRequired
};

export default displayPage(Home);
