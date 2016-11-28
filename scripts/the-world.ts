import { TheWorldConfig } from "./the-world.config";
import { TheWorldRun } from "./the-world.run";

angular.module("theWorld", [
    "ui.router"
])
.config(TheWorldConfig)
.run(TheWorldRun);