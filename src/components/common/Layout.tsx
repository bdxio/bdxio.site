import React from 'react';
import Navigation from '@components/common/Navigation';
import { Link } from 'gatsby';

interface PropsType {
  children: React.ReactNode;
}

const Layout = ({ children }: PropsType) => {
  return (
    <>
      <Navigation pathname={''} isOnTop={true} programPublishingDate={''} />
      <div className="pageContainer">{children}</div>
      <div className="footer">
        <div className="footer-signIn">
          <div className="info">
            Vous souhaitez être tenu informé ?<br />
            Inscrivez-vous à la newsletter
          </div>
          <form className="email" >
            <input
              type="email"
              placeholder="Email"
            />
            <button type="submit" className={'button small white'}>
              S'inscrire
            </button>
          </form>
        </div>
        <div className="footer-item">
          <ul className="row">
            <li className="columns shrink">
              <Link to="/home">Accueil</Link>
            </li>
            <li className="columns shrink">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="columns shrink">
              <Link to="/legal/cgv">CGV</Link>
            </li>
            <li className="columns shrink">
              <Link to="/legal/code_de_conduite">Code de conduite</Link>
            </li>
            <li className="columns auto text-right">
              <a href="https://twitter.com/bdxio">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li className="columns shrink text-right">
              <a href="https://www.facebook.com/bdxio">
                <i className="fa fa-facebook-f" />
              </a>
            </li>
            <li className="columns shrink text-right">
              <a href="https://www.linkedin.com/company/10651416/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li className="columns shrink text-right">
              <a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ">
                <i className="fa fa-youtube" />
              </a>
            </li>
          </ul>
        </div>

        <small className="footer-date">©2020 - BDX I/O</small>
      </div>
    </>
  );
};

export default Layout;
