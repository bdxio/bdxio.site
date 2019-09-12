import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";

class Session extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        if (this.props.talk.format !== "pause" && this.props.talk.format !== "keynote")
            this.setState({ open: true });
    }

    closeModal() {
        this.setState({ open: false });
    }

    getColor(category) {
        switch (category) {
            case "Cloud & DevOps":
                return { color: "#2b2d42" }
            case "Back-end":
                return { color: "#fac319" }
            case "Front-end":
                return { color: "#4dbb4d" }
            case "Découverte":
                return { color: "#FB8C00" }
            case "Architecture & Securité":
                return { color: "#8193ab" }
            case "Big Data & IA":
                return { color: "#607D8B" }
            case "Design & UX":
                return { color: "#009688" }
            default:
                return { color: "#000" }
        }
    }

    render() {
        const { style, talk } = this.props
        return (
            <React.Fragment>
                <div onClick={this.openModal} className={`${talk.format === "pause" && "break"} session`} style={style}>
                    <div className="session-header">
                        <div flex="">
                            <h3 className="session-title">{talk.title}</h3>
                        </div>
                        <span className="language">{talk.language}</span>
                    </div>

                    {talk.format !== "pause" &&
                        <div className="session-content" flex="">
                            <div className="session-meta">
                                <div>{talk.room}</div>
                            </div>
                        </div>
                    }

                    <div className="session-footer">
                        {talk.duration &&
                            <div>
                                <div className="session-meta" flex="">
                                    <span>{talk.duration} min</span>
                                    {talk.category && <span className="tag" style={this.getColor(talk.category)}>{talk.category}</span>}
                                </div>
                            </div>
                        }

                        {talk.speakers &&
                            <div className="speakers" hidden="">
                                {talk.speakers.map((speaker, i) => (
                                    <div className="speaker" key={i}>
                                        <img src={speaker.photoURL} />
                                        <div className="speaker-details" flex="">
                                            <div className="speaker-name">{speaker.name}</div>
                                            <div className="speaker-company">{speaker.company}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}>
                    <div className="popup">
                        <div className="popup-close">
                            <a className="close" onClick={this.closeModal}>Fermer</a>
                        </div>
                        <div className="popup-header">
                            <span className="title">{talk.title}</span>
                            <ul>
                                {talk.category &&
                                    <li>
                                        {talk.category}
                                    </li>
                                }
                                <li>{talk.duration} min</li>
                                <li>{talk.room}</li>
                            </ul>
                        </div>
                        <div className="popup-meta">
                            <div>{talk.abstract}</div>
                        </div>
                    </div>
                </Popup>
            </React.Fragment>
        );
    }
}

Session.propTypes = {
    style: PropTypes.object.isRequired,
    talk: PropTypes.object.isRequired,
};

export default Session;
