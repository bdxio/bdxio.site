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
                   <li><Link to="/">twitter</Link></li>
                   <li><Link to="/">facebook</Link></li>
                   <li><Link to="/">youtube</Link></li>
               </ul>
                <div>LiveStream component</div>
            </div>
        );
    }
}

export default Navbar