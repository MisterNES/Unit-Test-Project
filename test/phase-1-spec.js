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
      let res=myRange(1,3)
      //Act
      let expected=[1,2,3]

      // Assert
      expect(res).to.eql(expected);
    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange
      let res=myRange(1,4,2)
      //Act
      let expected=[1,3]
      // Assert
      expect(res).to.eql(expected);
    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    
    //Act

    //Assert
    expect(()=>myRange('hi', 'hello','bye')).to.throw(Error);
  });
});
describe("fizzBuzz(max)", () => {
  it("should throw a RangeError if max < 0", () => {
    //Arrange

    //Act

    //Assert
    expect(()=>fizzBuzz(-2)).to.throw(RangeError);
  });
  it("should throw a TypeError if max is not a number", () => {
    //Arrange

    //Act

    //Assert
    expect(()=>fizzBuzz('hellooooo')).to.throw(TypeError);
  });
  it("should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both", () => {
    //Arrange
    let num=16;
    let res=fizzBuzz(num);
    //Act
    let expected=[3, 5, 6, 9, 10, 12 ]
    //Assert
    expect(res).to.eql(expected);
  });
});
