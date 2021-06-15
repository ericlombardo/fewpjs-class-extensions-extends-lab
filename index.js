class Polygon {
  constructor(sideLengths){
    this.sideLengths = sideLengths
  }

  get countSides() {
    return this.sideLengths.length
  }

  get perimeter() {
    return this.sideLengths.reduce((total, side) => total + side)
  }
}

class Triangle extends Polygon {
  get isValid(){
      let sides = this.sideLengths.sort((a, b) => a - b)
      return (sides[0] + sides[1]) > sides[2] ? (true) : (false)
  }
}

class Square extends Polygon {

  get area() {
    return this.sideLengths[0] ** 2
  }
  get isValid() {
    return this.sideLengths.every(side => {
      return side === this.sideLengths[0]
    })
  }
}