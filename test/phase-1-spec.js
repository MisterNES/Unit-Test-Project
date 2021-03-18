const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz } = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    let res = isFive(5);
    expect(res).to.equal(true);

    let num = 4;

    let falseRes = isFive(num);

    expect(falseRes).to.equal(false);
  });
});
describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let num = 3
    //Act
    let trueRes = isOdd(num);
    //Assert
    expect(trueRes).to.equal(true);
  });
  it("should return false if the num is even", () => {
    //Arrange
    let num = 6;
    //Act
    let falseRes = isOdd(num);
    //Assert
    expect(falseRes).to.equal(false);
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let num = "Hi!"
    //Act
    //Assert
    expect(() => isOdd(num)).to.throw(Error);
  });
});
describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange

      //Act

      // Assert
      expect.fail("Remove this expect.fail and replace it with your test");
    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange

      //Act

      // Assert
      expect.fail("Remove this expect.fail and replace it with your test");
    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange

    //Act

    //Assert
    expect.fail("Remove this expect.fail and replace it with your test");
  });
});
describe("fizzBuzz(max)", () => {
  it("should throw a RangeError if max < 0", () => {
    //Arrange

    //Act

    //Assert
    expect.fail("Remove this expect.fail and replace it with your test");
  });
  it("should throw a TypeError if max is not a number", () => {
    //Arrange

    //Act

    //Assert
    expect.fail("Remove this expect.fail and replace it with your test");
  });
  it("should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both", () => {
    //Arrange

    //Act

    //Assert
    expect.fail("Remove this expect.fail and replace it with your test");
  });
});
