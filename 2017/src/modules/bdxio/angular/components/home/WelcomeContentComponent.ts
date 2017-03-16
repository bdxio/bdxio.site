export class WelcomeContentComponent implements ng.IDirective {
    public controller: Function = WelcomeContentController;
    public template: string = `
        <section class="welcome-home wrapper">
            <div class="row">
                <div class="col-sm-6" data-sr="opacity 0.5 1s, reset">
                     <h2 class="text-white">
                         Eyh ! On vous prépare l'édition 2017 de BDX I/O !
                     </h2>
                     <h4 class="text-white">
                        <b>Merci !</b>
                        Un grand merci à tous de votre participation à l'édition 2016 de bdx.io ! 
                        <br/>
                        Lors de cette édition, vous avez été très nombreux à nous soutenir et à nous encourager, et on compte bien remettre ça en 2017 ! 
                        <br/>
                        A très vite !
                        <br/><br/>
                        <!--Le programme de l'évènement est disponible sur l'application<br/>-->
                        <!--<a class="link link-white" href="http://www.voxxr.in/" target="_blank">Voxxrin</a> (en web, sur android, et sur iPhone).-->
                        <!--<br/>-->
                        <!--<br/>-->
                        <!--Vous pouvez également visiter la page <a class="link link-white" href="http://lanyrd.com/2016/bdxio/" target="_blank">Lanyrd</a> de l'évènement.-->
                     </h4>
                </div>
                <div class="col-sm-6" data-sr="opacity 0.5 1s, reset">
                        <img src="https://cdn.rawgit.com/bdxio/static/cecd4243/members/_W1A4520.jpg" width="700px"/>
                </div>
                <a href="https://www.youtube.com/playlist?list=PLUJzERpatfsXGv1q1kolSgriwVZXRqKVw"
                class="btn-view-talks btn btn-primary btn-xlg has-icon-left" target="_blank">
                     <i class="fa fa-play"></i>Vidéos des talks 2016
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