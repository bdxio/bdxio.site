import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row align-middle menu">
                <div className="columns shrink menu-logo"> LOGO </div>
                <ul className=" columns shrink align-center menu-item">
                    <li className="columns shrink menu-item-content"><Link to="/">Accueil</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/team">La team</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/news">Actualités</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/speakers">Speakers</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/partnerships">Partenaires</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/faq">FAQ</Link></li>
                    <li className="columns shrink menu-item-content"><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className=" columns shrink align-center menu-socialNetwork">
                <i class="fi-social-zurb"></i>
                   <li><a href="https://twitter.com/bdxio">twitter logo</a></li>
                   <li><a href="https://www.facebook.com/bdxio">Facebook logo</a></li>
                   <li><a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ">youtube logo</a></li>
               </ul>
                <div>LiveStream component</div>
            </div>
        );
    }
}

export default Navbar