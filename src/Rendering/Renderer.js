/**
    @license
    MIT License
    Copyright (c) 2021 Kale Ko
    See https://kaleko.ga/license.txt
*/

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

                var newsprite = new PIXI.Mesh(new PIXI.Geometry().addAttribute("positions", [0, 0, 12, 0, 12, 12, 0, 12], 2).addIndex([0, 1, 2, 0, 3, 2]), new PIXI.MeshMaterial(PIXI.Texture.from("assets/tile.png"), { alpha: 1, tint: tile.color }))
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