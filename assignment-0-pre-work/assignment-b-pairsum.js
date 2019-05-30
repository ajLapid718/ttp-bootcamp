// Imports for the Chai Assertion Library;
const { expect } = require("chai");
const chai = require("chai");
const asserttype = require("chai-asserttype");

chai.use(asserttype);

// The first parameter of pairSum is "nums", which is an array of integers;
// The second parameter of pairSum is "target", which is an integer;

// Write your function titled "pairSum" BELOW this line;
let pairSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] + arr[j] == target) {
        return true;
      }
    }
  }
  return false;
};
// Write your function titled "pairSum" ABOVE this line;

// TEST CASES;
describe("pairSum", () => {
  let studentPairSum;

  beforeEach(() => {
    studentPairSum = pairSum;
  });

  it("should be a function", () => {
    expect(typeof studentPairSum).to.eql("function");
  });

  it("should take in two parameters", () => {
    expect(studentPairSum).to.have.lengthOf(2);
  });

  it("should return a boolean value", () => {
    let exampleOneArr = [5, 4, 3, 2, 1];
    let studentReturnValue = studentPairSum(exampleOneArr);

    expect(studentReturnValue).to.be.boolean();
  });

  it("should return false if no two numbers positioned at distinct indices pair up to the target sum", () => {
    let exampleArrA = [];
    let exampleTargetA = 2;

    let exampleArrB = [1];
    let exampleTargetB = 2;

    let exampleArrC = [7, 4, 5, 2, 21, 24, 16];
    let exampleTargetC = 61;

    let exampleArrD = [7, 4, 5, 2, 21, 24, 16];
    let exampleTargetD = 14;

    expect(studentPairSum(exampleArrA, exampleTargetA)).to.be.false;
    expect(studentPairSum(exampleArrB, exampleTargetB)).to.be.false;
    expect(studentPairSum(exampleArrC, exampleTargetC)).to.be.false;
    expect(studentPairSum(exampleArrD, exampleTargetD)).to.be.false;
  });

  it("should return true if any two numbers positioned at distinct indices pair up to the target sum", () => {
    let exampleArrA = [1, 1, 2, 3, 4, 5];
    let exampleTargetA = 7;

    let exampleArrB = [1, 3, 5, 7, 8, 9, 10];
    let exampleTargetB = 16;

    let exampleArrC = [1, 2, 3, 4, 5, 6];
    let exampleTargetC = 10;

    let exampleArrD = [1, 2, 3, 7, 8];
    let exampleTargetD = 10;

    let exampleArrE = [1, 2, 3, 4, 5, 1];
    let exampleTargetE = 2;

    expect(studentPairSum(exampleArrA, exampleTargetA)).to.be.true;
    expect(studentPairSum(exampleArrB, exampleTargetB)).to.be.true;
    expect(studentPairSum(exampleArrC, exampleTargetC)).to.be.true;
    expect(studentPairSum(exampleArrD, exampleTargetD)).to.be.true;
    expect(studentPairSum(exampleArrE, exampleTargetE)).to.be.true;
  });
});
