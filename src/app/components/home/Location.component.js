import React, { Component } from "react";
import IframeContainer from "../common/IframeContainer.component";

class Location extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="row location align-center location-infos">
        <div className="columns small-12 medium-4 large-3 location-infos-place">
          A 10 minutes de <br />> Bordeaux
        </div>
        <div className="columns small-12 medium-4 large-3 location-infos-amphis">
          6 amphis en parallèle <br />> 50 conférences
        </div>
        <div className="columns small-12 medium-4 large-3 location-infos-dev">
          15 communautés <br />> 500 Développeur·se·s
        </div>

        <div className="columns small-12 location-site">
          <div className="row">
            <div className="columns shrink location-site-place">
              <h5>Palais des congrès</h5>
              <div>
                Avenue Jean Gabriel Domergue
                <br />
                33300 Bordeaux
              </div>
              <br />
              <div>
                Pour nous rejoindre en transport en commun,
                <br />
                choisisser le Bus ou le Tram.
              </div>
              <br />
              <div>
                Si vous venez en voiture, le parking du Palais des congrès est ouvert et gratuit.
              </div>
            </div>

            <div className="columns auto location-site-map">
              <IframeContainer
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1SdobaspVQ0Rfo7syUJBOcE&key=AIzaSyBQYTDJ5joswWG8lQ-Wv9MGYUqHhD9LfCc"
                height="300"
                width="100%"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Location;
