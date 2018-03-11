import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SomeSpeakersPresentation extends Component {
    constructor() {
        super();
    }
/* TODO add fetch to get 4 speakers randomly */
    render() {
        return (
            <div>
               <div>
                   <div>
                       <h3>Nos speakers</h3>
                       <h6>On vous a choisi quelques profils de façon aléatoire de façon à vous mettre l'eau à la bouche</h6>
                   </div>


                   <div>
                       <div>
                           <div>photo</div>
                           <div>text</div>
                       </div>
                       <div>
                           <div>photo</div>
                           <div>text</div>
                       </div>
                       <div>
                           <div>text</div>
                           <div>photo</div>
                       </div>
                       <div>
                           <div>text</div>
                           <div>photo</div>
                       </div>
                   </div>
               </div>
                <div>
                    <Link to={"/speakers"}>Les voir tous</Link>
                </div>
            </div>
        );
    }
}

export default SomeSpeakersPresentation