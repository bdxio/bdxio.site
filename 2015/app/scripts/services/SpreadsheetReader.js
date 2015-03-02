"use strict";

angular.module('bdxio.app')
    .factory('SpreadsheetReader', function ($q) {

    var SpreadsheetReader = {
        read: function(spreadsheetRepresentation, descriptor) {
            var defer = $q.defer();

            var title = spreadsheetRepresentation.feed.title["$t"];

            // First, reading every cells and building cell object like this :
            // { r: 1, c: "A", v: "Prénom" }
            var cells = _.map(spreadsheetRepresentation.feed.entry, function(spEntry){
                var cellCoords = /([A-Z]+)([0-9]+)/g.exec(spEntry.title["$t"]);
                return { v: spEntry.content["$t"], r: Number(cellCoords[2]), c: cellCoords[1] };
            });

            // Now grouping cells by line and building result
            var results = _(cells)
                .filter(function(cell) {
                    return cell.r >= descriptor.firstRow;
                }).groupBy('r').mapValues(function(cells){
                    var lineObj = {};
                    _.each(cells, function(cell){
                        lineObj[descriptor.columnFields[cell.c]] = cell.v;
                    });
                    return lineObj;
                }).values().filter(function(obj) {
                    var emptyRequiredColumns = _.filter(descriptor.fieldsRequiredToConsiderFilledRow, function (fieldRequiredToConsiderFilledRow) {
                        return !obj[fieldRequiredToConsiderFilledRow];
                    });
                    return emptyRequiredColumns.length === 0;
                }).value();

            if(descriptor.sortBy){
                results = _.sortBy(results, descriptor.sortBy);
            }

            if(descriptor.postProcess) {
                results = descriptor.postProcess(results);
            }
            defer.resolve(results);

            return defer.promise;
        }
    };
    return SpreadsheetReader;
});

