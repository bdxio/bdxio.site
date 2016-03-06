import IPromise = angular.IPromise;
export interface ISharedModel {
    data(key: string): string;
    dataLoaded: IPromise<void>;
}