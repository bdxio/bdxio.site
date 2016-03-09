export class AppFooterComponent implements ng.IDirective {
    public template: string = `
        <footer class="footer wrapper" itemscope itemtype="https://schema.org/WPFooter" >
         <div class="row">
                <div class="col-sm-12 col-md-8 element-centered">
                    <div class="row sign-newsletter text-right">
                        <span class="col-xs-12 col-md-4 col-lg-4 mb-text-center mb-space-bottom-15">
                            <h5 class="label-newsletter text-white font-bold">Vous souhaitez être tenu(e) informé(e) ?</h5>
                            <h4 class="label-newsletter highlight-text-italic">Inscrivez-vous à la newsletter</h4>
                        </span>

                         <span class="col-xs-12 col-md-5 col-lg-4 space-top-2 mb-space-bottom-15">
                            <input class="input-newsletter" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                        </span>

                          <span class="col-xs-12 col-md-3 col-lg-4 text-left mb-text-center space-top-2">
                             <button class="btn btn-primary btn-md has-icon-left" disabled><i class="fa fa-pencil"></i>S’inscrire</button>
                        </span>
                    </div>

                    <ul class="row footer-list-networks space-top-30 no-padding">
                         <li class="footer-item-networks"><a href="https://twitter.com/bdxio?lang=fr" target="_blank"><i class="bdx-twitter"></i></a></li>
                         <li class="footer-item-networks"><a href="http://lanyrd.com/2015/bdxio/" target="_blank"><i class="bdx-lanyrd"></i></a></li>
                         <li class="footer-item-networks"><a href="https://www.facebook.com/bdxio" target="_blank"><i class="bdx-facebook"></i></a></li>
                         <li class="footer-item-networks"><a href="mailto:team@bdx.io"><i class="bdx-mail"></i></a></li>
                    </ul>

                    <div clas="row space-top-30">
                        <div class="col-xs-12 text-center">
                            <h4 class="text-grey">NOS SPONSORS GOLD</h4>
                        </div>

                        <ul class="col-xs-12 text-center footer-list-sponsors">
                            <li class="footer-item-sponsors capgemini"><a href="https://www.fr.capgemini.com/" target="_blank"></li>
                            <li class="footer-item-sponsors doyoudreamup"><a href="https://www.fr.capgemini.com/" target="_blank"></li>
                        </ul>
                    </div>

                    <div clas="row space-top-30">
                        <div class="col-xs-12 text-center">
                            <h6 class="text-white">© Copyright 2014-2016 BDX.io - Tous droits réservés</h6>
                        </div>
                    </div>
                </div>
          </div>
        </footer>
    `;
}