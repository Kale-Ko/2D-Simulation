import BasePhysics from "./BasePhysics.js"
import AirTile from "../Tiles/Air.js"
import Vector2 from "../Misc/Vector2.js"

export default class GasPhysics extends BasePhysics {
    get dir() { return -1 }

    update(world, tile, pos) {
        this.baseUpdate(world, tile, pos)

        if (world.get(new Vector2(pos.x + 1, pos.y + this.dir)) != undefined && world.get(new Vector2(pos.x - 1, pos.y + this.dir)) != undefined && this.onGround(world, tile, pos)) {
            if (world.get(new Vector2(pos.x + 1, pos.y + this.dir)).name == "air") {
                world.set(pos, new AirTile())

                world.set(new Vector2(pos.x + 1, pos.y + this.dir), tile)
            } else if (world.get(new Vector2(pos.x - 1, pos.y + this.dir)).name == "air") {
                world.set(pos, new AirTile())

                world.set(new Vector2(pos.x - 1, pos.y + this.dir), tile)
            } else {
                var rnd = Math.floor(Math.random() * 2)

                if (world.get(new Vector2(pos.x + 1, pos.y)).name == "air" && rnd == 0) {
                    world.set(pos, new AirTile())

                    world.set(new Vector2(pos.x + 1, pos.y), tile)
                } else if (world.get(new Vector2(pos.x - 1, pos.y)).name == "air" && rnd == 1) {
                    world.set(pos, new AirTile())

                    world.set(new Vector2(pos.x - 1, pos.y), tile)
                }
            }
        } else if (world.get(new Vector2(pos.x + 1, pos.y)) != undefined && world.get(new Vector2(pos.x - 1, pos.y)) != undefined && this.onGround(world, tile, pos)) {
            var rnd = Math.floor(Math.random() * 2)

            if (world.get(new Vector2(pos.x + 1, pos.y)).name == "air" && rnd == 0) {
                world.set(pos, new AirTile())

                world.set(new Vector2(pos.x + 1, pos.y), tile)
            } else if (world.get(new Vector2(pos.x - 1, pos.y)).name == "air" && rnd == 1) {
                world.set(pos, new AirTile())

                world.set(new Vector2(pos.x - 1, pos.y), tile)
            }
        }
    }

    onGround(world, tile, pos) {
        var onGround = true

        for (var y = pos.y; y >= 0; y--) {
            if (world.get(new Vector2(pos.x, y)).type != "gas" || world.get(new Vector2(pos.x, y)).name == "air") onGround = false
        }

        return onGround
    }
}