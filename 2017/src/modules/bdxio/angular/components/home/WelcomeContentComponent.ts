export class WelcomeContentComponent implements ng.IDirective {
    public controller: Function = WelcomeContentController;
    public template: string = `
        <section class="welcome-home wrapper">
            <div class="row">
                <div class="col-sm-12 col-md-7" data-sr="opacity 0.5 1s, reset">
                     <h1 class="text-white title-home">
                         Merci à tous de votre participation à BDX I/O 2017 !
                     </h1>
                     <h3 class="text-white">
                        Le programme de l'évènement est disponible <a class="link link-white" href="https://bdx.io/#/program" target="_blank">ici !</a>
                        <br>
                        Les vidéos 2017 sont disponibles <a class="link link-white" href="https://www.youtube.com/playlist?list=PLUJzERpatfsW5PbUcMAIOIqfCoqS7K1F1" target="_blank">ici !</a>
                        <br>
                        <br>
                        On va essayer de dormir un peu :) et on vous dit à l'année prochaine ! 
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