/**
    @license
    MIT License
    Copyright (c) 2021 Kale Ko
    See https://kaleko.ga/license.txt
*/

import Tile from "./Tile.js"

export default class FileTile extends Tile {
    get name() { return "fire" }
    get type() { return "fire" }

    get color() { return 0xff2200 }

    get mass() { return -0.1 }

    get heat() { return 10 }
    get meltable() { return false }
    get meltsat() { return 0 }

    get evaporable() { return false }
    get evaporatesat() { return 0 }

    get flammable() { return false }
    get explosive() { return false }
}