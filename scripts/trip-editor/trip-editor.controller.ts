import { Inject } from "../decorators/decorators";

@Inject("$routeParams")
export class TripEditorController {
    public tripName: string;
    public stops: Stop[];
    public errorMessage: string;
    public isBusy: boolean = true;

    constructor(routeParams: ng.route.IRouteParamsService) {
        this.tripName = routeParams["tripName"];
    }
}