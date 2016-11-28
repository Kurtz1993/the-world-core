import { TheWorldConfig } from "./the-world.config";
import { TheWorldRun } from "./the-world.run";
import { TripsController } from "./trips.controller";

angular.module("theWorld", [
    "ui.router"
])
.controller("TripsController", TripsController)
.config(TheWorldConfig)
.run(TheWorldRun);