import type { IMoveTrail } from "../../../Interfaces/Particles/Move/IMoveTrail.js";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader.js";
import { MoveTrailFill } from "./MoveTrailFill.js";
import type { RecursivePartial } from "../../../../Types/RecursivePartial.js";

/**
 */
export class MoveTrail implements IMoveTrail, IOptionLoader<IMoveTrail> {
    enable;
    fill;
    length;

    constructor() {
        this.enable = false;
        this.length = 10;
        this.fill = new MoveTrailFill();
    }

    load(data?: RecursivePartial<IMoveTrail>): void {
        if (!data) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.fill !== undefined) {
            this.fill.load(data.fill);
        }

        if (data.length !== undefined) {
            this.length = data.length;
        }
    }
}
