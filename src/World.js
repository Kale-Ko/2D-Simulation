import AirTile from "./Tiles/Air.js"
import Vector2 from "./Misc/Vector2.js"

export default class World {
    _grid
    _width
    _height

    get grid() { return this._grid }

    get width() { return this._width }
    set width(width) {
        this._width = width

        this.reset()
    }
    get height() { return this._height }
    set height(height) {
        this._height = height

        this.reset()
    }

    constructor(width, height) {
        this._grid = new Map()
        this._width = width
        this._height = height

        this.reset()
    }

    get(pos) {
        return this._grid.get(pos.x + "," + pos.y)
    }

    set(pos, tile) {
        this._grid.set(pos.x + "," + pos.y, tile)

        return this._grid
    }

    fill(start, end, tile) {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                if (x >= start.x && y >= start.y && x <= end.x && y <= end.y) this.set(new Vector2(x, y), tile)
            }
        }
    }

    clone() {
        var clone = new World(this.width, this.height)
        clone._grid = new Map(this.grid)

        return clone
    }

    reset() {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                this.set(new Vector2(x, y), new AirTile())
            }
        }

        return this._grid
    }
}