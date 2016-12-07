import { Inject } from "./decorators/decorators";

@Inject("$routeProvider")
export class TheWorldConfig {
    constructor(routeProvider: ng.route.IRouteProvider) {
        routeProvider.when("/", {
            controller: "TripsController",
            controllerAs: "vm",
            templateUrl: "trips/trips.tpl.html"
        });

        routeProvider.otherwise({ redirectTo: "/" });
    }
}