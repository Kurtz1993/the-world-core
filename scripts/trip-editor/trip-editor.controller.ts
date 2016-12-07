import { Inject } from "../decorators/decorators";

@Inject("$routeParams", "TripService")
export class TripEditorController {
    public tripName: string;
    public errorMessage: string;
    public stops: Stop[] = [];
    public isBusy: boolean = true;

    constructor(routeParams: ng.route.IRouteParamsService, private _tripService: ITripService) {
        this.tripName = routeParams["tripName"];

        this._tripService
            .getStops(this.tripName)
            .then((res) => {
                angular.copy(res.data, this.stops);
            })
            .catch(() => {
                this.errorMessage = "Failed to load stops";
            })
            .finally(() => {
                this.isBusy = false;
            });
    }
}