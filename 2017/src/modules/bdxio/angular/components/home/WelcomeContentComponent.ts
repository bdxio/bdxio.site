export class WelcomeContentComponent implements ng.IDirective {
    public controller: Function = WelcomeContentController;
    public template: string = `
        <section class="welcome-home wrapper">
            <div class="row">
                <div class="col-sm-12 col-md-7" data-sr="opacity 0.5 1s, reset">
                     <h1 class="text-white title-home">
                         Eyh ! On vous prépare l'édition 2017 de BDX I/O !
                     </h1>
                     <h3 class="text-white">
                        <!--<b>Merci !</b>-->
                         <!--Un grand merci à tous de votre participation à l'édition 2016 de bdx.io !-->
                        <!--<br/>-->
                        <br/>
                        La prochaine édition se déroulera le <strong>10 Novembre 2017 à l'ENSEIRB-MATMECA</strong> : save the date !
                        <br/>
                        <br/>
                        La billetterie est maintenant fermée, merci à vous tous pour votre confiance ! On vous prépare un programme qui, 
                        nous l'esperons, vous plaira ! D'autre part, le CFP est maintenant fermé, merci à tous les orateurs pour 
                        leurs propositions !
                        <br/>
                        <br/>
                        A bientôt !
                        <!--Le programme de l'évènement est disponible sur l'application<br/>-->
                        <!--<a class="link link-white" href="http://www.voxxr.in/" target="_blank">Voxxrin</a> (en web, sur android, et sur iPhone).-->
                        <!--<br/>-->
                        <!--<br/>-->
                        <!--Vous pouvez également visiter la page <a class="link link-white" href="http://lanyrd.com/2016/bdxio/" target="_blank">Lanyrd</a> de l'évènement.-->
                     </h3>
                </div>
                <a href="https://www.youtube.com/playlist?list=PLUJzERpatfsW5PbUcMAIOIqfCoqS7K1F1"
                class="btn-view-talks btn btn-primary btn-xlg has-icon-left" target="_blank">
                     <i class="fa fa-play"></i>Vidéos des talks 2017
                </a>
            </div>
        </section>
    `
}
export class WelcomeContentController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}