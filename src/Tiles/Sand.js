import Tile from "./Tile.js"

export default class SandTile extends Tile {
    get name() { return "sand" }
    get type() { return "solid" }

    get color() { return 0xffcc00 }

    get mass() { return 1 }

    get heat() { return 0 }
    get meltable() { return true }
    get meltsat() { return 24 }

    get evaporable() { return false }
    get evaporatesat() { return 0 }

    get flammable() { return false }
    get explosive() { return false }
}