import React, { Component } from 'react';
import displayPage from '../_PageContainer';
import Header from '../../components/common/Header.component';

class CodeConduite extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header title="Code de conduite" />
                <div className="row align-center">
                    <div className="column small-12 large-8">
                        <p>
                            Toutes les personnes qui participent à la conférence doivent accepter le code de conduite
                            suivant. L'équipe d'organisation s'attachera à faire respecter ce code durant l'événement.
                            Nous attendons de la part de chacune des personnes présentes une coopération pour assurer un
                            environnement sain pour tout le monde.
                        </p>
                        <h4>Besoin d'aide ?</h4>
                        <ul>
                            <li>par email : <a href="mailto://team@bdx.io">team@bdx.io</a></li>
                            <li>par twitter : <a href="https://twitter.com/bdxio">@bdxio</a></li>
                        </ul>
                        <p>
                            Notre conférence se veut une expérience sans harcèlement, quelque soit votre sexe,
                            votre orientation sexuelle, votre handicap, votre apparence physique, votre poids,
                            votre origine ou votre religion. Nous ne tolérons aucun harcèlement des personnes
                            présentes à la conférence, quelque soit sa forme. Les expressions et les images à
                            connotation sexuelle ne sont pas appropriées lors de l'événement. Ceci inclut les
                            conférences, les ateliers, les soirées, Twitter et les autres médias en ligne.
                            Les personnes présentes à la conférence qui violent ces règles peuvent être sanctionnées,
                            voire exclues de la conférence sans remboursement, à la discrétion de l'équipe
                            d'organisation de la conférence.
                        </p>
                        <p>
                            Le harcèlement inclut des commentaires oraux sur le sexe, l'orientation sexuelle,
                            le handicap, l'apparence physique, le poids, l'origine, la religion, les images à
                            connotation sexuelle dans des lieux publics, les intimidations délibérées, la traque,
                            la poursuite, un harcèlement photographique ou vidéo, une suite d'interruption des
                            conférences et des autres événements, un contact physique inapproprié et des avances
                            sexuelles non désirées.
                        </p>
                        <p>
                            Les personnes à qui il sera demandé d'arrêter tout comportement de harcèlement doivent arrêter immédiatement.
                        </p>
                        <p>
                            Les sponsors sont aussi sujet à la politique anti-harcèlement.
                            En particulier, les sponsors doivent s'abstenir d'utiliser toute image ou support à connotation sexuelle.
                            Ils ne doivent pas non plus engager d'activités à connotation sexuelle.
                            L'équipe du stand (y compris les volontaires) ne doivent pas utiliser de vêtements,
                            uniformes ou costumes à connotation sexuelle. Ils ne doivent pas non plus créer un environnement
                            sexualisé.
                        </p>
                        <p>
                            Si un participant ou une participante a un comportement de harcèlement, l'équipe d'organisation de la
                            conférence peut prendre toute action qui lui semble adéquate. Cela va d'un simple avertissement à
                            l'exclusion de la personne de la conférence sans remboursement.
                        </p>
                        <p>
                            Si vous vous sentez victime de harcèlement, si vous pensez que quelqu'un se fait harceler,
                            et plus généralement en cas de problème, merci de contacter immédiatement un membre de l'organisation de
                            l'événement. Les membres sont facilement identifiables à leur t-shirt aux couleurs de l'événement.
                        </p>
                        <p>
                            Nous attendons des personnes présentes à l'événement qu'elles suivent ces règles dans le bâtiment des
                            conférences et des ateliers, ainsi que pendant les événements sociaux relatifs à la conférence.
                        </p>
                        <div>
                            Version originale et crédit: <a href="http://2012.jsconf.us/#/about">http://2012.jsconf.us/#/about</a> & The Ada Initiative<br />
                            Merci d'aider à la traduction et à l'amélioration de ce texte : <a href="http://github.com/leftlogic/confcodeofconduct.com">http://github.com/leftlogic/confcodeofconduct.com</a><br />
                            Ce texte est sous licence <a href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a>
                        </div>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default displayPage(CodeConduite)