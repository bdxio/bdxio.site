import React, { Component } from 'react';

class TicketingAccess extends Component {
    constructor() {
        super();
    }

    render() {
        return (
           <div>
               <div>
                   <div>32 EUROS / Early Bird</div>
                   <div>Individuel</div>
                   <div>
                       <div>Accès a partir de 8H30 au <span>petit déjeuner</span></div>
                       <div>Repas <span>offert</span> le midi</div>
                       <div>Accès aux stands</div>
                       <div>Accès à <span>toutes</span> les conférences</div>
                   </div>
               </div>
               <div>
                   <div>64 EUROS / Golden Ticket</div>
                   <div>Individuel</div>
                   <div>
                       <div>Donner votre <span>avis</span> concernant les talks</div>
                       <div>Invitation au <span>diner speaker</span> si vous votez au moins pour 80% des talks</div>
                       <div>Accès a partir de 8H30 au <span>petit déjeuner</span></div>
                       <div>repas <span>offert</span> le midi</div>
                       <div>Accès aux stands</div>
                       <div>Accès à <span>toutes</span> les conférences</div>
                   </div>
               </div>

               <div>
                   <div>64 EUROS / Classic</div>
                   <div>Individuel</div>
                   <div>
                       <div>Accès a partir de 8H30 au <span>petit déjeuner</span></div>
                       <div>Repas <span>offert</span> le midi</div>
                       <div>Accès aux stands</div>
                       <div>Accès à <span>toutes</span> les conférences</div>
                       <div>Soutenez l'événement</div>
                   </div>
               </div>
           </div>
        );
    }
}

export default TicketingAccess