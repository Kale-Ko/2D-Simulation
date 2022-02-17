import World from "./src/World.js"
import Renderer from "./src/Rendering/Renderer.js"
import PhysicsSystem from "./src/Physics/PhysicsSystem.js"
import Brush from "./src/Brush/Brush.js"
import SandTile from "./src/Tiles/Sand.js"

var screenscale = 600
var gamescale = 50

var app = new PIXI.Application({ view: document.getElementById("renderer"), resolution: screenscale / (screenscale * 2), width: screenscale, height: (screenscale * 2), backgroundColor: 0x333333, autoStart: false })
app.stats = { fps: 0, tiles: 0 }
app.render()

var world = new World(gamescale, gamescale * 2)
var renderer = new Renderer(app, world, 60)
var physicsSystem = new PhysicsSystem(world, 8, app)
var brush = new Brush(app, world, 2, new SandTile())

setInterval(() => {
    app.stats.fps++

    document.getElementById("tiles").innerHTML = "Tiles: " + app.stats.tiles
}, 1000 / 60)

setInterval(() => {
    document.getElementById("fps").innerHTML = "Fps: " + Math.min(app.stats.fps, 60)

    app.stats.fps = 0
}, 1000)