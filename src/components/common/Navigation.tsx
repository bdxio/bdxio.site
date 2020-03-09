import React, { useState } from 'react';
import { Link } from 'gatsby';
import moment from 'moment';
import useMobileDetect from 'use-mobile-detect-hook';
import useOnScroll from '@hooks/useOnScroll';
import useEventInfo from '@hooks/useEventInfo';

interface PropsType {
  path: string;
}

const Menu = ({ path }: PropsType) => {
  const eventInfo = useEventInfo();
  const detectMobile = useMobileDetect();

  return (
    <ul
      className={
        !detectMobile.isMobile()
          ? 'columns auto align-center main-menu-item'
          : ''
      }
    >
      <li className="shrink menu-item-content">
        <Link className={path === '/' ? 'selected' : ''} to="/">
          Accueil
        </Link>
      </li>
      <li className="shrink menu-item-content">
        <Link className={path === '/team/' ? 'selected' : ''} to="/team">
          L'équipe
        </Link>
      </li>
      <li className="shrink menu-item-content">
        <Link
          className={path === '/articles/' ? 'selected' : ''}
          to="/articles"
        >
          Actualités
        </Link>
      </li>
      {moment().isSameOrAfter(moment(eventInfo.programPublishingDate)) && (
        <li className={`shrink menu-item-content`}>
          <Link
            className={path === '/speakers/' ? 'selected' : ''}
            to="/speakers"
          >
            Conférencier·ière·s
          </Link>
        </li>
      )}
      {moment().isSameOrAfter(moment(eventInfo.programPublishingDate)) && (
        <li className={`shrink menu-item-content`}>
          <Link
            className={path === '/schedule/' ? 'selected' : ''}
            to="/schedule"
          >
            Programme
          </Link>
        </li>
      )}
      <li className="shrink menu-item-content">
        <Link
          className={path === '/sponsors/' ? 'selected' : ''}
          to="/sponsors"
        >
          Sponsors
        </Link>
      </li>
      <li className="shrink menu-item-content">
        <Link className={path === '/contact/' ? 'selected' : ''} to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};

const Navigation = ({ path }: PropsType) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const { isOnTop } = useOnScroll();

  const open = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav className={`row align-middle menu ${!isOnTop && 'scroll'}`}>
      <span className="columns shrink menu-logo">
        <Link to="/">
          <img src="/img/png/logo_white.png" />
        </Link>
      </span>
      <div className="row collapse main-menu">
        <Menu path={path} />
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
        <Menu path={path} />
      </div>
      {/* FIXME Add liveStream component*/}
      {/*<span className=" columns shrink text-center menu-liveStream">LiveStream component</span>*/}
    </nav>
  );
};

export default Navigation;
