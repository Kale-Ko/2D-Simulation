import Tile from "./Tile.js"

export default class SmokeTile extends Tile {
    get name() { return "smoke" }
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