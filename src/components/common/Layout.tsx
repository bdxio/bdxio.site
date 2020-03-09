import React, { useState } from 'react';
import Navigation from '@components/common/Navigation';
import { Link } from 'gatsby';
import jsonp from 'jsonp';

import useSponsors from '@hooks/useSponsors';
import { LevelSponsorEnum, Sponsor } from '@models/Sponsor';

interface PropsType {
  path: string;
  children: React.ReactNode;
}

const SponsorFooter = () => {
  const sponsors = useSponsors(LevelSponsorEnum.BALTHAZAR);
  if (sponsors.length === 0) return null;
  return (
    <section className="row sponsorBar">
      <img className="homeFlottant" src="/img/svg/sponsor_flottant.svg" />
      <div className="columns shrink text-center">
        <h5 className="title">Nos sponsors Balthazar</h5>
      </div>
      <div className="row">
        <div className="columns auto text-center">
          {sponsors.map((sponsor: Sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.website}
              title={sponsor.name}
              target="_blank"
            >
              <img src={sponsor.logo} alt={sponsor.name} width={150} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Layout = ({ path, children }: PropsType) => {
  const [email, setEmail] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<any>) => {
    setEmail(e.target.value);
  };

  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url =
      'https://bdx.us10.list-manage.com/subscribe/post-json?u=3fdd02789fbab2f90b81652a3&id=760c78a462&EMAIL=' +
      email;

    jsonp(
      url,
      {
        param: 'c'
      },
      (err: any, data: any) => {
        if (err) {
          setStatus('error');
          setMessage(err);
        } else if (data.result !== 'success') {
          setStatus('error');
          setMessage(data.msg);
        } else {
          setStatus('success');
          setMessage('Merci pour votre inscription !');
          setEmail('');
        }
        // Clear message
        setTimeout(() => {
          setStatus('');
          setMessage('');
        }, 5000);
      }
    );
  };

  return (
    <>
      <Navigation path={path} />
      <div className="pageContainer">
        {children}
        <SponsorFooter />
      </div>
      <div className="footer">
        <div className="footer-signIn">
          <div className="info">
            Vous souhaitez être tenu informé ?<br />
            Inscrivez-vous à la newsletter
          </div>
          <form className="email" onSubmit={subscribe}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
            <button type="submit" className={'button small white'}>
              S'inscrire
            </button>
          </form>
        </div>
        <div className={`subscription-message column ${status ? 'show' : ''}`}>
          {message}
        </div>
        <div className="footer-item">
          <ul className="row">
            <li className="columns shrink">
              <Link to="/">Accueil</Link>
            </li>
            <li className="columns shrink">
              <Link to="/contact">Contact</Link>
            </li>
            {/* <li className="columns shrink">
              <Link to="/faq">FAQ</Link>
            </li> */}
            {/* <li className="columns shrink">
              <Link to="/legal/cgv">CGV</Link>
            </li> */}
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
