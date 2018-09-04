import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Footer from "../components/common/Footer.component";
import Menu from "../components/common/Menu.componet";

import { Constants } from "../constants";
import { Actions as GSheetActions } from "../actions/gsheet.actions";
import { Actions as CFPActions } from "../actions/cfp.actions";
import Loader from "../components/common/Loader.component";
import SponsorsBar from "../components/common/SponsorsBar.component";

const displayPage = Page => {
  class DisplayPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isOnTop: true
      };
      this._onScroll = this._onScroll.bind(this);
    }

    componentWillMount() {
      this.props.dispatch(GSheetActions.fetch());
      window.scrollTo(0, 0);
      document.addEventListener("scroll", this._onScroll);
    }

    componentWillUnmount() {
      document.removeEventListener("scroll", this._onScroll);
    }

    _onScroll() {
      const isOnTop = window.scrollY < 50;
      if (isOnTop !== this.state.isOnTop) {
        this.setState({ isOnTop });
      }
    }

    render() {
      const { isOnTop } = this.state;
      const { loaded, Sponsors } = this.props.gsheet;
      const { subscriptionHasFocused } = this.props.navigate;
      const IMPERIAL = Sponsors.filter(
        s =>
          s["Actif"] === "1" &&
          s["Type"].toUpperCase() === Constants.sponsors.types.IMPERIAL
      );
      if (loaded) {
        return (
          <div className="pageContainer">
            <Menu pathname={this.props.location.pathname} isOnTop={isOnTop} />
            <Page {...this.props}>
              {IMPERIAL.length > 0 &&
                this.props.location.pathname != "/partnerships" && (
                  <SponsorsBar partners={IMPERIAL} />
                )}
              <Footer subscriptionHasFocused={subscriptionHasFocused} />
            </Page>
          </div>
        );
      } else {
        return <Loader />;
      }
    }
  }

  DisplayPage.propTypes = {
    gsheet: PropTypes.object.isRequired,
    cfp: PropTypes.object.isRequired,
    navigate: PropTypes.object.isRequired
  };

  const mapStateToProps = state => {
    return {
      gsheet: state.gsheet,
      cfp: state.cfp,
      navigate: state.navigate
    };
  };

  return connect(mapStateToProps)(DisplayPage);
};

export default displayPage;
