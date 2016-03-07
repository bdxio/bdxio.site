
import ListIterator = _.ListIterator;
import IPromise = angular.IPromise;

export type CellContent = {$t: string};

export interface SpreadsheetContent {
    feed: {
        title: CellContent,
        entry: Array<{
            title: CellContent,
            content: CellContent
        }>
    }
}

export type LineResult = {[key: string]: string};

export interface ISpreadsheetReaderDescriptor {
    firstRow: Number;
    columnFields: LineResult;
    fieldsRequiredToConsiderFilledRow: string[];
    sortBy?: Function|Function[]|string|string[];
}

export interface IPostProcessableSpreadsheetReaderDescriptor<T,T2> extends ISpreadsheetReaderDescriptor {
    postProcess?: (results: T[]) => T2;
}

export class SpreadsheetReaderDescriptor implements ISpreadsheetReaderDescriptor {
    firstRow: Number;
    columnFields: LineResult;
    fieldsRequiredToConsiderFilledRow: string[];
    sortBy: Function|Function[]|string|string[];

    constructor(opts: ISpreadsheetReaderDescriptor) {
        _.extend(this, opts);
    }
}

export class PostProcessableSpreadsheetReaderDescriptor<T,T2> extends SpreadsheetReaderDescriptor implements IPostProcessableSpreadsheetReaderDescriptor<T,T2> {
    postProcess: (results: T[]) => T2;

    constructor(opts: IPostProcessableSpreadsheetReaderDescriptor<T,T2>) {
        super(opts);
    }
}

export class SpreadsheetReader {

    constructor(private $q: ng.IQService) {
    }

    public read<T,T2>(spreadsheetRepresentation: SpreadsheetContent, descriptor: IPostProcessableSpreadsheetReaderDescriptor<T,T2>): IPromise<T[]>|IPromise<T2> {
        let defer = this.$q.defer<T[]|T2>();

        // First, reading every cells and building cell object like this :
        // { r: 1, c: "A", v: "Prénom" }
        let cells = _.map(spreadsheetRepresentation.feed.entry, function(spEntry){
            let cellCoords = /([A-Z]+)([0-9]+)/g.exec(spEntry.title.$t);
            return { v: spEntry.content.$t, r: Number(cellCoords[2]), c: cellCoords[1] };
        });

        // Now grouping cells by line and building result
        let normalResult: T[] = <T[]>_(cells)
            .filter((cell) => cell.r >= descriptor.firstRow)
            .groupBy('r')
            .mapValues((cells) => {
                let lineObj = {};
                _.each(cells, function(cell){
                    lineObj[descriptor.columnFields[cell.c]] = cell.v;
                });
                return <T>lineObj;
            }).values()
            .filter((obj: T) => {
                let emptyRequiredColumns = _.filter(descriptor.fieldsRequiredToConsiderFilledRow, fieldRequiredToConsiderFilledRow => !obj[fieldRequiredToConsiderFilledRow]);
                return emptyRequiredColumns.length === 0;
            }).value();

        if(descriptor.sortBy){
            normalResult = _.sortBy(normalResult, descriptor.sortBy);
        }

        let result: T[]|T2 = normalResult;
        if(descriptor.postProcess) {
            result = descriptor.postProcess(normalResult);
        }

        defer.resolve(result);

        return defer.promise;
    }
}
