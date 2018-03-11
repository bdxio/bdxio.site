import React, { Component }  from 'react';
import Navbar from '../components/Navbar.componet';
import Footer from '../components/Footer.component';


const displayPage = ( Page ) => {
    return class DisplayPage extends Component {

        constructor(props){
            super(props)
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
};

export default displayPage;