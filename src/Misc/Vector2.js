/**
    @license
    MIT License
    Copyright (c) 2021 Kale Ko
    See https://kaleko.ga/license.txt
*/

export default class Vector2 {
    x
    y

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    get() {
        return { x: this.x, y: this.y }
    }

    set(x, y) {
        this.x = x
        this.y = y
    }
}