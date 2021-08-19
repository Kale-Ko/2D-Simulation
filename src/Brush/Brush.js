import Vector2 from "../Misc/Vector2.js"
import AirTile from "../Tiles/Air.js"
import SandTile from "../Tiles/Sand.js"
import WoodTile from "../Tiles/Wood.js"
import WaterTile from "../Tiles/Water.js"
import FireTile from "../Tiles/Fire.js"
import SmokeTile from "../Tiles/Smoke.js"

export default class Brush {
    size
    selected

    constructor(app, world, size, selected) {
        this.size = size
        this.selected = selected

        var mousedown = false
        var mouse = {}

        window.onmousedown = event => {
            mouse = event
            mousedown = true
        }
        window.onmouseup = event => {
            mouse = event
            mousedown = false
        }
        window.onmousemove = event => { mouse = event }

        setInterval(() => {
            if (mousedown) world.fill(new Vector2((mouse.clientX / 6) - (this.size / 2), (mouse.clientY / 6) - (this.size / 2)), new Vector2((mouse.clientX / 6) + (this.size / 2), (mouse.clientY / 6) + (this.size / 2)), this.selected)
        }, 1)

        window.onkeypress = event => {
            console.log(event.key)

            if (event.key == "0") this.selected = new AirTile()
            else if (event.key == "1") this.selected = new SandTile()
            else if (event.key == "2") this.selected = new WoodTile()
            else if (event.key == "3") this.selected = new WaterTile()
            else if (event.key == "4") this.selected = new FireTile()
            else if (event.key == "5") this.selected = new SmokeTile()

            if (event.key == "+") this.size++
            if (event.key == "-") this.size--

            if (this.size < 2) this.size = 1
            if (this.size > 20) this.size = 20
        }
    }
}