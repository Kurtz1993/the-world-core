import { Inject } from "./decorators/decorators";

@Inject("$stateProvider", "$urlRouterProvider")
export class TheWorldConfig {
    constructor(stateProvider: ng.ui.IStateProvider, urlRouterProvider: ng.ui.IUrlRouterProvider) {
        stateProvider
            .state("theWorld", {
                url: "/"
            });

        urlRouterProvider.otherwise("/");
    }
}