import IScope = angular.IScope;
export class ConferenceLocationComponent implements ng.IDirective {

    public template:string = `
        <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJv4tyl4HYVA0RLvkdcxUEhOw&key=AIzaSyDg2ljVHAdQPTt8kJgK-EAmdljqZzV_fXs"
                width="100%" height="100%"
                frameborder="0"
                style="border:0"
                allowfullscreen>
      </iframe>
    `;
}
