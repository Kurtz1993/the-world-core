import { TheWorldConfig } from "./the-world.config";
import { TheWorldRun } from "./the-world.run";
import { services } from "./services/services";
import { TripsController } from "./trips.controller";

angular
    .module("theWorld", [
        "ui.router",
        services
    ])
    .controller("TripsController", TripsController)
    .constant("env", { api: "/api" })
    .config(TheWorldConfig)
    .run(TheWorldRun);