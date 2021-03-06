import { Inject } from "../decorators/decorators";

@Inject("$routeParams", "TripService")
export class TripEditorController {
    public tripName: string;
    public errorMessage: string;
    public stops: Stop[] = [];
    public isBusy: boolean = true;
    public newStop: Stop = {}

    constructor(routeParams: ng.route.IRouteParamsService, private _tripService: ITripService) {
        this.tripName = routeParams["tripName"];

        this._tripService
            .getStops(this.tripName)
            .then((res) => {
                angular.copy(res.data, this.stops);
                this._showMap(this.stops);
            })
            .catch(() => {
                this.errorMessage = "Failed to load stops";
            })
            .finally(() => {
                this.isBusy = false;
            });
    }

    public addStop(): void {
        this.isBusy = true;
        this._tripService
            .addStop(this.tripName, this.newStop)
            .then((res) => {
                this.stops.push(res.data);
                this._showMap(this.stops);
                this.newStop = {};
            })
            .catch(() => {
                this.errorMessage = "Failed to add new stop";
            })
            .finally(() => {
                this.isBusy = false;
            });
    }

    private _showMap(stops: Stop[]): void {
        if (stops && stops.length > 0) {
            let mapStops: any[] = _.map(stops, (stop) => {
                return {
                    lat: stop.latitude,
                    long: stop.longitude,
                    info: stop.name
                };
            });
            // Show Map
            travelMap.createMap({
                stops: mapStops,
                selector: "#map",
                currentStop: 1,
                initialZoom: 3
            });
        }
    }
}

declare var travelMap: any;