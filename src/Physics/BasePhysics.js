/**
    @license
    MIT License
    Copyright (c) 2021 Kale Ko
    See https://kaleko.ga/license.txt
*/

import Vector2 from "../Misc/Vector2.js"
import AirTile from "../Tiles/Air.js"

export default class BasePhysics {
    get dir() { return 0 }

    baseUpdate(world, tile, pos) {
        if (world.get(new Vector2(pos.x, pos.y + this.dir)) != undefined && tile.mass > world.get(new Vector2(pos.x, pos.y + this.dir)).mass) {
            world.set(new Vector2(pos.x, pos.y), world.get(new Vector2(pos.x, pos.y + this.dir)))
            world.set(new Vector2(pos.x, pos.y + this.dir), tile)
            pos.y += this.dir
        } else if (world.get(new Vector2(pos.x, pos.y + this.dir)) != undefined && world.get(new Vector2(pos.x, pos.y + this.dir)).name == "air") {
            world.set(new Vector2(pos.x, pos.y), new AirTile())
            world.set(new Vector2(pos.x, pos.y + this.dir), tile)
            pos.y += this.dir
        }

        if (pos.y <= 0) {
            world.set(new Vector2(pos.x, 0), tile)
        }
        if (pos.y >= world.height) {
            world.set(new Vector2(pos.x, world.height - 1), tile)
        }
    }
}