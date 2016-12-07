import { TheWorldConfig } from "./the-world.config";
import { TheWorldRun } from "./the-world.run";
import { services } from "./services/services";
import { simpleControls } from "./simple-controls/simple-controls";
import { TripsController } from "./trips.controller";
import { TripEditorController } from "./trip-editor/trip-editor.controller";

angular
    .module("theWorld", [
        "ngRoute",
        "theWorld.tpls",
        services,
        simpleControls
    ])
    .controller("TripsController", TripsController)
    .controller("TripEditorController", TripEditorController)
    .constant("env", { api: "/api" })
    .config(TheWorldConfig)
    .run(TheWorldRun);