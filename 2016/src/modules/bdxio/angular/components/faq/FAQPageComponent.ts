export class FAQPageComponent implements ng.IDirective {
    public controller: Function = FAQPageController;
    public template: string = `
    <section class="faq wrapper">
            <div class="row">
               <ul class="col-sm-3 nav nav-pills nav-stacked space-top-25">
                    <li ng-class="{'active' : activeSection === 'sponsors'}"><a ng-click="activeSection = 'sponsors'" ng-init="activeSection = 'sponsors'">Sponsors</a></li>
                    <li ng-class="{'active' : activeSection === 'speakers'}"><a ng-click="activeSection = 'speakers'">Speakers</a></li>
                    <li ng-class="{'active' : activeSection === 'participants'}"><a ng-click="activeSection = 'participants'">Participants</a></li>
                    <li ng-class="{'active' : activeSection === 'jury'}" ><a ng-click="activeSection = 'jury'">Jury</a></li>
                </ul>

                <div class="col-sm-9 faq-container-sections">

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
                            La plaquette est disponible au téléchargement <a href="static/plaquette2016.pdf" target="_blank">ici</a>.
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
                    </div>
                    <!-- END FAQ Speakers !-->

                     <!-- START FAQ Participants !-->
                    <div ng-show="activeSection === 'participants'" class="faq-content section-sponsors" ng-init="questionParticipants1 = true">
                        <h1 class="section-title text-primary">Participants</h1>
                        <h4 class="space-bottom-20">Toutes les informations pratiques nécessaires aux participants.</h4>

                        <span class="faq-question" ng-click="questionParticipants1 = !questionParticipants1">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionParticipants1, 'fa-plus-circle' : !questionParticipants1}"></i>Comment puis-je acheter un billet ? Quels sont les différents pricings ?</span>
                        <span class="faq-answer" ng-show="questionParticipants1">
                           L'achat des billets est possible ici (également intégré sur la page d'accueil du site bdx.io).
                           <br>
                           <br>
                           Le détail des pricings est le suivant :
                           <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Tarif</th>
                                    <th>Nombre de places</th>
                                    <th>Prix</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Etudiant</td>
                                    <td>32</td>
                                    <td>8 €</td>
                                </tr>
                                <tr>
                                    <td>Early Bird</td>
                                    <td>128</td>
                                    <td>32 €</td>
                                </tr>
                                <tr>
                                    <td>Normal</td>
                                    <td>~256</td>
                                    <td>64 €</td>
                                </tr>
                                </tbody>
                            </table>
                            <br>
                            Pour tous les participants, il ne sera pas nécessaire pour vous d'imprimer les billets.<br>
                            Pour les étudiants, une carte d'étudiant sera demandée à l'entrée de la conférence.
                            <br>
                            <br>
                            <strong>A noter</strong>que les billets ne seront réservés qu'après paiement :
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
                        <h4 class="space-bottom-20">Nous avons, comme pour l'édition précédente, sollicité les membres des différentes communautés techniques
                        bordelaises pour constituer le jury bdx.io. Le rôle des membres du jury est
                        de selectionner les talks qui seront présentés lors de la prochaine édition.</h4>

                        <span class="faq-question" ng-click="questionJury1 = !questionJury1">
                        <i class="fa" ng-class="{'fa-minus-circle' : questionJury1, 'fa-plus-circle' : !questionJury1}"></i>Quelles sont les règles de participation ?</span>
                        <span class="faq-answer" ng-show="questionJury1">
                            Pour être membre du jury, il faut remplir les conditions suivantes :
                            <ul>
                                <li>Avoir voté pour au moins 85% des conférences (sur le site du CFP)</li>
                                <li>Ne pas avoir proposé de sujet à la conférence.</li>
                                <li>Etre présent à la réunion du choix des talks.</li>
                            </ul>
                            <br>
                            Vous aurez droit à :
                            <ul>
                                <li>1 place offerte à la conférence.</li>
                                <li>1 place offerte au repas des speakers.</li>
                            </ul>
                        </span>

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