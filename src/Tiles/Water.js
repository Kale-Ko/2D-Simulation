import Tile from "./Tile.js"

export default class WaterTile extends Tile {
    get name() { return "water" }
    get type() { return "liquid" }

    get mass() { return 0.8 }

    get flammable() { return false }
    get explosive() { return false }
}