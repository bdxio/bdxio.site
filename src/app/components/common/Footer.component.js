import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { style } = this.props;
        return (
            <div className="row footer" style={style}>
                <div className="columns align-center align-middle footer-signIn">
                    <div>Vous souhaitez être tenu(e) informé(e) ?<br />Inscrivez-vous à la newsletter</div>
                    <input className="small-2" type="text" placeholder={'Email'} />
                    <div><button type={'button'} className={'button small white'}>S'inscrire</button></div>
                </div>

                <div className="columns footer-item">
                    <ul className="row">
                        <li className="columns shrink"><Link to="/home">Accueil</Link></li>
                        <li className="columns shrink"><Link to="/contact">Contact</Link></li>
                        <li className="columns auto text-right"><a href="https://twitter.com/bdxio"><i className="fa fa-twitter"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://www.facebook.com/bdxio"><i className="fa fa-facebook-f"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://www.linkedin.com/bdxio"><i className="fa fa-linkedin"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"><i className="fa fa-youtube"></i></a></li>
                        <li className="columns shrink text-right"><a href="https://twitter.com/bdxio"><i className="fa fa-twitter"></i></a></li>
                    </ul>
                </div>

                <small className="columns footer-date">@2018 - BDX I / O</small>
            </div >
        );
    }
}

Footer.propTypes = {
    style: PropTypes.object.isRequired,
}


export default Footer