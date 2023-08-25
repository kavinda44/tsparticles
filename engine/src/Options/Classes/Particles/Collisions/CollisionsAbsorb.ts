import type { ICollisionsAbsorb } from "../../../Interfaces/Particles/Collisions/ICollisionsAbsorb.js";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader.js";
import type { RecursivePartial } from "../../../../Types/RecursivePartial.js";

export class CollisionsAbsorb implements ICollisionsAbsorb, IOptionLoader<ICollisionsAbsorb> {
    speed;

    constructor() {
        this.speed = 2;
    }

    load(data?: RecursivePartial<ICollisionsAbsorb>): void {
        if (!data) {
            return;
        }

        if (data.speed !== undefined) {
            this.speed = data.speed;
        }
    }
}
