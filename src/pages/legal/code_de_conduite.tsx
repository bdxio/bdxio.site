import React from 'react';
import SEO from '@components/common/SEO';
import Layout from '@components/common/Layout';

const CodeDeConduitePage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      <div className="row pageHeader">
        <div className="columns small-12 pageHeader-title">
          <h3 className="sectionTitle text-center">Code de conduite</h3>
        </div>
      </div>
      <div className="row code-conduite-container align-center">
        <div className="code-conduite-container-right-flottant">
          <img src="/img/svg/speakers_flottant.svg" />
        </div>

        <div className="code-conduite-container-left-flottant">
          <img src="/img/svg/theme1_flottant.svg" />
        </div>

        <div className="column small-12 large-8">
          <p className="code-conduite-content text-justify">
            <b>
              Toutes les personnes qui participent à la conférence doivent
              accepter le code de conduite suivant.
            </b>{' '}
            L'équipe d'organisation s'attachera à faire respecter ce code durant
            l'événement. Nous attendons de la part de chacune des personnes
            présentes une coopération pour assurer un environnement sain pour
            tout le monde.
          </p>
          <h4>Besoin d'aide ?</h4>
          <ul>
            <li className="code-conduite-content-mail">
              par email :{' '}
              <a href="mailto://team@bdxio.fr" target="_blank">
                team@bdxio.fr
              </a>
            </li>
            <li className="code-conduite-content-twitter">
              par twitter :{' '}
              <a href="https://twitter.com/bdxio" target="_blank">
                @bdxio
              </a>
            </li>
          </ul>
          <p className="code-conduite-content text-justify">
            <b>Notre conférence se veut une expérience sans harcèlement</b>,
            quelque soit votre sexe, votre orientation sexuelle, votre handicap,
            votre apparence physique, votre poids, votre origine ou votre
            religion. Nous ne tolérons aucun harcèlement des personnes présentes
            à la conférence, quelque soit sa forme. Les expressions et les
            images à connotation sexuelle ne sont pas appropriées lors de
            l'événement. Ceci inclut les conférences, les ateliers, les soirées,
            Twitter et les autres médias en ligne. Les personnes présentes à la
            conférence qui violent ces règles peuvent être sanctionnées, voire
            exclues de la conférence sans remboursement, à la discrétion de
            l'équipe d'organisation de la conférence.
          </p>
          <p className="code-conduite-content text-justify">
            <b>Le harcèlement</b> inclut des commentaires oraux sur le sexe,
            l'orientation sexuelle, le handicap, l'apparence physique, le poids,
            l'origine, la religion, les images à connotation sexuelle dans des
            lieux publics, les intimidations délibérées, la traque, la
            poursuite, un harcèlement photographique ou vidéo, une suite
            d'interruption des conférences et des autres événements, un contact
            physique inapproprié et des avances sexuelles non désirées.
          </p>
          <p className="code-conduite-content text-justify">
            Les personnes à qui il sera demandé d'arrêter{' '}
            <b>tout comportement de harcèlement</b> doivent arrêter
            immédiatement.
          </p>
          <p className="code-conduite-content text-justify">
            <b>
              Les sponsors sont aussi sujet à la politique anti-harcèlement.
            </b>
            En particulier, les sponsors doivent s'abstenir d'utiliser toute
            image ou support à connotation sexuelle. Ils ne doivent pas non plus
            engager d'activités à connotation sexuelle. L'équipe du stand (y
            compris les volontaires) ne doivent pas utiliser de vêtements,
            uniformes ou costumes à connotation sexuelle. Ils ne doivent pas non
            plus créer un environnement sexualisé.
          </p>
          <p className="code-conduite-content text-justify">
            <b>
              Si un participant ou une participante a un comportement de
              harcèlement
            </b>
            , l'équipe d'organisation de la conférence peut prendre toute action
            qui lui semble adéquate. Cela va d'un simple avertissement à
            l'exclusion de la personne de la conférence sans remboursement.
          </p>
          <p className="code-conduite-content text-justify">
            <b>Si vous vous sentez victime de harcèlement</b>, si vous pensez
            que quelqu'un se fait harceler, et plus généralement en cas de
            problème, merci de contacter immédiatement un membre de
            l'organisation de l'événement. Les membres sont facilement
            identifiables à leur t-shirt aux couleurs de l'événement.
          </p>
          <p className="code-conduite-content text-justify">
            Nous attendons des personnes présentes à l'événement qu'elles{' '}
            <b>suivent ces règles</b> dans le bâtiment des conférences et des
            ateliers, ainsi que pendant les événements sociaux relatifs à la
            conférence.
          </p>
          <p className="code-conduite-content text-justify">
            <b>Version originale et crédit :</b>{' '}
            <a href="http://2012.jsconf.us/#/about">
              http://2012.jsconf.us/#/about
            </a>{' '}
            & The Ada Initiative
            <br />
            <b>
              Merci d'aider à la traduction et à l'amélioration de ce texte :
            </b>{' '}
            <a href="http://github.com/leftlogic/confcodeofconduct.com">
              http://github.com/leftlogic/confcodeofconduct.com
            </a>
            <br />
            <b>Ce texte est sous licence</b>{' '}
            <a href="http://creativecommons.org/licenses/by/3.0/deed.en_US">
              Creative Commons Attribution 3.0 Unported License
            </a>
          </p>
        </div>
      </div>
    </Layout>
  </>
);

export default CodeDeConduitePage;
