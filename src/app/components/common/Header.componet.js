import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className="row align-middle small-24 menu">
                <span className="columns shrink menu-logo">
                    <Link to="/home"><img src="img/png/logo_white.png" /></Link>
                </span>
                <ul className=" columns shrink align-center menu-item">
                    <li className="columns shrink menu-item-content"><Link to="/home">Accueil</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/team">La team</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/news">Actualités</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/speakers">Speakers</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/partnerships">Sponsors</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/faq">FAQ</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className=" columns shrink align-center menu-socialNetwork">
                    <li><a href="https://twitter.com/bdxio"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/bdxio"><i className="fa fa-facebook-f"></i></a></li>
                    <li><a href="https://www.linkedin.com/bdxio"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"><i className="fa fa-youtube"></i></a></li>
                </ul>
                <span className=" columns auto text-center menu-liveStream">LiveStream component</span>
            </nav>
        )
    }
}

export default Header