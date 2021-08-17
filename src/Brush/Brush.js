import Vector2 from "../Misc/Vector2.js"
import AirTile from "../Tiles/Air.js"
import SandTile from "../Tiles/Sand.js"
import WaterTile from "../Tiles/Water.js"
import HeliumTile from "../Tiles/Helium.js"

export default class Brush {
    size
    selected

    constructor(app, world, size, selected) {
        this.size = size
        this.selected = selected

        var mousedown = false

        window.onmousedown = () => { mousedown = true }
        window.onmouseup = () => { mousedown = false }
        window.onmousemove = event => {
            if (mousedown) world.fill(new Vector2((event.clientX / 6) - (this.size / 2), (event.clientY / 6) - (this.size / 2)), new Vector2((event.clientX / 6) + (this.size / 2), (event.clientY / 6) + (this.size / 2)), this.selected)
        }

        window.onkeypress = event => {
            if (event.code == "Digit0") this.selected = new AirTile()
            if (event.code == "Digit1") this.selected = new SandTile()
            if (event.code == "Digit2") this.selected = new WaterTile()
            if (event.code == "Digit3") this.selected = new HeliumTile()
        }
    }
}