export class LocationContentComponent implements ng.IDirective {
    public controller:Function = LocationContentController;
    public template:string = `
        <section class="infos-location-content wrapper mb-wrapper force-space-top-30">
            <div class="row">
                 <div class="col-sm-12">
                    <div>
                        <div class="col-xs-12 col-sm-12 col-md-4 item-info-location" data-sr="enter bottom, move 24px, reset">
                            <h4 class="title text-white">A 10 minutes de <br> Bordeaux</h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-4 item-info-location" data-sr="enter bottom, move 24px, reset">
                            <h4 class="title text-white">6 amphis en parallèle<br> &gt; 50 conférences</h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-4 item-info-location" data-sr="enter bottom, move 24px, reset">
                            <h4 class="title text-white">~15 Communautés <br> &gt; 500 Développeur(se)s</h4>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
        <section class="row detail-location-content">
            <div class="col-sm-12 col-md-6 adress inner-space-top-20">
                <div class="content-infos-adress">
                    <h3 class="highlight-text-bold">ENSEIRB</h3>
                    <adress>
                        <h4>1 Avenue du docteur Albert Schweitzer <br> 33400 Talence</h4>
                    </adress>
                    <br>
                    <h4>Pour nous rejoindre en transport en commun,<br>
                    choisissez le <a href="http://www.infotbc.com/" class="link link-white" target="_blank">Bus ou le Tram</a>.
                    </h4>
                    <br>
                    <h4>  Si vous venez en voiture, le parking
                    de l'Université est <br> ouvert et gratuit.
                    </h4>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 no-padding map">
              <conference-location></conference-location>
            </div>
        </section>

        <section class="infos-location-content wrapper">
            <div class="row">
                <div class="col-sm-12 no-padding">
                    <h1 class="section-title text-primary space-top-40 space-bottom-40">Quelques chiffres !</h1>
                </div>

                 <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 item-conf">
                            <i class="fa fa-calendar-o"></i>
                            <h4 class="title text-white"><br> LE 21 OCTOBRE 2016<br> <br></h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-4 item-conf">
                           <i class="fa fa-commenting"></i>
                            <h4 class="title text-white">SDBX5, <br> UN ÉVÈNEMENT DE LA SEMAINE DIGITALE</h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-4 item-conf">
                            <i class="fa fa-map-marker"></i>
                            <h4 class="title text-white">À L'ENSEIRB, INST. POLYTECHNIQUE DE BORDEAUX</h4>
                        </div>
                    </div>
                 </div>

                 <div class="stats col-sm-12 space-top-30 space-bottom-35">
                    <div class="row text-center">
                       <h2 class="text-secondary">
                           BDX I/O 2015 C'ÉTAIT <br>
                           <strong class="text-primary">+ de 500</strong> PARTICIPANTS, DONT
                           <strong class="text-primary">68</strong> ÉTUDIANTS,
                           <strong class="text-primary">58</strong> TALKS ET
                           <strong class="text-primary">59</strong> SPEAKERS
                       </h3>
                    </div>
                 </div>
            </div>
        </section>
    `
}
export class LocationContentController {
    public static $inject:Array<string> = [];

    constructor() {
    }
}