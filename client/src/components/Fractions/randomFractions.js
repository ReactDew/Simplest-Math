const Fraction = require('fractional-arithmetic').Fraction;

const operations = ['Addition', 'Subtraction', 'Multiplication', 'Division']



const getRandomValue = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomFractions = () => {
  const randomNum = Math.floor(Math.random() * operations.length)

  const fNumRandom = getRandomValue(1, 40)
  const fDenRandom = getRandomValue(1, 40)
  const operation = operations[randomNum]
  const sNumRandom = getRandomValue(1, 40)
  const sDenRandom = getRandomValue(1, 40)

  const first = new Fraction(fNumRandom, fDenRandom)
  const second = new Fraction(sNumRandom, sDenRandom)

  let answer

  if (operation === 'Addition') {
    answer = first.plus(second)
  } else if (operation === 'Subtraction') {
    answer = first.minus(second) 
  } else if (operation === 'Multiplication') {
    answer = first.times(second)
  } else {
    answer = first.dividedBy(second)
  }

  const fraction = [
    {
      firstNum: fNumRandom,
      firstDen: fDenRandom,
      operation: operation,
      secondNum: sNumRandom,
      secondDen: sDenRandom,
      answer: answer,
      toNumber: first.toNumber()
    }
  ]

  return fraction
}

