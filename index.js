import World from "./src/World.js"
import Renderer from "./src/Rendering/Renderer.js"
import PhysicsSystem from "./src/Physics/PhysicsSystem.js"
import Brush from "./src/Brush/Brush.js"
import SandTile from "./src/Tiles/Sand.js"

var scale = 600

var canvas = document.getElementById("renderer")
var app = new PIXI.Application({ view: canvas, resolution: scale / (scale * 2), width: scale, height: (scale * 2), backgroundColor: 0x333333, autoStart: false })
app.stats = { fps: 0, tiles: 0, updates: 0 }
app.render()

var scale = 50

var world = new World(scale, scale * 2)
var renderer = new Renderer(app, world, 60)
var physicsSystem = new PhysicsSystem(world, 8, app)
var brush = new Brush(app, world, 2, new SandTile())

setInterval(() => {
    app.stats.fps++

    document.getElementById("tiles").innerHTML = "Tiles: " + app.stats.tiles
    document.getElementById("updates").innerHTML = "Updates: " + app.stats.updates
}, 1000 / 60)

setInterval(() => {
    document.getElementById("fps").innerHTML = "Fps: " + Math.min(app.stats.fps, 60)

    app.stats.fps = 0
}, 1000)