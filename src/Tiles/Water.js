import Tile from "./Tile.js"

export default class WaterTile extends Tile {
    get name() { return "water" }
    get type() { return "liquid" }

    get mass() { return 0.8 }

    get heat() { return 0 }
    get meltable() { return false }
    get meltsat() { return 0 }

    get evaporable() { return true }
    get evaporatesat() { return 2 }

    get flammable() { return false }
    get explosive() { return false }
}