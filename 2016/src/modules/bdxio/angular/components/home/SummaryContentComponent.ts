export class SummaryContentComponent implements ng.IDirective {
    public controller: Function = SummaryContentController;
    public template: string = `
        <section class="summary-content wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="section-title text-primary space-top-40 space-bottom-40">Thèmes de la conférence</h1>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center" data-sr='scale up 20% reset'>
                        <div class="content-cat-summary">
                            <i class="bdx-design"></i>
                            <span class="title">Design, <br> UI & UX</span>
                        </div>
                    </div>

                    <div class="container-text-summary" data-sr="enter left, move 24px, spin 30deg, reset">
                        <h4>
                            CSS, Ergonomie & Design.
                            <br>
                            Experience utilisateur.
                        </h4>
                    </div>
                </div>

                 <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center" data-sr='scale up 30% reset'>
                        <div class="content-cat-summary">
                             <i class="bdx-server"></i>
                             <span class="title">Backends, <br> Cloud & BigData</span>
                        </div>
                    </div>

                    <div class="container-text-summary" data-sr="enter left, move 24px, spin 30deg, reset">
                        <h4>
                            Frameworks côté serveur.
                             <br>
                            Cloud.
                            <br>
                            Base de données NoSQL.
                        </h4>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center" data-sr='scale up 40% reset'>
                        <div class="content-cat-summary">
                            <i class="bdx-phone"></i>
                            <span class="title">Frontend Web, Mobile <br> et VideoGames</span>
                        </div>
                    </div>

                    <div class="container-text-summary" data-sr="enter left, move 24px, spin 30deg, reset">
                        <h4>
                            Frameworks côté client.
                            <br>
                            Application web / mobiles (hybrides, natives) / progressives.
                            <br>
                            Outillage pour les jeux vidéos.
                        </h4>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center" data-sr='scale up 50% reset'>
                        <div class="content-cat-summary">
                            <i class="bdx-tools"></i>
                            <span class="title">Tooling</span>
                        </div>
                    </div>

                    <div class="container-text-summary" data-sr="enter left, move 24px, spin 30deg, reset">
                        <h4>
                            Outillage pour la productivité.
                             <br>
                            Outillage pour le build.
                             <br>
                            IDE.
                        </h4>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center" data-sr='scale up 60% reset'>
                        <div class="content-cat-summary">
                            <i class="bdx-networks"></i>
                            <span class="title">Internet des objets <br> & marchés émergents</span>
                        </div>
                    </div>

                    <div class="container-text-summary" data-sr="enter left, move 24px, spin 30deg, reset">
                        <h4>
                            A la recherche des idées disruptives au service du monde de demain.
                        </h4>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center" data-sr='scale up 70% reset'>
                        <div class="content-cat-summary">
                            <i class="bdx-settings"></i>
                            <span class="title">Conception, Architecture & <br> Pratiques de dev</span>
                        </div>
                    </div>

                    <div class="container-text-summary" data-sr="enter left, move 24px, spin 30deg, reset">
                        <h4>
                            Méthodologie comme SCRUM ou Kanban.
                            <br>
                            Principes d'artitecture.
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    `
}
export class SummaryContentController {
    public static $inject: Array<string> = [];

    public availableSummary: Array<{ title }> = [
        { title: "Je déclare le CFP...OUVERT !"},
    ];

    constructor() {
        window['sr'] = new scrollReveal();
    }
}