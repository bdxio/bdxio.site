"use strict";

function errorMessage(msg, notificationType) {
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

function rejectDeferred(deferred, msg, notificationType) {
    notificationType = notificationType || "console";

    if(_.isString(deferred)){
        throw "Bad rejectDeferred parameter (missing deferred) !";
    }

    return function refectDeferredImpl(cause){
        errorMessage(msg, notificationType)(cause);
        deferred.reject(msg);
    };
}

function resolvedDefer(result){
    var $q = angular.element($(document.body)).injector().get("$q");
    var defer = $q.defer();
    defer.resolve(result);
    return defer;
}
