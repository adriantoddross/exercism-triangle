export class Triangle {
  constructor(...sides) {
    this.sides = [...sides];
  }

  get isEquilateral() {
    return this.sides.every(
      (side, index, array) => side === array[0] && side > 0
    );
  }

  get isIsosceles() {
    let equalSides = 0;
    this.sides.every((side, index, array) => {
      if (array.indexOf(side) >= 0) equalSides++;
    });
    return equalSides === 2;
  }

  get isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
