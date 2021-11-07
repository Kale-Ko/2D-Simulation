/**
    @license
    MIT License
    Copyright (c) 2021 Kale Ko
    See https://kaleko.ga/license.txt
*/

import Tile from "./Tile.js"

export default class AirTile extends Tile {
    get name() { return "air" }
    get type() { return "gas" }

    get color() { return 0xffffff }

    get mass() { return 0 }

    get heat() { return 0 }
    get meltable() { return false }
    get meltsat() { return 0 }

    get evaporable() { return false }
    get evaporatesat() { return 0 }

    get flammable() { return false }
    get explosive() { return false }
}