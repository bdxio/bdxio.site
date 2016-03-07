export class AppFooterComponent implements ng.IDirective {
    public template: string = `
        <footer class="footer wrapper" itemscope itemtype="https://schema.org/WPFooter" >
         <div class="row">
                <div class="col-sm-12 col-md-8 element-centered">
                    <div class="row sign-newsletter text-right">
                        <span class="col-xs-12 col-md-4 col-lg-4 mb-space-bottom-15">
                            <h6 class="label text-white font-bold">Vous souhaitez être tenu(e) informé(e) ?</h6>
                            <h6 class="label highlight-text-italic">Inscrivez-vous à la newsletter</h6>
                        </span>

                         <span class="col-xs-12 col-md-5 col-lg-4 space-top-2 mb-space-bottom-15">
                            <input class="input-newsletter" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                        </span>

                          <span class="col-xs-12 col-md-3 col-lg-4 text-left mb-text-right space-top-2">
                             <button class="btn btn-primary btn-md has-icon-left" disabled><i class="fa fa-pencil"></i>S’inscrire</button>
                        </span>
                    </div>

                    <ul class="footer-list-networks space-top-30">
                         <li class="footer-item-networks"><a href="https://twitter.com/bdxio?lang=fr" target="_blank"><i class="bdx-twitter"></i></a></li>
                         <li class="footer-item-networks"><a href="http://lanyrd.com/2015/bdxio/" target="_blank"><i class="bdx-lanyrd"></i></a></li>
                         <li class="footer-item-networks"><a href="https://www.facebook.com/bdxio" target="_blank"><i class="bdx-facebook"></i></a></li>
                         <li class="footer-item-networks"><a href="mailto:team@bdx.io"><i class="bdx-mail"></i></a></li>
                    </ul>
                </div>
          </div>
        </footer>
    `;
}