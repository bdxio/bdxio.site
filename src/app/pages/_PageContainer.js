import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../components/common/Footer.component';
import Menu from '../components/common/Menu.componet';

import { Constants } from '../constants';
import { Actions as GSheetActions } from '../actions/gsheet.actions';
import Loader from '../components/common/Loader.component';

const displayPage = (Page) => {
    class DisplayPage extends Component {

        constructor(props) {
            super(props);
            this.state = {
                isOnTop: true,
            };
            this._onScroll = this._onScroll.bind(this);
        }

        componentWillMount() {
            this.props.dispatch(GSheetActions.fetch());

            document.addEventListener('scroll', this._onScroll);
        }

        componentWillUnmount() {
            document.removeEventListener('scroll', this._onScroll);
        }

        _onScroll() {
            const isOnTop = window.scrollY < 100;
            if (isOnTop !== this.state.isOnTop) {
                this.setState({ isOnTop })
            }
        }

        render() {
            const { isOnTop } = this.state;
            const { loaded, Sponsors } = this.props.gsheet;
            const IMPERIAL = Sponsors.filter((s) => s['Actif'] === '1' && s['Type'].toUpperCase() === Constants.sponsors.types.IMPERIAL);

            // if (loaded) {
            //     return (
            //         <div>
            //             <Menu pathname={this.props.location.pathname} isOnTop={isOnTop} />
            //             <Page {...this.props} />
            //             <Footer style={{ marginTop: (IMPERIAL.length === 0 ? '0px' : '64px') }} />
            //         </div>
            //     );
            // }
            // else {
                return (
                   <Loader />
                );
            //}
        }
    }

    DisplayPage.propTypes = {
        gsheet: PropTypes.object.isRequired,
    };

    const mapStateToProps = (state) => {
        return {
            gsheet: state.gsheet
        };
    };

    return connect(mapStateToProps)(DisplayPage)
};

export default displayPage;