
function Colors(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Colors.prototype.rgb = function () {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
}

Colors.prototype.rgba = function (a) {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
}

//instance
let red = new Colors(255, 0, 0);