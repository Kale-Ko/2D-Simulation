import Tile from "./Tile.js"

export default class AirTile extends Tile {
    get name() { return "air" }
    get type() { return "gas" }

    get mass() { return 0 }

    get flammable() { return false }
    get explosive() { return false }
}