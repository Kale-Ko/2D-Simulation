import Tile from "./Tile.js"

export default class WoodTile extends Tile {
    get name() { return "wood" }
    get type() { return "solid" }

    get color() { return 0xdd8800 }

    get mass() { return 1 }

    get heat() { return 0 }
    get meltable() { return false }
    get meltsat() { return 0 }

    get evaporable() { return false }
    get evaporatesat() { return 0 }

    get flammable() { return true }
    get explosive() { return false }
}