import { Inject } from "./decorators/decorators";

@Inject()
export class TripsController {
    public name: string = "Trips";
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
}