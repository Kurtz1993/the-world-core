import { Inject } from "./decorators/decorators";

@Inject()
export class TripsController {
    public newTrip: Trip = {};
    public trips: Trip[];

    constructor() {
        this.trips = [{
            name: "US Trip",
            created: new Date()
        }, {
            name: "World Trip",
            created: new Date()
        }];
    }

    /** Initializes the controller. */
    public $onInit(): void {}

    /** Adds a new trip. */
    public addTrip(): void {
        alert(this.newTrip.name);
    }
}