export class FAQPageComponent implements ng.IDirective {
    public controller: Function = FAQPageController;
    public template: string = `
    <section class="faq wrapper">
            <div class="row">
               <ul class="col-sm-3 nav nav-pills nav-stacked space-top-25">
                    <li ng-class="{'active' : activeSection === 'coc'}" ><a ng-click="activeSection = 'coc'" ng-init="activeSection = 'coc'">Code de Conduite</a></li>
                    <li ng-class="{'active' : activeSection === 'sponsors'}"><a ng-click="activeSection = 'sponsors'">Sponsors</a></li>
                    <li ng-class="{'active' : activeSection === 'speakers'}"><a ng-click="activeSection = 'speakers'">Speakers</a></li>
                    <li ng-class="{'active' : activeSection === 'participants'}"><a ng-click="activeSection = 'participants'">Participants</a></li>
                    <li ng-class="{'active' : activeSection === 'jury'}" ><a ng-click="activeSection = 'jury'">Jury</a></li>
                </ul>

                <div class="col-sm-9 faq-container-sections">

                    <!-- START FAQ Code de Conduite !-->
                    <div ng-show="activeSection === 'coc'" class="faq-content section-sponsors" ng-init="questionCoc1 = true">
                        <h1 class="section-title text-primary">Code de Conduite</h1>

                        <h4 class="space-bottom-20">Toutes les personnes qui participent à la
                        conférence doivent accepter le code de conduite suivant. L'équipe d'organisation
                        s'attachera à faire respecter ce code durant l'événement. Nous attendons de
                        la part de chacune des personnes présentes une coopération pour assurer un environnement
                        sain pour tout le monde.</h4>

                        <h2 class="space-bottom-20">Besoin d'aide&nbsp;?</h2>

                        <ul>
                            <li>par email : team@bdx.io</li>
                            <li>par twitter : <a href="https://twitter.com/bdxio">@bdxio</a></li>
                        </ul>

                        <h4 class="space-bottom-20">Notre conférence se veut une expérience sans harcèlement, quelque soit
                        votre sexe, votre orientation sexuelle, votre handicap, votre apparence
                        physique, votre poids, votre origine ou votre religion. Nous ne tolérons aucun
                        harcèlement des personnes présentes à la conférence, quelque soit sa forme. Les
                        expressions et les images à connotation sexuelle ne sont pas appropriées lors
                        de l'événement. Ceci inclut les conférences, les ateliers, les soirées, Twitter
                        et les autres médias en ligne. Les personnes présentes à la conférence qui violent
                        ces règles peuvent être sanctionnées, voire exclues de la conférence <em>sans
                        remboursement</em>, à la discrétion de l'équipe d'organisation de la conférence.</h4>

                        <p>Le harcèlement inclut des commentaires oraux sur le sexe, l'orientation
                        sexuelle, le handicap, l'apparence physique, le poids, l'origine, la religion,
                        les images à connotation sexuelle dans des lieux publics, les intimidations
                        délibérées, la traque, la poursuite, un harcèlement photographique ou vidéo,
                        une suite d'interruption des conférences et des autres événements, un contact
                        physique inapproprié et des avances sexuelles non désirées.</p>

                        <p>Les personnes à qui il sera demandé d'arrêter tout comportement de
                        harcèlement doivent arrêter immédiatement.</p>

                        <p>Les sponsors sont aussi sujet à la politique anti-harcèlement. En
                        particulier, les sponsors doivent s'abstenir d'utiliser toute image ou support à
                        connotation sexuelle. Ils ne doivent pas non plus engager d'activités à
                        connotation sexuelle. L'équipe du stand (y compris les volontaires) ne doivent
                        pas utiliser de vêtements, uniformes ou costumes à connotation sexuelle. Ils ne
                        doivent pas non plus créer un environnement sexualisé.</p>

                        <p>Si un participant ou une participante a un comportement de harcèlement, l'équipe d'organisation de la
                        conférence peut prendre toute action qui lui semble adéquate. Cela va d'un
                        simple avertissement à l'exclusion de la personne de la conférence sans
                        remboursement.</p>

                        <p>Si vous vous sentez victime de harcelement, si vous pensez que quelqu'un se fait harceler,
                        et plus généralement en cas de problème, merci de contacter immédiatement un membre
                        de l'organisation de l'événement. Les membres sont facilement identifiables à leur
                        t-shirt aux couleurs de l'événement.</p>

                        <p>Nous attendons des personnes présentes à l'événement qu'elles suivent ces règles dans le bâtiment
                        des conférences et des ateliers, ainsi que pendant les événements sociaux
                        relatifs à la conférence.</p>

                        <div>
                        <p><small><em>Version originale et crédit: <a href="http://2012.jsconf.us/#/about">http://2012.jsconf.us/#/about</a> &amp; <a href="http://geekfeminism.wikia.com/wiki/Conference_anti-harassment/Policy">The Ada Initiative</a><br>

                        Merci d'aider à la traduction et à l'amélioration de ce texte : <a href="https://github.com/leftlogic/confcodeofconduct.com">http://github.com/leftlogic/confcodeofconduct.com</a><br>

                        Ce texte est sous licence <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons Attribution 3.0 Unported License</a></em></small>

                        </p>
                        </div>
                    </div>
                    <!-- END FAQ Code de Conduite !-->
 
                     <!-- START FAQ Sponsors !-->
                    <div ng-show="activeSection === 'sponsors'" class="faq-content section-sponsors" ng-init="questionSponsors1 = true">
                        <h1 class="section-title text-primary">Sponsors</h1>
                        <h4 class="space-bottom-20">L’association BDX.IO, organisatrice de l’événement,
                        est composée exclusivement de bénévoles dont l’ambition est de créer
                        l’événement fédérateur des développeurs de la région. Devenir partenaire de BDX.IO
                        c’est l’occasion unique de toucher un public parfaitement ciblé et d’associer
                        votre image avec une conférence majeure des développeurs.</h4>

                        <span class="faq-question" ng-click="questionSponsors1 = !questionSponsors1">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionSponsors1, 'fa-plus-circle' : !questionSponsors1}"></i>Quelles sont les règles de participation ?</span>
                        <span class="faq-answer" ng-show="questionSponsors1">
                            La plaquette est disponible au téléchargement <a href="static/plaquette.pdf" target="_blank">ici</a>.
                        </span>
                    </div>
                    <!-- END FAQ Sponsors !-->

                    <!-- START FAQ Speakers !-->
                    <div ng-show="activeSection === 'speakers'" class="faq-content section-sponsors" ng-init="questionSpeakers1 = true">
                        <h1 class="section-title text-primary">Speakers</h1>
                        <h4 class="space-bottom-20">Toutes les informations pratiques nécessaires aux speakers.</h4>

                        <span class="faq-question" ng-click="questionSpeakers1 = !questionSpeakers1">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionSpeakers1, 'fa-plus-circle' : !questionSpeakers1}"></i>Quelles sont les modalités ?</span>
                        <span class="faq-answer" ng-show="questionSpeakers1">
                            En tant que speakers, votre place vous est, bien entendu, offerte ! On vous invite également au repas des speakers
                            qui se déroulera la veille de l'evenement : une bonne soirée en perspective avant le grand jour !
                            Dès votre participation au CFP, nous vous reservons une place Early Bird dans le cas où votre proposition ne
                            serait pas retenue, donc pas besoin de reserver votre place :) !
                        </span>

                        <span class="faq-question" ng-click="questionSpeakers2 = !questionSpeakers2">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionSpeakers2, 'fa-plus-circle' : !questionSpeakers2}"></i>Comment puis-je soumettre une proposition de talk ?</span>
                        <span class="faq-answer" ng-show="questionSpeakers2">
                           Pour proposer un talk, il est nécessaire de s'inscrire sur le <a href="http://cfp.bdx.io/" target="_blank">CFP</a>.
                           Les propositions sur le CFP sont ouvertes jusqu'à la fin Juillet, alors depechez-vous ! :)
                        </span>

                        <span class="faq-question" ng-click="questionSpeakers3 = !questionSpeakers3">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionSpeakers3, 'fa-plus-circle' : !questionSpeakers3}"></i>Quelles sont les différentes typologies de talk ?</span>
                        <span class="faq-answer" ng-show="questionSpeakers3">
                           <table class="table table-bordered space-top-10">
                            <thead>
                            <tr>
                                <th>Type</th>
                                <th>Durée</th>
                                <th>Lieu</th>
                                <th>Quand ?</th>
                                <th>Nombre de slots</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Conférence</td>
                                <td>50 minutes (questions incluses)</td>
                                <td>Amphitheatre (~150 personnes)</td>
                                <td>Matin &amp; Après-midi</td>
                                <td>20 - 24</td>
                                <td>Présentation magistrale sur un sujet donné</td>
                            </tr>
                            <tr>
                                <td>Lightning Talk</td>
                                <td>15 minutes</td>
                                <td>Amphitheatre (~150 personnes)</td>
                                <td>12h - 14h</td>
                                <td>16 - 20</td>
                                <td>Présentation rapide/éclair, discussions, sur un sujet donné</td>
                            </tr>
                            <tr>
                                <td>Hand's on</td>
                                <td>1 heure 50 minutes</td>
                                <td>Salle de TD (~30 personnes)</td>
                                <td>Matin &amp; Après-midi</td>
                                <td>3</td>
                                <td>Atelier. Les participants viennent avec leur laptop et peuvent pratiquer en même temps que le speaker.</td>
                            </tr>
                            </tbody>
                        </table>
                        </span>
                        
                        <span class="faq-question" ng-click="questionSpeakers4 = !questionSpeakers4">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionSpeakers4, 'fa-plus-circle' : !questionSpeakers4}"></i>Dois-je prévoir de prendre ma place en cas de refus de mes propositions sur le CFP ?</span>
                        <span class="faq-answer" ng-show="questionSpeakers4">
                           Non, l'équipe BDX I/O conserve un stock de places au tarif Early Bird pour les participants au CFP qui se seraient vu
                           refuser toutes leurs propositions.<br/>
                           Si vous faites malheureusement parti de ces personnes, nous vous enverrons un mail vous précisant la marche à suivre
                           pour bénéficier de la place au tarif préférentiel, peu de temps avant l'annonce du programme.
                        </span>
                    </div>
                    <!-- END FAQ Speakers !-->

                     <!-- START FAQ Participants !-->
                    <div ng-show="activeSection === 'participants'" class="faq-content section-sponsors" ng-init="questionParticipants1 = true">
                        <h1 class="section-title text-primary">Participants</h1>
                        <h4 class="space-bottom-20">Toutes les informations pratiques nécessaires aux participants.</h4>

                        <span class="faq-question" ng-click="questionParticipants1 = !questionParticipants1">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionParticipants1, 'fa-plus-circle' : !questionParticipants1}"></i>Comment puis-je acheter un billet ? Quels sont les différents pricings ?</span>
                        <span class="faq-answer" ng-show="questionParticipants1">
                           L'achat des billets est possible <a href="http://reg.bdx.io">ici</a> (également intégré sur la page d'accueil du site bdx.io).
                           <br>
                           Chaque billet donne droit à un accès à la journée de conférence, mais également au petit déjeuner, au buffet du midi et au goûter. 
                           <br><br>
                           Le détail des pricings est le suivant :
                           <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Tarif</th>
                                    <th>Nombre de places</th>
                                    <th>Prix</th>
                                    <th>Bon à savoir</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Etudiant(e)</td>
                                    <td>32</td>
                                   <td>8 €</td>
                                   <td>Il vous sera demandé une carte d'étudiant(e) en cours de validité lors de la récupération de votre badge à l'entrée</td>
                                </tr>
                                <tr>
                                    <td>Early Bird</td>
                                    <td>128</td>
                                   <td>32 €</td>
                                    <td>Vous nous faites confiance en achetant une place alors que le programme n'est même pas dévoilé.</td>
                                </tr>
                                <tr>
                                    <td>Golden ticket</td>
                                    <td>16</td>
                                   <td>32 €</td>
                                    <td>
                                    Il s'agit d'un <strong>Early bird++</strong> qui vous donne accès aux votes sur les propositions du call for paper. 
                                    Vous pourrez ainsi avoir un poid sur les talks qui seront sélectionnées pour la conférence.<br/>
                                    Mais à grands pouvoirs, grandes responsabilités : il vous faudra voter sur plus de 85% des propositions soumises dans le 
                                    CFP pour être considéré comme un vrai jury du CFP et ainsi bénéficier d'une invitation au repas des speakers qui aura lieu 
                                    la veille de l'évènement.
                                    </td>
                                </tr>
                                <tr>
                                    <td>Normal</td>
                                    <td>&lt;160</td>
                                   <td>64 €</td>
                                    <td>Le nombre de places au tarif normal n'est pas déterminé à l'avance, car il dépend d'énormément de facteurs (nombre de speakers, de sponsors etc..). Le sold out interviendra à 512 participants !</td>
                                </tr>
                                </tbody>
                            </table>
                            <br>
                            Pour tous les participants, il ne sera pas nécessaire pour vous d'imprimer les billets.<br>
                            <br>
                            <strong>A noter</strong> que les billets ne seront réservés qu'après paiement :
                            <ul>
                                <li>Via site de ticketing, par CB</li>
                                <li>Après emission de facture, par virement bancaire (avec supplement de 50€ pour frais de dossier)</li>
                            </ul>
                        </span>

                        <span class="faq-question" ng-click="questionParticipants2 = !questionParticipants2">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionParticipants2, 'fa-plus-circle' : !questionParticipants2}"></i>Comment puis-je transférer une place achetée ?</span>
                        <span class="faq-answer" ng-show="questionParticipants2">
                            Il vous est possible d'effectuer une demande de transfert de place en renseignant
                            <a href="https://docs.google.com/forms/d/1frw60cRyDT6phIYwy-uZF-jyCr3GDJav_PfXaKGvzYA/viewform" target="_blank">ce formulaire</a>.
                        </span>

                        <span class="faq-question" ng-click="questionParticipants3 = !questionParticipants3">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionParticipants3, 'fa-plus-circle' : !questionParticipants3}"></i>Comment puis-je me rendre à la conférence ?</span>
                        <span class="faq-answer" ng-show="questionParticipants3">
                            La conférence se déroulera à <strong>l'ENSEIRB-MATMECA</strong> qui se situe sur le campus universitaire de Talence.
                            <br>
                            <br>
                            Voici un plan d'accès :
                             <conference-location></conference-location>
                        </span>
                    </div>
                    <!-- END FAQ Participants !-->

                     <!-- START FAQ Jury !-->
                    <div ng-show="activeSection === 'jury'" class="faq-content section-sponsors" ng-init="questionJury1 = true">
                        <h1 class="section-title text-primary">Jury</h1>
                        <h4 class="space-bottom-20">
                        Le rôle des membres du jury est de selectionner les talks qui seront présentés lors de la prochaine édition de BDX I/O.<br/>
                        Cette année, les membres du jury seront sélectionnés parmi les participants à la conférence, via les places Golden Ticket.
                        </h4>

                        <span class="faq-question" ng-click="questionJury1 = !questionJury1">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionJury1, 'fa-plus-circle' : !questionJury1}"></i>Quelles sont les règles de participation ?</span>
                        <span class="faq-answer" ng-show="questionJury1">
                            Pour être membre du jury, il faut remplir les conditions suivantes :
                            <ul>
                                <li>Avoir acheté une place Golden Ticket</li>
                                <li>Avoir voté pour au moins 85% des conférences sur le site du CFP.</li>
                                <li>Ne pas avoir proposé de sujet à la conférence.</li>
                            </ul>
                            <br>
                            Vous aurez droit à :
                            <ul>
                                <li>Influer sur le programme de votre conférence préférée via vos votes.</li>
                                <li>Etre au courant, avant tout le monde, des tendances de talks qui seront présents à la conférence.</li>
                                <li>Connaître les formats/sujets de propositions qui séduisent les membres du jury.</li>
                                <li>Participer au repas des speakers, moment d'échange privilégié avec les référents dans leur domaine le temps d'une soirée.</li>
                            </ul>
                        </span>
                        
                        <div style="display:none">
                        <span class="faq-question" ng-click="questionJury2 = !questionJury2">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionJury2, 'fa-plus-circle' : !questionJury2}"></i>Quel est le processus de selection ?</span>
                        <span class="faq-answer" ng-show="questionJury2">
                           Les membres du jury sont tous membres des différentes communautés techniques bordelaises.
                           Ils ont pour mission de selectionner, au travers de leurs votes sur le CFP, les talks qui seront au programme de l'édition 2015 de bdx.io.
                           <br>
                           <br>
                           Enfin, dans l'optique d'équilibrer le contenu de la conférence, une dernière selection sera réalisée avant création définitive du programme.
                        </span>
                        </div>
                    </div>
                    <!-- END FAQ Jury !-->
                </div>
            </div>
    </section>
    `
}
export class FAQPageController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}