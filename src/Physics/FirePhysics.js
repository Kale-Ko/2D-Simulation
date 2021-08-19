import Vector2 from "../Misc/Vector2.js"
import AirTile from "../Tiles/Air.js"
import FireTile from "../Tiles/Fire.js"

export default class FirePhysics {
    update(world, tile, pos) {
        if (tile.type == "fire") {
            tile.temperature -= 0.05

            console.log(tile.temperature)

            if (tile.temperature < 2) world.set(new Vector2(pos.x, pos.y), new AirTile())
        } else {
            if (!tile.flammable) return

            tile.temperature -= 0.05

            if (tile.temperature >= 6 && world.get(new Vector2(pos.x, pos.y - 1)).name == "air") world.set(new Vector2(pos.x, pos.y - 1), new FireTile())
        }
    }
}