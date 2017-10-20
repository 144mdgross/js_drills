const expect = require('chai').expect
const blackOrWhiteKey = require('../piano_pattern').blackOrWhiteKey

// NOTE: funciton expects valid input only at this point
describe('blackOrWhiteKey()', () =>{

  // NOTE: the repeating it blocks are intented to help reveal the pattern being tested for.
  // if all the expects were in one block...
  // they would stop being run after the first fail
  // which doesn't help someone figure out what the tests are looking for. 
  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(1)).to.eq("white")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(5)).to.eq("black")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(12)).to.eq("black")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(42)).to.eq("white")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(88)).to.eq("white")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(89)).to.eq("white")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(92)).to.eq("white")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(100)).to.eq("black")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(111)).to.eq("white")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(200)).to.eq("black")
  })

  it('determines what color of key you\'re on when given a number', () => {
    expect(blackOrWhiteKey(2017)).to.eq("white")
  })
})
