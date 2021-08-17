export default class Tile {
    get name() { return "tile" }
    get type() { return "none" }

    get mass() { return 0 }

    get heat() { return 0 }
    get meltable() { return false }
    get meltsat() { return 0 }

    get evaporable() { return false }
    get evaporatesat() { return 0 }

    get flammable() { return false }
    get explosive() { return false }
}