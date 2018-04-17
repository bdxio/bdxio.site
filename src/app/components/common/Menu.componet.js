import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menuOpened: false,
        }
    }

    render() {
        const { pathname, isOnTop } = this.props;
        const { menuOpened } = this.state;
        return (
            <nav className={"row align-middle small-24 menu " + (!isOnTop ? 'scroll' : '')}>
                <span className="columns menu-logo">
                    <Link to="/home"><img src="img/png/logo_white.png" /></Link>
                </span>
                <div className="main-menu">
                    <ul className="columns align-center main-menu-item">
                        <li className="shrink menu-item-content"><Link className={(pathname === '/home' ? 'selected' : '')} to="/home">Accueil</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/team' ? 'selected' : '')} to="/team">La team</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/news' ? 'selected' : '')} to="/news">Actualités</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/speakers' ? 'selected' : '')} className="disabled" to='/speakers' onClick={e => e.preventDefault()} >Speakers</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/partnerships' ? 'selected' : '')} className="disabled" to="/partnerships" onClick={e => e.preventDefault()}>Sponsors</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/faq' ? 'selected' : '')} className="disabled" to='/faq' onClick={e => e.preventDefault()}>FAQ</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/contact' ? 'selected' : '')} to="/contact">Contact</Link></li>
                    </ul>

                    <ul className="columns shrink align-center main-menu-socialNetwork">
                        <li><a href="https://twitter.com/bdxio"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/bdxio"><i className="fa fa-facebook-f"></i></a></li>
                        <li><a href="https://www.linkedin.com/bdxio"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                </div>

                <div className={`menu-toggle ${(menuOpened ? 'active':'')}`} onClick={() => this.setState({ menuOpened: !menuOpened })}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`menu-responsive ${(menuOpened ? 'active':'')}`}>
                    <ul>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/home' ? 'selected' : '')} to="/home">Accueil</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/team' ? 'selected' : '')} to="/team">La team</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/news' ? 'selected' : '')} to="/news">Actualités</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/speakers' ? 'selected' : '')} className="disabled" to='/speakers' onClick={e => e.preventDefault()} >Speakers</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/partnerships' ? 'selected' : '')} className="disabled" to="/partnerships" onClick={e => e.preventDefault()}>Sponsors</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/faq' ? 'selected' : '')} className="disabled" to='/faq' onClick={e => e.preventDefault()}>FAQ</Link></li>
                        <li className="shrink menu-item-content"><Link className={(pathname === '/contact' ? 'selected' : '')} to="/contact">Contact</Link></li>
                    </ul>
                </div>
                {/* FIXME Add liveStream component*/}
                {/*<span className=" columns shrink text-center menu-liveStream">LiveStream component</span>*/}
            </nav>
        )
    }
}

Menu.propTypes = {
    pathname: PropTypes.string.isRequired,
    isOnTop: PropTypes.bool.isRequired,
}

export default Menu