import { Inject } from "./decorators/decorators";

@Inject("TripService")
export class TripsController {
    public newTrip: Trip = {};
    public isBusy: boolean = true;
    public trips: Trip[];
    public errorMessage: string;

    constructor(private _tripService: ITripService) {
        this.trips = [{
            name: "US Trip",
            created: new Date()
        }, {
            name: "World Trip",
            created: new Date()
        }];

        this._tripService
            .getTrips()
            .then((res) => {
                angular.copy(res.data, this.trips);
            })
            .catch((err) => {
                this.errorMessage = `Failed to load data: ${err.data}`;
            })
            .finally(() => {
                this.isBusy = false;
            });
    }

    /** Adds a new trip. */
    public addTrip(): void {
        this.isBusy = true;

        this._tripService
            .addTrip(this.newTrip)
            .then((res) => {
                this.trips.push(res.data);
                this.newTrip = {};
            })
            .catch(() => {
                this.errorMessage = "Failed to save new trip.";
            })
            .finally(() => {
                this.isBusy = false;
            });
    }
}