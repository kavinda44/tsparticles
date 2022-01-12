import type { Engine } from "tsparticles-engine";
import { Connector } from "./Connector";

export async function loadExternalConnectInteraction(tsParticles: Engine): Promise<void> {
    await tsParticles.addInteractor("externalConnect", (container) => new Connector(container));
}