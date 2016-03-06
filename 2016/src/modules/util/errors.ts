
import IDeferred = angular.IDeferred;
export function errorMessage(msg: string, notificationType?: string): (cause:any) => void {
    return function handleError(cause) {
        var builtMessage = (msg?msg:"")+(cause&&msg?" - ":"")+(cause?"cause:"+cause:"");
        if(notificationType === "console") {
            console.error(builtMessage);
        } else if(notificationType === "info"){
            console.info(builtMessage);
        } else if(notificationType === "alert"){
            alert(builtMessage);
        } else if(notificationType === "exception"){
            throw builtMessage;
        } else {
            // No notification
        }
    };
}

export function rejectDeferred(deferred: IDeferred<any>, msg: string, notificationType?: string): (cause:any) => void {
    notificationType = notificationType || "console";

    if(_.isString(deferred)){
        throw "Bad rejectDeferred parameter (missing deferred) !";
    }

    return function refectDeferredImpl(cause){
        errorMessage(msg, notificationType)(cause);
        deferred.reject(msg);
    };
}

export function resolvedDefer<T>(result: T): IDeferred<T> {
    var $q = angular.element($(document.body)).injector().get("$q");
    var defer = $q.defer();
    defer.resolve(result);
    return defer;
}
