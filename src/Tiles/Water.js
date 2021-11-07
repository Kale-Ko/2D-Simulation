/**
    @license
    MIT License
    Copyright (c) 2021 Kale Ko
    See https://kaleko.ga/license.txt
*/

import Tile from "./Tile.js"

export default class WaterTile extends Tile {
    get name() { return "water" }
    get type() { return "liquid" }

    get color() { return 0x00aaff }

    get mass() { return 0.8 }

    get heat() { return 0 }
    get meltable() { return false }
    get meltsat() { return 0 }

    get evaporable() { return true }
    get evaporatesat() { return 12 }

    get flammable() { return false }
    get explosive() { return false }
}