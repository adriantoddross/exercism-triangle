export class Triangle {
  constructor(...sides) {
    this.sides = [...sides];
  }

  get isEquilateral() {
    // Return true if all sides are equal
    return this.sides.every(
      (side, index, array) => side === array[0] && side > 0
    );
  }

  get isIsosceles() {
    let sides = {};
    // For each side, increment its current count or create a new object property if it doesn't exist yet.
    this.sides.forEach((side) => (sides[side] = (sides[side] || 0) + 1));
    return Object.values(sides).length === 2 ? true : false; // Make this an if statement
    // Do something else if we can't determine whether it's isoceles/equilateral solely by array length.
  }

  get isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
