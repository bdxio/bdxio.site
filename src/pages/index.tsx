import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import useMobileDetect from 'use-mobile-detect-hook';

import Moment from 'moment';
import 'moment/locale/fr';
Moment.locale('fr');

import useEventInfo from '@hooks/useEventInfo';
import useInterval from '@hooks/useInterval';

import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';

import MemberElement from '@components/common/MemberElement';

const Countdown = ({ eventDate }: { eventDate: Moment.Moment }) => {
  const [timeRemaining, setTimeRemaining] = useState<Moment.Duration>();
  const [ended, setEnded] = useState(false);

  useInterval(() => {
    const duration = Moment.duration(eventDate.diff(Moment.now()));
    if (
      duration.years() <= 0 &&
      duration.months() <= 0 &&
      duration.days() <= 0 &&
      duration.hours() <= 0 &&
      duration.minutes() <= 0 &&
      duration.seconds() <= 0
    ) {
      setEnded(true);
    }
    setTimeRemaining(duration);
  }, 1000);
  return (
    <div className="row">
      {ended ? (
        Moment().isSame(eventDate) && (
          <div className="columns auto text-center home-header-button">
            <Link to="/live" className="button medium white">
              <i className="fa fa-circle blink" />
              &nbsp; Accéder aux directs
            </Link>
          </div>
        )
      ) : timeRemaining ? (
        <div className={'columns small-12 align-center countdown'}>
          <div className="small-2 medium-2 text-center">
            <h2 className="">{timeRemaining.months()}</h2>
            <div className="">mois</div>
          </div>

          <div className="small-2 medium-2 text-center countdown-border">
            <h2 className="">{timeRemaining.days()}</h2>
            <div className="">jours</div>
          </div>

          <div className="small-2 medium-2 text-center">
            <h2 className="">{timeRemaining.hours()}</h2>
            <div className="">heures</div>
          </div>

          <div className="small-2 medium-2 text-center countdown-border">
            <h2 className="">{timeRemaining.minutes()}</h2>
            <div className="">minutes</div>
          </div>

          <div className="small-2 medium-2 text-center">
            <h2 className="">{timeRemaining.seconds()}</h2>
            <div className="">secondes</div>
          </div>
        </div>
      ) : (
        <div className="columns auto text-center loading">Loading...</div>
      )}
    </div>
  );
};

const ArticleElement = ({ article }: { article: any }) => (
  <div className="columns small-10 large-3 someNews-content-item">
    <div className="news-container">
      <div className="img-container">
        <img
          className="someNews-content-item-picture"
          src={article.frontmatter.thumbnail}
        />
      </div>
      <div className="someNews-content-item-title">
        {article.frontmatter.title}
      </div>
      <div
        className="text-content someNews-content-item-news"
        dangerouslySetInnerHTML={{ __html: article.html }}
      />
    </div>
    <div className="text-center someNews-content-item-button">
      <Link className="button tiny secondary" to={article.frontmatter.path}>
        Lire l'article
        <i className="fas fa-angle-right" />
      </Link>
    </div>
  </div>
);

const IndexPage = ({ path }: { path: string }) => {
  const eventInfo = useEventInfo();
  const eventDate = Moment(eventInfo.general.openingDate);
  const detectMobile = useMobileDetect();
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 3
        ) {
          nodes {
            id
            frontmatter {
              title
              subtitle
              thumbnail
              date
              creator
              path
            }
            html
          }
        }
      }
    `
  );

  return (
    <>
      <SEO title="Home" />
      <Layout path={path}>
        <div className="home">
          <div className="home-homeFlottant">
            <img className="homeFlottant" src="/img/svg/home_flottant.svg" />
          </div>
          <img className="homeBg" src="/img/png/header_bg.png" />

          <div className="row home-header">
            <div className="columns auto">
              <h1 className="text-center">BDX I/O {eventDate.year()}</h1>
              <div className="row align-center">
                <div className="columns shrink">
                  <div className="home-header-content">
                    <span>
                      <i className="fa fa-calendar" />
                      {eventDate.date()} {eventDate.locale('fr').format('MMMM')}
                    </span>
                    <span>
                      <i className="fa fa-map-marker" />
                      Palais des congrès
                    </span>
                  </div>
                </div>
              </div>

              {detectMobile.isMobile() ? (
                <div className="replace-countdown-space" />
              ) : (
                <Countdown eventDate={eventDate} />
              )}

              <div className="row">
                <div className="columns auto text-center home-header-button">
                  <a
                    href={eventInfo.general.plaquetteUrl}
                    className="button medium white"
                    target="_blank"
                  >
                    Devenir sponsor
                  </a>
                  {eventInfo.registration.opened && (
                    <button
                      className="button medium white"
                      onClick={() => {
                        window.open(
                          `${eventInfo.registration.url}`,
                          `Billetterie BDX I/O ${eventDate.year()}`,
                          'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'
                        );
                      }}
                    >
                      Achetez votre place
                    </button>
                  )}
                  {Moment().isSameOrAfter(
                    Moment(eventInfo.programPublishingDate)
                  ) && (
                    <Link to="/schedule" className="button medium white">
                      Programme
                    </Link>
                  )}

                  {Moment().isSameOrAfter(Moment(eventInfo.cfp.openingDate)) &&
                    Moment().isSameOrBefore(
                      Moment(eventInfo.cfp.closingDate)
                    ) && (
                      <a
                        href={eventInfo.cfp.url}
                        className="button medium white"
                        target="_blank"
                      >
                        Devenir speaker·euse
                      </a>
                    )}
                </div>
              </div>
              {Moment().isSameOrAfter(Moment(eventInfo.cfp.openingDate)) &&
                Moment().isSameOrBefore(Moment(eventInfo.cfp.closingDate)) && (
                  <div className="row cfp-date">
                    <div className="columns auto text-center">
                      {`CFP ouvert du ${Moment(
                        eventInfo.cfp.openingDate
                      ).format('LL')}
                    au ${Moment(eventInfo.cfp.closingDate).format('LL')}`}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>

        <svg
          version="1.1"
          id="Calque_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 12 50 30"
          xmlSpace="preserve"
        >
          <g>
            <defs>
              <polygon
                id="SVGID_1_"
                points="0,11.7 0,24.8 25,40.3 50,24.8 50,11.7"
              />
            </defs>
            <clipPath id="SVGID_2_">
              <use xlinkHref="#SVGID_1_" />
            </clipPath>
            <g style={{ clipPath: 'url(#SVGID_2_)' }}>
              <image
                width="4500"
                height="3500"
                xlinkHref="/img/png/bdxio_header.png"
                transform="matrix(1.256919e-02 0 0 1.256919e-02 -3.513 3.5492)"
              />
            </g>
          </g>
        </svg>

        <section className="row text-center home-about">
          <div className="home-about-aboutFlottant">
            <img className="aboutFlottant" src="/img/svg/about_flottant.svg" />
          </div>
          <div className="home-about-text">
            <h4 className="sectionTitle align-center">
              Qu'est-ce que BDX I/O ?
            </h4>
            <h6>
              BDX I/O est une conférence Bordelaise sur le thème de la
              programmation et de ses métiers annexes. <br />
              Lors de l'édition {eventDate.year() - 1}, nous avons reçu plus de
              850 passioné·e·s lors d'une journée de découverte et de bonne
              humeur !!!
            </h6>
          </div>
        </section>

        {/* <MetricsBar /> */}
        <div className="row align-middle metricsBar">
          <div className="columns hide-for-small-only auto text-center metricsBar-picture" />
          <div className="columns small-12 medium-7">
            <div className="row metricsBar-content align-center">
              <div className="metrics-item text-center">
                <h3 className="metricsBar-content-number">40</h3>
                <div className="metricsBar-content-text">Talks</div>
              </div>
              <div className="metrics-item text-center separate-Element">
                <h3 className="metricsBar-content-number">40</h3>
                <div className="metricsBar-content-text">Speakers</div>
              </div>
              <div className="metrics-item text-center separate-Element">
                <h3 className="metricsBar-content-number">850</h3>
                <div className="metricsBar-content-text">Participants</div>
              </div>
              <div className="metrics-item text-center separate-Element">
                <h3 className="metricsBar-content-number">3</h3>
                <div className="metricsBar-content-text">Hands'on</div>
              </div>
            </div>
          </div>
          <div className="columns hide-for-small-only auto text-center metricsBar-video" />
        </div>

        {/* <ConferenceThemes /> */}
        <div className="row conference">
          <div className="conference-conferenceFlottantRight">
            <img src="/img/svg/theme1_flottant.svg" />
          </div>
          <div className="conference-conferenceFlottantLeft">
            <img src="/img/svg/theme2_flottant.svg" />
          </div>
          <div className="columns small-12 text-center conference-themes">
            <h5 className="sectionTitle">Les thèmes de la journée</h5>
            <h6>
              Les thèmes permettent de donner une coloration à la journée.
              L'évènement sera articulé autours de 6 thématiques.
            </h6>
          </div>

          <div className="row auto align-center">
            <div className="column small-12 medium-8 conference-container">
              <div className="row conference-container-content">
                {eventInfo.themes.map((theme: any, i: number) => (
                  <div
                    key={`theme_${i}`}
                    className="columns small-6 medium-4 text-center conference-container-content-item"
                  >
                    <div>
                      <img src={theme.icon} />
                    </div>
                    <h6>{theme.title}</h6>
                    <div className="text-themes">{theme.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <Quote /> */}
        <div className="row align-middle align-center home-team">
          <div className="home-team-content">
            <h5 className="text-center">
              BDX I/O, une journée de découverte et de partage pour des
              passionnés par des passionnés !
            </h5>
            <h6 className="text-center">L'équipe</h6>
          </div>
        </div>

        {/* <SomeNews news={News} /> */}
        <div className="row someNews">
          <div className="columns small-12 text-center">
            <h5 className="sectionTitleBg">Nos Actualités en bref</h5>
          </div>

          <div className="align-center">
            <div className="row collapse align-center someNews-content">
              {allMarkdownRemark.nodes.map((article: any) => (
                <ArticleElement key={article.id} article={article} />
              ))}
            </div>

            <div className="row align-center someNews-navigate">
              {/* TODO: LIMIT TO 3 ARTICLES
                {[...Array(3)].map((v, i) => {
                  return (
                    <button
                      className={1 === i ? 'selected' : ''}
                      key={`'select_'${i}`}
                      type="button"
                    >
                      <i className="fa fa-circle" />
                    </button>
                  );
                })}
              */}
            </div>
          </div>

          <div className="columns shrink text-center">
            <Link className="button small white" to={'/articles'}>
              Tout voir
            </Link>
          </div>
        </div>

        {/* <TicketingAccess
          registrationIsOpened={Config.registrationOpened === 'opened'}
          earlyBirdSoldout={Config.earlyBird === 'soldout'}
          gtSoldout={Config.goldenTicket === 'soldout'}
          soldout={Config.registrationOpened === 'soldout'}
        /> */}
        <section className="row ticketingAccess">
          <div className="ticketingAccess-ticketingAccessFlottant">
            <img src="/img/svg/theme1_flottant.svg" />
          </div>
          <div className="columns small-12 text-center">
            <h5 className="sectionTitle">Achetez votre place pour BDX I/O</h5>
            {/* {!registrationIsOpened && (
              <h6 className="sectionSubtitle">
                Ouverture de la billeterie en Juin
              </h6>
            )} */}
          </div>

          <div className="row collapse align-center ticketingAccess-container">
            <div
              className={
                'column small-10 medium-3 large-3 ticketingAccess-container-item ' +
                'disabled'
                // (!registrationIsOpened || earlyBirdSoldout ? 'disabled' : '')
              }
            >
              <div className="row align-center ticketingAccess-container-item-infos">
                <div className="columns small-12 ticketingAccess-container-item-infos-title">
                  <div className="ticketingAccess-container-item-infos-title-euros">
                    - €
                  </div>
                  <div className="ticketingAccess-container-item-infos-title-classe">
                    Early Bird
                  </div>
                </div>
                <div className="columns small-12 ticketingAccess-container-item-infos-status">
                  Individuel
                </div>
              </div>
              <div className="row ticketingAccess-container-item-content">
                <div>
                  Accès a partir de 8H30 au <span>petit déjeuner</span>
                </div>
                <div>
                  Repas <span>offert</span> le midi
                </div>
                <div>Accès aux stands</div>
                <div>
                  Accès à <span>toutes</span> les conférences
                </div>
              </div>
              <div className="row shrink align-center">
                {/* {registrationIsOpened && !earlyBirdSoldout ? (
                  <button
                    className="button small secondary"
                    onClick={() => {
                      window.open(
                        `${eventInfo.registration.url}`,
                        `Billetterie BDX I/O ${eventDate.year()}`,
                        'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'
                      );
                    }}
                  >
                    Acheter
                  </button>
                ) : ( */}
                <span className="button small secondary disabled">
                  Pas encore disponible
                  {/* {earlyBirdSoldout ? 'Épuisé' : 'Pas encore disponible'} */}
                </span>
                {/* )} */}
              </div>
            </div>

            <div
              className={
                'column small-10 medium-3 large-3 ticketingAccess-container-item ' +
                'disabled'
                // (!registrationIsOpened || soldout ? 'disabled' : '')
              }
            >
              <div className="row align-center ticketingAccess-container-item-infos">
                <div className="columns small-12 ticketingAccess-container-item-infos-title">
                  <div className="ticketingAccess-container-item-infos-title-euros">
                    - €
                  </div>
                  <div className="ticketingAccess-container-item-infos-title-classe">
                    Classic
                  </div>
                </div>
                <div className="columns small-12 ticketingAccess-container-item-infos-status">
                  Individuel
                </div>
              </div>
              <div className="row ticketingAccess-container-item-content">
                <div>
                  Accès a partir de 8H30 au <span>petit déjeuner</span>
                </div>
                <div>
                  Repas <span>offert</span> le midi
                </div>
                <div>Accès aux stands</div>
                <div>
                  Accès à <span>toutes</span> les conférences
                </div>
                <div>Soutenez l'événement</div>
              </div>
              <div className="row shrink ticketingAccess-container-item-content-button align-center">
                {/* {registrationIsOpened && !soldout ? (
                  <button
                    className="button small secondary"
                    onClick={() => {
                      window.open(
                        `${eventInfo.registration.url}`,
                        `Billetterie BDX I/O ${eventDate.year()}`,
                        'width=650, height=600, top=100, left=100, toolbar=no, resizable=yes, scrollbars=yes, status=no'
                      );
                    }}
                  >
                    Acheter
                  </button>
                ) : ( */}
                <span className="button small secondary disabled">
                  Pas encore disponible
                  {/* {soldout ? 'Épuisé' : 'Pas encore disponible'} */}
                </span>
                {/* )} */}
              </div>
            </div>
          </div>
        </section>

        {/* <Location /> */}
        <section className="row location align-center location-infos">
          <div className="columns small-12 medium-4 large-3 location-infos-place">
            A 10 minutes de <br />> Bordeaux
          </div>
          <div className="columns small-12 medium-4 large-3 location-infos-amphis">
            5 amphis en parallèle <br />> 40 conférences
          </div>
          <div className="columns small-12 medium-4 large-3 location-infos-dev">
            15 communautés <br />> 900 Développeur·se·s
          </div>

          <div className="columns small-12 location-site">
            <div className="row">
              <div className="columns shrink location-site-place">
                <h5>Palais des congrès</h5>
                <div>
                  Avenue Jean Gabriel Domergue
                  <br />
                  33300 Bordeaux
                </div>
                <br />
                <div>
                  Pour nous rejoindre en transport en commun,
                  <br />
                  choisisser le Bus ou le Tram.
                </div>
                <br />
                <div>
                  Si vous venez en voiture, le parking du Palais des congrès est
                  ouvert et gratuit.
                </div>
              </div>

              <div className="columns auto location-site-map">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1SdobaspVQ0Rfo7syUJBOcE&key=AIzaSyBQYTDJ5joswWG8lQ-Wv9MGYUqHhD9LfCc"
                  height="300"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default IndexPage;
