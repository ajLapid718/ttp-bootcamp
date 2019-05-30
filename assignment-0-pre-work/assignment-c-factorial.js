const { expect } = require("chai");
const sinon = require("sinon");

// The first, and only, parameter of "factorial" is "num", which is always an integer greater than 0;
// Constraints: As one of the test cases is designed to assess for recursive behavior, please do not use an iterative approach;

class MySolution {
  constructor() {
    this.factorial = this.factorial.bind(this);
  }

  // Write your function titled "factorial" BELOW this line;

  // Write your function titled "factorial" ABOVE this line;
}

// TEST CASES;
describe("factorial", () => {
  let instanceOfStudentSolution;
  let studentFactorial;

  beforeEach(() => {
    instanceOfStudentSolution = new MySolution();
    studentFactorial = instanceOfStudentSolution.factorial;
  });

  it("should be a function", () => {
    expect(typeof studentFactorial).to.eql("function");
  });

  it("should take in one parameter", () => {
    expect(studentFactorial).to.have.lengthOf(1);
  });

  it("should return a number", () => {
    let studentReturnValue = studentFactorial(8);
    expect(studentReturnValue).to.be.finite;
  });

  it("should return an accurate product of all numbers from `num` down to and including 1", () => {
    let exampleA = 2;
    let exampleB = 3;
    let exampleC = 4;
    let exampleD = 5;

    expect(studentFactorial(exampleA)).to.equal(2);
    expect(studentFactorial(exampleB)).to.equal(6);
    expect(studentFactorial(exampleC)).to.equal(24);
    expect(studentFactorial(exampleD)).to.equal(120);
  });

  it("should pass the randomized testing inputs", () => {
    let solutionOutput = eval(process.env.FACTORIALSOLUTION);

    for (let counter = 1; counter <= 3; counter++) {
      let randomNum = Math.ceil(Math.random() * 10);

      console.log("");
      console.log(
        `***Given ${randomNum}, your factorial function actually returned ${studentFactorial(
          randomNum
        )} when the test expected an output of ${solutionOutput(randomNum)}`
      );
      console.log("");

      expect(studentFactorial(randomNum)).to.equal(solutionOutput(randomNum));
    }
  });

  it("should be a recursive implementation where the function is called `num` times", () => {
    let mySpy = sinon.spy(instanceOfStudentSolution, "factorial");

    mySpy(3);
    let amountOfTimesInvoked = mySpy.callCount;
    expect(amountOfTimesInvoked).to.equal(3);

    mySpy.callCount = 0;

    mySpy(19);
    let amountOfTimesCalled = mySpy.callCount;
    expect(amountOfTimesCalled).to.equal(19);

    mySpy.callCount = 0;

    mySpy(22);
    let amountOfTimesExecuted = mySpy.callCount;
    expect(amountOfTimesExecuted).to.equal(22);
  });
});
