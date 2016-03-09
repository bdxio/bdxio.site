export class LocationContentComponent implements ng.IDirective {
    public controller: Function = LocationContentController;
    public template: string = `
        <section class="infos-location-content wrapper mb-wrapper force-space-top-30">
            <div class="row">
                 <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-4 item-info-location">
                            <h4 class="title text-white">A 10 minutes de <br> Bordeaux</h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-4 item-info-location">
                            <h4 class="title text-white">6 amphis <br> 5 Tracks en parallèle <br> + 40 conférences</h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-4 item-info-location">
                            <h4 class="title text-white">~15 Communautés <br> 400 Développeur(se)s</h4>
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
                    choisissez le <a class="link link-white">Bus ou le Tram</a>.
                    </h4>
                    <br>
                    <h4>  Si vous venez en voiture, le parking
                    de l'Université est <br> ouvert et gratuit.
                    </h4>
                </div>
            </div>

            <div class="col-sm-12 col-md-6 no-padding map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11316.506533089103!2d-0.6488516!3d44.8393544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1457533369309"
              width="100%" height="100%"
              frameborder="0"
              style="border:0"
              allowfullscreen>
              </iframe>
            </div>
        </section>

        <section class="infos-location-content wrapper">
            <div class="row">
                <div class="col-sm-12 no-padding">
                    <h1 class="section-title text-primary space-top-40 space-bottom-40">Quelques chiffres !</h1>
                </div>

                 <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-3 item-conf force-inner-space-top-20">
                            <i class="fa fa-calendar-o"></i>
                            <h4 class="title text-white">LE 17 OCTOBRE 2014</h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-1">&nbsp;</div>

                        <div class="col-xs-12 col-sm-12 col-md-3 item-conf force-inner-space-top-10">
                           <i class="fa fa-commenting"></i>
                            <h4 class="title text-white">SDBX4, <br> UN ÉVÈNEMENT DE LA SEMAINE DIGITALE</h4>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-1">&nbsp;</div>

                        <div class="col-xs-12 col-sm-12 col-md-3 item-conf force-inner-space-top-10">
                            <i class="fa fa-map-marker"></i>
                            <h4 class="title text-white">À L'ENSEIRB, INST. POLYTECHNIQUE DE BORDEAUX</h4>
                        </div>
                    </div>
                 </div>

                 <div class="col-sm-12 space-top-30 space-bottom-30">
                    <div class="row text-center">
                       <h2 class="text-secondary">
                           <strong class="text-primary">300</strong> PARTICIPANTS, DONT
                           <strong class="text-primary">27</strong> ÉTUDIANTS,
                           <strong class="text-primary">43</strong> TALKS ET
                           <strong class="text-primary">42</strong> SPEAKERS
                       </h3>
                    </div>
                 </div>
            </div>
        </section>
    `
}
export class LocationContentController {
    public static $inject: Array<string> = [];

    constructor() {
    }
}