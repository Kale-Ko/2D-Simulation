import Vector2 from "../Misc/Vector2.js"
import AirTile from "../Tiles/Air.js"

export default class BasePhysics {
    get dir() { return 0 }

    baseUpdate(world, tile, pos) {
        // if (world.get(new Vector2(pos.x, pos.y + this.dir)) != undefined && world.get(new Vector2(pos.x, pos.y + this.dir)).mass < tile.mass) {
        //     world.set(new Vector2(pos.x, pos.y), world.get(new Vector2(pos.x, pos.y + this.dir)))
        //     world.set(new Vector2(pos.x, pos.y + this.dir), tile)
        // }

        if (world.get(new Vector2(pos.x, pos.y + this.dir)) == undefined || world.get(new Vector2(pos.x, pos.y + this.dir)).name == "air") {
            world.set(pos, new AirTile())
            world.set(new Vector2(pos.x, pos.y + this.dir), tile)
        }

        if (pos.y <= 0) {
            world.set(new Vector2(pos.x, 0), tile)
        }
        if (pos.y + 1 >= world.height) {
            world.set(new Vector2(pos.x, world.height - 1), tile)
        }
    }
}