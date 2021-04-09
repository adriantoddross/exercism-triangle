export class Triangle {
  constructor(...sides) {
    this.sides = [...sides];
  }

  get isEquilateral() {
    return this.sides.every((side, index, array) => side === array[0]);
  }

  get isIsosceles() {
    throw new Error("Remove this statement and implement this function");
  }

  get isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
