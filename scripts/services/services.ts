import { TripService } from "./trip.service";

let module = angular
    .module("theWorld.services", [])
    .service("TripService", TripService);

let services = module.name;

export { services };