import React, { Component } from "react";
import Header from "../components/common/Header.component";
import displayPage from "./_PageContainer";
import { Actions as CFPActions } from "../actions/cfp.actions";

const svgTracks = {
  "Backends, Cloud & Big Data": "img/svg/icon_theme_back.svg",
  "Design, UI & UX": "/img/svg/icon_theme_design.svg",
  "Frontend Web, Mobile & Jeux vidéos": "/img/svg/icon_theme_front.svg",
  Tooling: "/img/svg/icon_theme_tooling.svg",
  "Internet des objets & marchés émergents": "/img/svg/icon_theme_internet.svg",
  "Conception, Architecture & Pratiques de dev": "/img/svg/icon_theme_dev.svg"
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
        <Header title="CONFERENCES 2018" />
        <div className="row align-center talks-container">
          <div className="flottant-right">
            <img src="img/svg/about_flottant.svg" />
          </div>

          <div className="column small-12 large-8">
            {!selectedTalk && (
              <div className="row talks-container-content">
                {talks.map((talk, i) => {
                  if (!isMobile && i % 2 === 0) line++;
                  talk.line = line;
                  return (
                    <div
                      onClick={() => {
                        this.setState({
                          selectedIndex: i,
                          alternative: talk.line % 2 === 0,
                          selectedID: talk.id
                        });
                        window.scrollTo(0, 0);
                      }}
                      key={talk.id}
                      id={talk.id}
                      className={`row collapse small-12 large-6 talks-container-content-item ${
                        line % 2 === 0 ? "alternative" : ""
                      }`}
                    >
                      <div className="columns text-center auto talks-container-content-item-text">
                        <div className="row">
                          <h5 className="columns text-center">{talk.title}</h5>
                        </div>
                        <div className="row">
                          <div className="columns text-center">
                            <p className="track">
                              <img
                                className="icon"
                                src={svgTracks[talk.track]}
                              />
                              {talk.track}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="columns text-center">
                            {talk.talkType}
                          </div>
                        </div>
                        <hr />
                        <div className="talks-container-content-item-text-summary text-center">
                          {talk.summary}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {selectedTalk && (
              <div className="row talk-container-content">
                <div
                  onClick={() => {
                    this.setState({
                      selectedIndex: -1
                    });
                  }}
                  className={`row collapse small-12 talk-container-content-item ${
                    (alternative && selectedIndex % 2 === 0) ||
                    (!isMobile && selectedIndex % 2 != 0) ||
                    (isMobile && selectedIndex % 2 === 0)
                      ? "alternative"
                      : ""
                  }`}
                >
                  <div className="columns text-center auto talk-container-content-item-text">
                    <div className="row">
                      <h5 className="columns text-center">
                        {selectedTalk.title}
                      </h5>
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
                    <div className="row">
                      <div className="columns text-center">
                        {selectedTalk.talkType}
                      </div>
                    </div>
                    <hr />
                    <div className="talk-container-content-item-text-summary text-center">
                      {selectedTalk.summary}
                    </div>
                    <hr />
                    <div className="row">
                      <div className="columns">Conférencier·ère·s :</div>
                      {selectedTalk.speakers.map(speaker => (
                        <div key={speaker.uuid} className="columns">
                          {speaker.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
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
