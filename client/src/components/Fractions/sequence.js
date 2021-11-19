const getRandomValue = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const sequenceFractions = () => {
  const one = getRandomValue(1,20)
  const two = getRandomValue(1,20)
  const three = getRandomValue(1,20)
  const four = getRandomValue(1,20)
  const five = getRandomValue(1,20)
  const six = getRandomValue(1,20)
  const seven = getRandomValue(1,20)

  const numbers = [one, two, three, four, five, six, seven]

  const firstBracket = Math.floor(Math.random() * 3);
  const secondBracket = Math.floor(Math.random() * 7+1);

  const brackets = {
    first: numbers[firstBracket],
    second: numbers[secondBracket]
  }

  const sequence = {
    numbers: numbers,
    brackets: brackets
  }
  return sequence
}


