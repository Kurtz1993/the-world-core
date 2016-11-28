import { waitCursor } from "./wait-cursor/wait-cursor.component";

let module = angular
    .module("theWorld.simpleControls", [])
    .component("waitCursor", waitCursor);

let simpleControls = module.name;

export { simpleControls };