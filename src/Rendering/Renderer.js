import Vector2 from "../Misc/Vector2.js"

export default class Renderer {
    constructor(app, world, fps) {
        setInterval(() => { this.render(app, world) }, 1000 / fps)
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

                var newsprite = new PIXI.Sprite.from("../../assets/" + tile.name + ".png")
                newsprite.x = x * (app.view.width / world.width) * 2
                newsprite.y = y * (app.view.height / world.height) * 2
                newsprite.scale.x = (1 / world.height) * 2
                newsprite.scale.y = (1 / world.height) * 2

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