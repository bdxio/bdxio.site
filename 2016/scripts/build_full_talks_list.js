var _ = require('lodash');
var request = require("request");

var baseUrl = "http://cfp.bdx.io/api/conferences/BdxIO2016/talks";
var baseRequestOpts = {
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10,
    headers: {
        'User-Agent': 'Mozilla/5.0'
    }
};

request(_.extend(baseRequestOpts, {uri: baseUrl}), function (error, response, body) {
        var talks = JSON.parse(body);
        var fullTalks = _.map(talks, function (talk) {
            _.map(talk.speakers, function (speaker) {
                request(_.extend(baseRequestOpts, {uri: speaker.link.href}), function (error, response, body) {
                    _.extend(speaker, JSON.parse(body));
                });
                return speaker;
            });
            return talk;
        });

        setTimeout(function () {
            console.log(JSON.stringify(fullTalks));
        }, 5000);
    }
);
