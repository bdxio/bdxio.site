export class AppNavMenuComponent implements ng.IDirective {
    public template: string = `
        <header class="header">
             <div class="top-header">
             <button type="button" class="btn btn-live-stream float-right">
                Livestream <span class="status-live live-off"><i class="fa fa-circle"></i>OFF</span>
             </button>
             </div>
             <nav class="navbar navbar-inverse" role="navigation">
                <div class="header-container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <i class="fa fa-bars"></i>
                        </button>
                        <a class="navbar-brand" href="#"></a>
                    </div>

                    <div class="navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li class="dropdown open">
                                <a href="#" class="dropdown-toggle"
                                    data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="true">
                                    Partenaires<i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="#" class="sponsor gold">Gold</a></li>
                                    <li><a href="#" class="sponsor silver">Silver</a></li>
                                    <li><a href="#" class="sponsor bronze">Bronze</a></li>
                                    <li><a href="#">La plaquette</a></li>
                                    <li><a href="#">Press / Média</a></li>
                                    <li><a href="#">Nos amis</a></li>
                                </ul>
                            </li>
                            <li class="dropdown open">
                                <a href="#" class="dropdown-toggle"
                                    data-toggle="dropdown" role="button"
                                    aria-haspopup="true" aria-expanded="true">
                                    Participants<i class="fa fa-angle-down"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">-</a></li>
                                </ul>
                            </li>

                            <li>
                                <a class="select" href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Programme</a>
                            </li>
                            <li class="btn-buy-ticket">
                                <div class="col-sm-8 no-padding text-right">
                                    <span>Acheter un billet</span>
                                    <span class="status-sale">Ventes Fermées</span>
                                </div>
                                <div class="col-sm-4">
                                    <i class="fa fa-ticket space-top-3"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
}