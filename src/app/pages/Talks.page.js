import React, { Component } from "react";
import Header from "../components/common/Header.component";
import displayPage from "./_PageContainer";
import { Actions as CFPActions } from "../actions/cfp.actions";

const svgTracks = {
  "Backends, Cloud & Big Data": "img/png/icon_theme_back.png",
  "Design, UI & UX": "/img/png/icon_theme_design.png",
  "Frontend Web, Mobile & Jeux vidéos": "/img/png/icon_theme_front.png",
  Tooling: "/img/png/icon_theme_tooling.png",
  "Internet des objets & marchés émergents": "/img/png/icon_theme_internet.png",
  "Conception, Architecture & Pratiques de dev": "/img/png/icon_theme_dev.png"
};

class Talks extends Component {
  constructor() {
    super();
    this.state = {
      isMobile: false,
      selectedIndex: -1,
      alternative: false,
      selectedID: null
    };
    this._onResize = this._onResize.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(CFPActions.getTalks());
    this._onResize();
    window.addEventListener("resize", this._onResize);
  }

  componentWillUnmount() {
    document.removeEventListener("resize", this._onResize);
  }

  componentDidUpdate() {
    if (this.state.selectedID && this.state.selectedIndex === -1) {
      document.getElementById(this.state.selectedID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      this.setState({ selectedID: null });
    }
  }

  _onResize() {
    const isMobile = window.innerWidth <= 500;
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile });
    }
  }

  render() {
    const { isMobile, selectedIndex, alternative } = this.state;
    const { talks } = this.props.cfp;
    const selectedTalk = talks[selectedIndex];
    let line = 0;
    return (
      <div>
        <Header title="CONFÉRENCES 2018" />
        <div className="row align-center talks-container">
          <div className="flottant-right">
            <img src="img/svg/about_flottant.svg" />
          </div>

          <div className="column text-center">
            {/* <div className="row align-center">
              <div className="columns shrink talks-container-content-item-talk-type-small-tag ">
                Backends, Cloud & Big Data
              </div>
              <div className="columns shrink talks-container-content-item-talk-type-small-tag ">
                Design, UI & UX
              </div>
              <div className="columns shrink talks-container-content-item-talk-type-small-tag ">
                Frontend Web, Mobile & Jeux vidéos
              </div>
              <div className="columns shrink talks-container-content-item-talk-type-small-tag ">
                Tooling
              </div>
              <div className="columns shrink talks-container-content-item-talk-type-small-tag ">
                Internet des objets & marchés émergents
              </div>
              <div className="columns shrink talks-container-content-item-talk-type-small-tag ">
                Conception, Architecture & Pratiques de dev
              </div>
            </div> */}

            <div className="row align-center">
              <div className="column small-12 large-8">
                {!selectedTalk && (
                  <div className="row collapse talks-container-content">
                    {talks.map((talk, i) => {
                      if (!isMobile && i % 2 === 0) line++;
                      talk.line = line;
                      return (
                        <div className="columns small-12 large-6" key={talk.id}>
                          <div
                            onClick={() => {
                              this.setState({
                                selectedIndex: i,
                                alternative: talk.line % 2 === 0,
                                selectedID: talk.id
                              });
                              window.scrollTo(0, 0);
                            }}
                            id={talk.id}
                            className={`talks-container-content-item margin-container ${
                              line % 2 === 0 ? "alternative" : ""
                            }`}
                          >
                            <div className="talks-container-content-item-talk-track">
                              <img
                                className="column talks-container-content-item-talk-track-img"
                                src={svgTracks[talk.track]}
                              />
                            </div>

                            <div className="row auto talks-container-content-item-text text-center">
                              <div className="columns talks-container-content-item-text-container">
                                <div className="row">
                                  <h5 className="columns text-center talks-container-content-item-text-title">
                                    {talk.title}
                                  </h5>
                                </div>

                                <div className="row talks-container-content-item-talk-type align-center">
                                  <div className="columns text-center shrink talks-container-content-item-talk-type-tag shrink">
                                    {talk.talkType}
                                  </div>
                                </div>
                                <div
                                  className="talks-container-content-item-text-summary text-center"
                                  style={{
                                    display: "-webkit-box",
                                    "-webkit-line-clamp": 3,
                                    "-webkit-box-orient": "vertical"
                                  }}
                                >
                                  {talk.summary}
                                </div>
                                <hr />
                                <div className="talks-container-content-item-text-speaker row">
                                  {talk.speakers.map(speaker => (
                                    <div className="columns" key={speaker.uuid}>
                                      {speaker.name}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {selectedTalk && (
                  <div className="row talk-container-content">
                    <div className="column">
                      <div
                        onClick={() => {
                          this.setState({
                            selectedIndex: -1
                          });
                        }}
                        className={`row collapse small-12 talk-container-content-item ${
                          alternative || isMobile ? "alternative" : ""
                        }`}
                      >
                        <div className="columns text-center auto talk-container-content-item-text talk-container-content-item-large-text">
                          <div className="row">
                            <h5 className="columns">{selectedTalk.title}</h5>
                          </div>
                          <div className="row talks-container-content-item-talk-type align-center">
                            <div className="columns text-center shrink talks-container-content-item-talk-type-tag">
                              {selectedTalk.talkType}
                            </div>
                          </div>

                          <div className="talk-container-content-item-text-summary text-center">
                            {selectedTalk.summary}
                          </div>
                          <hr />
                          <div className="row">
                            <div className="columns text-right">
                              Conférencier·ère·s :
                            </div>
                            {selectedTalk.speakers.map(speaker => (
                              <div
                                key={speaker.uuid}
                                className="columns text-left"
                              >
                                {speaker.name}
                              </div>
                            ))}
                          </div>

                          <div className="row">
                            <div className="columns text-center">
                              <p className="track">
                                <img
                                  className="icon"
                                  src={svgTracks[selectedTalk.track]}
                                />
                                {selectedTalk.track}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flottant-left">
            <img src="img/svg/theme2_flottant.svg" />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default displayPage(Talks);
