<<<<<<< HEAD
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.component';
import Footer from '../components/Footer.component';
=======
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import Navbar               from '../components/common/Navbar.componet';
import Footer               from '../components/common/Footer.component';
>>>>>>> ca0a55060bb02a4b2a1aaa20e09400a55b9fbaef

import { Actions as GSheetActions } from '../actions/gsheet.actions';

const displayPage = ( Page ) => {
    class DisplayPage extends Component {

        constructor(props){
            super(props)
        }

        componentWillMount() {
            this.props.dispatch(GSheetActions.fetch());
        }

        render(){
            return (
                <div>
                    <Navbar />
                    <Page {...this.props} />
                    <Footer />
                </div>
            )
        }
    };

    const mapStateToProps = (state) => {
        return {
            gsheet: state.gsheet
        };
    };

    return connect(mapStateToProps)(DisplayPage)
};

export default displayPage;