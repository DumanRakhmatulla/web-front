"use strict";

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  clacArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(10, 100);
const small = new Rectangle(1, 1);

square.clacArea();

class ColorRectangle extends Rectangle {
  constructor(height, width, bgColor) {
    super(height, width);
    this.bgColor = bgColor;
  }
  showProps() {
    console.log(`${this.bgColor}`);
  }
}

const redRectangle = new ColorRectangle(10, 10, "red");

redRectangle.showProps();
