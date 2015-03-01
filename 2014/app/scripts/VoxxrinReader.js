"use strict";

angular.module('bdxioModule').factory('VoxxrinReader', function ($q, $http) {
    var VoxxrinReader = {
        readDaySchedule: function(eventId, dayIdx, idPrefix){
            var defer = $q.defer();

            $http.get("http://app.voxxr.in/r/events/"+eventId+"/day/"+eventId+"-"+dayIdx).then(function(voxxrinDayScheduleResult){
                var daySchedule = {
                    schedule: {}
                };

                _.each(voxxrinDayScheduleResult.data.schedule, function(prez){
                    var id = new RegExp(idPrefix+"-(.+)", "gi").exec(prez.id)[1];
                    daySchedule.schedule[id] = _.extend({"__id": id}, prez);
                });

                defer.resolve(daySchedule);
            }, rejectDeferred(defer, "Error while retrieving Voxxrin day schedule for event="+eventId+" and day="+dayIdx));

            return defer.promise;
        }
    };
    return VoxxrinReader;
});

