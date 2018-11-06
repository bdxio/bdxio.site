import React, { Component } from "react";
import displayPage from "./_PageContainer";
import Header from "../components/common/Header.component";

class Live extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header title="LES DIRECTS" />
        <div className="live-container">
          <div className="row align-center live-container-content">
            <div className="columns small-12 large-5 large-offset-1 video">
              <h4>/ GRAND AMPHI</h4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1EKBxE6H-IE"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="columns small-12 large-5 large-offset-1 video">
              <h4>/ AMPHI A</h4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/RmHVKgNF01w"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <div className="row live-container-content">
            <div className="columns small-12 large-5 large-offset-1 video">
              <h4>/ AMPHI B</h4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4mtDueKf0tg"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="columns small-12 large-5 large-offset-1 video">
              <h4>/ AMPHI D</h4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/C64OkI9xsEU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <div className="row live-container-content">
            <div className="columns small-12 large-5 large-offset-1 video">
              <h4>/ AMPHI E</h4>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/soqpUPRW5Qw"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default displayPage(Live);
