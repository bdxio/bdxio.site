export class SummaryContentComponent implements ng.IDirective {
    public controller: Function = SummaryContentController;
    public template: string = `
        <section class="summary-content wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <h1 class="text-primary space-top-40 space-bottom-40">Thèmes de la conférence</h1>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center">
                        <div class="content-cat-summary">
                            <i class="bdx-design"></i>
                            <span class="title">Design, <br> UI & UX</span>
                        </div>
                    </div>

                    <div class="container-text-summary">
                        <h5>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h5>
                    </div>
                </div>

                 <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center">
                        <div class="content-cat-summary">
                             <i class="bdx-server"></i>
                             <span class="title">Backends, <br> Cloud & BigData</span>
                        </div>
                    </div>

                    <div class="container-text-summary">
                        <h5>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h5>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center">
                        <div class="content-cat-summary">
                            <i class="bdx-phone"></i>
                            <span class="title">Frontend Web, Mobile <br> et VideoGames</span>
                        </div>
                    </div>

                    <div class="container-text-summary">
                        <h5>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h5>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center">
                        <div class="content-cat-summary">
                            <i class="bdx-tools"></i>
                            <span class="title">Tooling</span>
                        </div>
                    </div>

                    <div class="container-text-summary">
                        <h5>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h5>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center">
                        <div class="content-cat-summary">
                            <i class="bdx-networks"></i>
                            <span class="title">Internet des objets <br> & marchés émergents</span>
                        </div>
                    </div>

                    <div class="container-text-summary">
                        <h5>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h5>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 item-summary">
                    <div class="container-cat-summary text-center">
                        <div class="content-cat-summary">
                            <i class="bdx-settings"></i>
                            <span class="title">Conception, Architecture & <br> Pratiques de dev</span>
                        </div>
                    </div>

                    <div class="container-text-summary">
                        <h5>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    `
}
export class SummaryContentController {
    public static $inject: Array<string> = [];
    constructor() {
    }
}