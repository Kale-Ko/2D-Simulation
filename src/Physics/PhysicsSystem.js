import Vector2 from "../Misc/Vector2.js"
import SolidPhysics from "./SolidPhysics.js"
import LiquidPhysics from "./LiquidPhysics.js"
import GasPhysics from "./GasPhysics.js"

export default class PhysicsSystem {
    constructor(world, tps, app) {
        setInterval(() => {
            app.stats.updates = 0

            var tmpworld = world.clone()

            for (var x = 0; x < world.width; x++) {
                for (var y = 0; y < world.height; y++) {
                    var tile = tmpworld.get(new Vector2(x, y))

                    app.stats.updates++

                    if (tile.type == "solid") new SolidPhysics().update(world, tile, new Vector2(x, y))
                    else if (tile.type == "liquid") new LiquidPhysics().update(world, tile, new Vector2(x, y))
                    else if (tile.type == "gas" && tile.name != "air") new GasPhysics().update(world, tile, new Vector2(x, y))
                    else app.stats.updates--
                }
            }
        }, 1000 / tps)
    }
}