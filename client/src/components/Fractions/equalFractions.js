const getRandomValue = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const equalFractions = () => {
  const fNumRandom = getRandomValue(1, 20)
  const fDenRandom = getRandomValue(1, 20)
  let sNumRandom
  let sDenRandom
  let answer

  const equalRandom = Math.floor(Math.random() * 100);
  const randomMultiply = Math.floor(Math.random() * 4)

  if (equalRandom >= 20) {
    sNumRandom = getRandomValue(1, 20)
    sDenRandom = getRandomValue(1, 20)
    answer = 'not-equal'
  } else {
    sNumRandom = fNumRandom * randomMultiply
    sDenRandom = fDenRandom * randomMultiply
    answer = 'equal'
  }

  const fractions = 
    {
      fEqualNum: fNumRandom,
      fEqualDen: fDenRandom,
      sEqualNum: sNumRandom,
      sEqualDen: sDenRandom,
      answer: answer
    }
  
  return fractions
}


