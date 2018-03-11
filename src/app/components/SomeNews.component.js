import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SomeNews extends Component {
    constructor() {
        super();
    }

    goToCarouselPage(index) {
            console.log('yeah !', index);
    }

    render() {
        return (
            <div>
               <div>
                   <div>
                       <h3>Nos Actualités en bref</h3>
                       <h6>Que se passe-t-il avec BDX i/o ?</h6>
                   </div>

                   <div>
                       <div>
                           <div>image</div>
                           <div>Titre</div>
                           <div>content extract  hjhjhj jjijhjjhj jjjjjjjj jnjkjnjkjnjkjnj kjnjkjnjknjkkn knknknknknk </div>
                           <div><Link to={'/news#'}>Lire l'article ></Link></div>
                       </div>
                   </div>

                   <div>
                       <button type="button" onClick={() => {this.goToCarouselPage('0')}}>•</button>
                       <button type="button" onClick={() => {this.goToCarouselPage('1')}}>•</button>
                       <button type="button" onClick={() => {this.goToCarouselPage('2')}}>•</button>
                   </div>
               </div>
                <div>
                    <Link to={"/speakers"}>Les voir tous</Link>
                </div>
            </div>
        );
    }
}

export default SomeNews