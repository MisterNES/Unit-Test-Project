const chai = require("chai");
const expect = chai.expect;

const { Word } = require('../problems/phase-3')
describe('Word', function () {
  describe('Word constructor function', function () {
    it('should have a "word" property', function() {
      //Arrange & Act
      let banana = new Word("banana");

      //Assert
       expect(banana).to.have.property("word");
    })
     it('should set the "word" property when a new word is created', function() {
      //Arrange & Act
      let banana = new Word("banana");

      //Assert
      expect(banana.word).to.equal("banana");
     })
  })
  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function() {
      //Arrange
      let banana = new Word("banana");
      //Act
      let res = banana.removeVowels();
      //Assert
       expect(res).to.equal("bnn");
    })
  })
  describe('removeConsonants function', function () {
})
  it('should return the word with the consonants removed', function() {
      //Arrange
      let banana = new Word("banana");
      //Act
      let res = banana.removeConsonants();
      //Assert
       expect(res).to.equal("aaa");
  })
  describe('pigLatin function', function () {
})
  it('should return the word converted to pig latin', function() {
      //Arrange
      let banana = new Word("banana");
      //Act
      let res = banana.pigLatin();
      //Assert
       expect(res).to.equal("ananabay");
  })
})
