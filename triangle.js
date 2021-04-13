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
    /*
    Return true if 2 sides are the same length.
    Still need to make sure I understand this solution to get counts of all sides:
    https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
    */
    this.sides.forEach((side) => (sides[side] = (sides[side] || 0) + 1));
    return true;
  }

  get isScalene() {
    throw new Error("Remove this statement and implement this function");
  }
}
