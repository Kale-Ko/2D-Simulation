import Tile from "./Tile.js"

export default class SandTile extends Tile {
    get name() { return "sand" }
    get type() { return "solid" }

    get mass() { return 1 }

    get flammable() { return false }
    get explosive() { return false }
}