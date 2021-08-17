import BasePhysics from "./BasePhysics.js"
import AirTile from "../Tiles/Air.js"
import Vector2 from "../Misc/Vector2.js"

export default class SolidPhysics extends BasePhysics {
    get dir() { return 1 }

    update(world, tile, pos) {
        this.baseUpdate(world, tile, pos)

        if (world.get(new Vector2(pos.x + 1, pos.y + this.dir)) != undefined && world.get(new Vector2(pos.x - 1, pos.y + this.dir)) != undefined && this.onGround(world, tile, pos)) {
            if (world.get(new Vector2(pos.x + 1, pos.y + this.dir)).name == "air") {
                world.set(pos, new AirTile())

                world.set(new Vector2(pos.x + 1, pos.y + this.dir), tile)
            } else if (world.get(new Vector2(pos.x - 1, pos.y + this.dir)).name == "air") {
                world.set(pos, new AirTile())

                world.set(new Vector2(pos.x - 1, pos.y + this.dir), tile)
            }
        }
    }

    onGround(world, tile, pos) {
        var onGround = true

        for (var y = pos.y; y < world.height; y++) {
            if (world.get(new Vector2(pos.x, y)).type != "solid") onGround = false
        }

        return onGround
    }
}