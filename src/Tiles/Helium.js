import Tile from "./Tile.js"

export default class HeliumTile extends Tile {
    get name() { return "helium" }
    get type() { return "gas" }

    get mass() { return -1 }

    get flammable() { return false }
    get explosive() { return false }
}