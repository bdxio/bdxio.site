import React, { useState } from 'react';
import { Link } from 'gatsby';
import moment from 'moment';

interface PropsType {
  pathname: string;
  isOnTop: boolean;
  programPublishingDate: string;
}

const Navigation = ({
  pathname,
  isOnTop,
  programPublishingDate
}: PropsType) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const open = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav className={'row align-middle menu ' + (!isOnTop ? 'scroll' : '')}>
      <span className="columns shrink menu-logo">
        <Link to="/home">
          <img src="img/png/logo_white.png" />
        </Link>
      </span>
      <div className="row collapse main-menu">
        <ul className="columns auto align-center main-menu-item">
          <li className="shrink menu-item-content">
            <Link className={pathname === '/home' ? 'selected' : ''} to="/home">
              Accueil
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <Link className={pathname === '/team' ? 'selected' : ''} to="/team">
              L'équipe
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <Link className={pathname === '/news' ? 'selected' : ''} to="/news">
              Actualités
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <a href="">Conférencier·ère·s</a>
          </li>
          <li className="shrink menu-item-content">
            <a href="">Programme</a>
          </li>
          {/* <li
          className={`shrink menu-item-content ${moment().isBefore(moment(programPublishingDate)) && 'disabled'}`}>
              <Link
                className={pathname === "/speakers" ? "selected" : ""}
                to="/speakers"
                onClick={e => {
                  if (moment().isBefore(moment(programPublishingDate)) && 'disabled') e.preventDefault();
                }}
              >
                Conférencier·ère·s
              </Link>
            </li> */}
          {/* <li
            className={`shrink menu-item-content ${moment().isBefore(
              moment(programPublishingDate)
            ) && 'disabled'}`}
          >
            <Link
              className={pathname === '/schedule' ? 'selected' : ''}
              to="/schedule"
              onClick={e => {
                if (
                  moment().isBefore(moment(programPublishingDate)) &&
                  'disabled'
                )
                  e.preventDefault();
              }}
            >
              Programme
            </Link>
          </li>*/}
          <li className="shrink menu-item-content">
            <Link
              className={pathname === '/partnerships' ? 'selected' : ''}
              to="/partnerships"
            >
              Sponsors
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <Link className={pathname === '/faq' ? 'selected' : ''} to="/faq">
              FAQ
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <Link
              className={pathname === '/contact' ? 'selected' : ''}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <a href="http://2018.bdx.io" target="_blank">
              Édition 2018
            </a>
          </li>
        </ul>

        <ul className="columns shrink align-center main-menu-socialNetwork">
          <li>
            <a href="https://twitter.com/bdxio" target="_blank">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/bdxio" target="_blank">
              <i className="fa fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/10651416/"
              target="_blank"
            >
              <i className="fa fa-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ"
              target="_blank"
            >
              <i className="fa fa-youtube" />
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`menu-toggle ${menuOpened ? 'active' : ''}`}
        onClick={open}
      >
        <span />
        <span />
        <span />
      </div>

      <div className={`menu-responsive ${menuOpened ? 'active' : ''}`}>
        <ul>
          <li className="shrink menu-item-content">
            <Link className={pathname === '/home' ? 'selected' : ''} to="/home">
              Accueil
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <Link className={pathname === '/team' ? 'selected' : ''} to="/team">
              L'équipe
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <Link className={pathname === '/news' ? 'selected' : ''} to="/news">
              Actualités
            </Link>
          </li>
          {/* <li className="shrink menu-item-content">
              <Link
                className={pathname === "/speakers" ? "selected" : ""}
                to="/speakers"
              >
                Conférencier·ère·s
              </Link>
            </li> */}
          {/* <li
            className={`shrink menu-item-content ${moment().isBefore(
              moment(programPublishingDate)
            ) && 'disabled'}`}
          >
            <Link
              className={pathname === '/schedule' ? 'selected' : ''}
              to="/schedule"
              onClick={e => {
                if (
                  moment().isBefore(moment(programPublishingDate)) &&
                  'disabled'
                )
                  e.preventDefault();
              }}
            >
              Programme
            </Link>
          </li> */}
          <li className="shrink menu-item-content">
            <Link
              className={pathname === '/partnerships' ? 'selected' : ''}
              to="/partnerships"
            >
              Sponsors
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <Link className={pathname === '/faq' ? 'selected' : ''} to="/faq">
              FAQ
            </Link>
          </li>
          <li className="shrink menu-item-content">
            <Link
              className={pathname === '/contact' ? 'selected' : ''}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          {/* <li className="shrink menu-item-content">
            <a href="http://2018.bdx.io" target="_blank">
              Édition 2018
            </a>
          </li> */}
        </ul>
      </div>
      {/* FIXME Add liveStream component*/}
      {/*<span className=" columns shrink text-center menu-liveStream">LiveStream component</span>*/}
    </nav>
  );
};

export default Navigation;
