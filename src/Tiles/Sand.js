import Tile from "./Tile.js"

export default class SandTile extends Tile {
    get name() { return "sand" }
    get type() { return "solid" }

    get mass() { return 1 }

    get heat() { return 0 }
    get meltable() { return true }
    get meltsat() { return 8 }

    get evaporable() { return false }
    get evaporatesat() { return 0 }

    get flammable() { return false }
    get explosive() { return false }
}