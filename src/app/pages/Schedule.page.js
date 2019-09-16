import PropTypes from "prop-types";
import React, { Component } from "react";
import Header from "../components/common/Header.component";
import Session from "../components/schedule/Session.component";
import displayPage from "./_PageContainer";

import all_talks from '../../static/schedule.js'


const SLOTS = ["08:30", "09:00", "10:00", "10:15", "11:00", "11:15", "12:00", "12:15", "12:30", "13:15", "13:45", "14:00", "14:15", "15:00", "15:15", "16:00", "16:30", "17:15", "17:30", "18:30"]


const compareRoom = (a, b) => {
    if (a.room < b.room) {
        return -1;
    }
    if (a.room > b.room) {
        return 1;
    }
    return 0;
}

class Schedule extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header title="PROGRAMME" />

                <div className="row align-center users-container">
                    <div className="flottant-right">
                        <img src="img/svg/about_flottant.svg" />
                    </div>
                    <div className="column small-12 large-10">
                        <div className="grid">

                            {SLOTS.map((slot, i) => {
                                return <React.Fragment key={i}>
                                    <div className="start-time" style={{ gridArea: `${i + 1} / 1` }}>
                                        <span className="hours">{slot.split(':')[0]}</span>
                                        <span className="minutes">{slot.split(':')[1]}</span>
                                    </div>
                                    {all_talks.filter(talk => talk.startTime === slot).sort(compareRoom).map((talk, j) =>
                                        <Session
                                            key={j}
                                            style={{ gridArea: `${i + 1}/ ${j + 1} / ${talk.format === "Hands on lab" ? i + (talk.startTime === '12:15'?5:4) : i + 1} / ${all_talks.filter(talk => talk.startTime === slot).length === 1 ? (talk.startTime === '12:30' || talk.startTime === '11:00' || talk.startTime === '15:00' ? 5 : 6) : j + 1}` }}
                                            talk={talk} />
                                    )
                                    }
                                </React.Fragment>
                            })}
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

Schedule.propTypes = {
};

export default displayPage(Schedule);
