export class WelcomeContentComponent implements ng.IDirective {
    public controller: Function = WelcomeContentController;
    public template: string = `
        <section class="welcome-home wrapper">
            <div class="row">
                <div class="col-sm-12" data-sr="opacity 0.5 1s, reset">
                     <h2 class="text-white">
                         C'est décidé bdx.io édition 2016 se déroulera le <br>
                         Vendredi 21 Octobre 2016 à l'ENSEIRB-MATMECA !
                     </h2>
                      <h4 class="text-white">
                        Le programme de l'évènement est disponible sur l'application<br>
                        <a class="link link-white" href="http://www.voxxr.in/" target="_blank">Voxxrin</a> (en web, sur android, et sur iPhone).
                        <br>
                        <br>
                        Vous pouvez également visiter la page <a class="link link-white" href="http://lanyrd.com/2016/bdxio/" target="_blank">Lanyrd</a> de l'évènement.
                     </h4>
                </div>

                <a href="https://www.youtube.com/channel/UCA7pEYY0BlgCdpbnjhCDezQ/videos"
                class="btn-view-talks btn btn-primary btn-xlg has-icon-left" target="_blank">
                     <i class="fa fa-play"></i>Vidéos des talks 2015
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