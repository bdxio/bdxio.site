import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div> LOGO </div>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/team">La team</Link></li>
                <li><Link to="/news">Actualités</Link></li>
                <li><Link to="/speakers">Speakers</Link></li>
                <li><Link to="/partnerships">Partenaires</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
               <ul>
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