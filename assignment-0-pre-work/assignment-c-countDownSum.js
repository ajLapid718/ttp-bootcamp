// Imports for the Chai Assertion Library;
// Destructuring the `expect` function from the Chai module allows us to test our results;
const { expect } = require("chai");
// SinonJS is a complete framework test double framework than Jasmine, including not only spies but also stubs and fakes;
// Although sinon carries a lot of functionlity, we'll be using sinon to test how many times our function was called as one way to test for a recursive implementation;
const sinon = require("sinon");

// The first, and only, parameter of "countDownSum" is "num", which is always an integer greater than 0;
// Constraints: As one of the test cases is designed to assess for recursive behavior, please do not use an iterative approach and do not use Gauss' sequence;
// Please use the "this" keyword within your solution when handling the recursive calls;

class MySolution {
  constructor() {
    this.countDownSum = this.countDownSum.bind(this);
  }
  // Write your method titled "countDownSum" BELOW this line;
  countDownSum(num) {
    if (num.length == 0) {
      return 0;
    }
    return num[0] + this.countDownSum(num.substring(0, num.length - 1));
  }
  // Write your method titled "countDownSum" ABOVE this line;
}

// TEST CASES;
describe("countDownSum", () => {
  let instanceOfStudentSolution;
  let studentCountDownSum;

  beforeEach(() => {
    instanceOfStudentSolution = new MySolution();
    studentCountDownSum = instanceOfStudentSolution.countDownSum;
  });

  it("should be a function", () => {
    expect(typeof studentCountDownSum).to.eql("function");
  });

  it("should take in one parameter", () => {
    expect(studentCountDownSum).to.have.lengthOf(1);
  });

  it("should return a number", () => {
    let studentReturnValue = studentCountDownSum(5);
    expect(studentReturnValue).to.be.finite;
  });

  it("should return an accurate summation of all numbers from `num` down to and including 1", () => {
    let exampleA = 2;
    let exampleB = 3;
    let exampleC = 20;
    let exampleD = 100;

    expect(studentCountDownSum(exampleA)).to.equal(3);
    expect(studentCountDownSum(exampleB)).to.equal(6);
    expect(studentCountDownSum(exampleC)).to.equal(210);
    expect(studentCountDownSum(exampleD)).to.equal(5050);
  });

  it("should pass the randomized testing inputs", () => {
    let solutionOutput = eval(process.env.COUNTDOWNSUMSOLUTION);

    for (let counter = 1; counter <= 3; counter++) {
      let randomNum = Math.ceil(Math.random() * 101);

      console.log("");
      console.log(
        `***Given ${randomNum}, your countDownSum function actually returned ${studentCountDownSum(
          randomNum
        )} when the test expected an output of ${solutionOutput(randomNum)}`
      );
      console.log("");

      expect(studentCountDownSum(randomNum)).to.equal(
        solutionOutput(randomNum)
      );
    }
  });

  it("should be a recursive implementation where the function is called `num` times", () => {
    let mySpy = sinon.spy(instanceOfStudentSolution, "countDownSum");

    mySpy(10);
    let amountOfTimesInvoked = mySpy.callCount;
    expect(amountOfTimesInvoked).to.equal(10);

    mySpy.callCount = 0;

    mySpy(20);
    let amountOfTimesCalled = mySpy.callCount;
    expect(amountOfTimesCalled).to.equal(20);

    mySpy.callCount = 0;

    mySpy(33);
    let amountOfTimesExecuted = mySpy.callCount;
    expect(amountOfTimesExecuted).to.equal(33);
  });
});
