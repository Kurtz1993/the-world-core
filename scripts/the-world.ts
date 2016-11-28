import { TheWorldConfig } from "./the-world.config";
import { TheWorldRun } from "./the-world.run";
import { services } from "./services/services";
import { simpleControls } from "./simple-controls/simple-controls";
import { TripsController } from "./trips.controller";

angular
    .module("theWorld", [
        "ui.router",
        "theWorld.tpls",
        services,
        simpleControls
    ])
    .controller("TripsController", TripsController)
    .constant("env", { api: "/api" })
    .config(TheWorldConfig)
    .run(TheWorldRun);