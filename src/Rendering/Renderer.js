import Vector2 from "../Misc/Vector2.js"

export default class Renderer {
    constructor(app, world, fps) {
        setInterval(() => {
            this.render(app, world)
        }, 1000 / fps)
    }

    render(app, world) {
        app.stats.tiles = 0

        app.stage.children.forEach(child => {
            app.stage.removeChild(child)

            child.destroy()
        })

        for (var x = 0; x < world.width; x++) {
            for (var y = 0; y < world.height; y++) {
                var tile = world.get(new Vector2(x, y))

                if (tile.name == "air") continue

                app.stats.tiles++

                var square = new PIXI.Geometry()
                square.addAttribute("positions", [0, 0, 12, 0, 12, 12, 0, 12], 2)
                square.addAttribute("uvs", [0, 0, 1, 0, 1, 1, 0, 1], 2)
                square.addIndex([0, 1, 2, 1, 3, 2])
                var newsprite = new PIXI.Mesh(square, new PIXI.MeshMaterial(PIXI.Texture.from("assets/tile.png"), { alpha: 1, tint: tile.color }))
                newsprite.x = x * (app.view.width / world.width) * 2
                newsprite.y = y * (app.view.height / world.height) * 2

                app.stage.addChild(newsprite)
            }
        }

        app.render()

        app.stage.children.forEach(child => {
            app.stage.removeChild(child)

            child.destroy()
        })
    }
}