import Tile from "./Tile.js"

export default class HeliumTile extends Tile {
    get name() { return "helium" }
    get type() { return "gas" }

    get color() { return 0xaaaaaa }

    get mass() { return -1 }

    get heat() { return 0 }
    get meltable() { return false }
    get meltsat() { return 0 }

    get evaporable() { return false }
    get evaporatesat() { return 0 }

    get flammable() { return false }
    get explosive() { return false }
}