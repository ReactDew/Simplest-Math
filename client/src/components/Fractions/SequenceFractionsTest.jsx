import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { sequenceFractions } from './sequence'
import { mobile } from '../../responsive.js'

const Container = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 450px;
  -webkit-box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35); 
  box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({ height: '100%' })}
`
const Expression = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0; 
  ${mobile({ flexDirection: 'column' })}
`
const Number = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 7px
`
const Operator = styled.div`
  font-size: 30px;
  padding: 7px
`
const Bracket = styled.div`
  font-size: 30px;
`
const FractionalLine = styled.div`
  height: 3px;
  cursor: pointer;
  background-color: #333;
  width: 60px;
  &:hover {
    color: #fff;
    background-color: #0e9ad1;
  }
`
const Next = styled.button`
margin-top: 20px;
  padding: 15px 40px;
  background: none;
  border: 2px solid #333;
  color: #333;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #333;
    color: #fff;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`
const Check = styled.button`
  margin-top: 20px;
  padding: 15px 40px;
  background-color: #8671fc;
  border: none;
  color: #fff;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #0e9ad1;
  }
`
const Clear = styled.button`
  margin-top: 20px;
  padding: 15px 40px;
  background: none;
  border: 2px solid #0e9ad1;
  color: #333;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #0e9ad1;
    color: #fff;
  }
`
const Alert = styled.div`
  padding: 10px 100px;
  background-color: #8671fc;
  color: #fff;
  font-weight: 700;
  background-color: ${props => props.color};
  border-radius: 20px;
  margin: 30px 0;
`
const Test = styled.div``
const TestTwo = styled.div`
  display: flex;
  align-items: center;
`

const FirstPosition = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    color: #fff;
    background-color: #0e9ad1;
  }
`
const WindowContainer = styled.div`
  display: flex;
`
const Window = styled.div`
  padding: 25px;
  background-color: #999;
  opacity: .4;
  border-radius: 10px;
  margin: 0 20px;
  font-size: 20px;
  font-weight: 800;
`
const Brackets = styled.div`
  display: flex;
  align-items: center;
`

const SequenceFractionsTest = () => {
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('')
  const [inLine, setInLine] = useState(false)
  
  const [sequence, setSequence] = useState(null)

  useEffect(() => {
    const getFractions = () => {
      const seq = sequenceFractions()
      setSequence(seq)
    }
    getFractions()
  }, [])

  const handleInLine = () => {
    setInLine(!inLine)
  }

  const [num, setNum] = useState(0)

  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)
  const [four, setFour] = useState(0)
  const [five, setFive] = useState(0)
  const [six, setSix] = useState(0)

  const handleOne = () => {
    setOne(num + 1) 
    setNum(num + 1)
  }
  const handleTwo = () => {
    setTwo(num + 1) 
    setNum(num + 1)
  }
  const handleThree = () => {
    setThree(num + 1) 
    setNum(num + 1)
  }
  const handleFour = () => {
    setFour(num + 1)
    setNum(num + 1)
  }
  const handleFive = () => {
    setFive(num + 1)
    setNum(num + 1)
  }
  const handleSix = () => {
    setSix(num + 1)
    setNum(num + 1)
  }

  const clearNumbers = () => {
    setNum(0)
    setOne(0)
    setTwo(0)
    setThree(0)
    setFour(0)
    setFive(0)
    setSix(0)
  }

  const position1 = '1'
  const position2 = '2'
  const position3 = '3'
  const position4 = '4'
  const position5 = '5'
  const position6 = '6'

  const checkSequence = () => {
    if (three.toString() === position1.toString() && four.toString() === position2.toString() &&
    six.toString() === position3.toString() && one.toString() === position4.toString() &&
    two.toString() === position5.toString() && five.toString() === position6.toString()) {
      setAlert(true)
      setMessage('Success!')
      clearNumbers()
      setTimeout(() => {
        setAlert(false) 
        setMessage('')
      }, 2000);
    } else {
      setAlert(true)
      clearNumbers()
      setMessage('Wrong!')
      setTimeout(() => {
        setAlert(false) 
        setMessage('')
      }, 2000);
    }
  }

  const nextNumbers = () => {
    const newSequence = sequenceFractions()
    setSequence(newSequence)
    clearNumbers()
  }

  return (
    <Container>
      {alert && <Alert color={message === 'Success!' ? '#0cc41b' : '#ff4800'}>{message}</Alert> }
      <WindowContainer>
        <Window>{one}</Window>
        <Window>{two}</Window>
        <Window>{three}</Window>
        <Window>{four}</Window>
        <Window>{five}</Window>
        <Window>{six}</Window>
      </WindowContainer>
      <Expression>
        <FirstPosition onClick={() => handleOne()} position={position4}>
          <Number>{sequence && sequence.numbers[0]}</Number>
          <Operator>+</Operator>
          <Number>{sequence && sequence.numbers[1]}</Number>
        </FirstPosition>
        <FirstPosition onClick={() => handleTwo()}>
        <Operator position={position5}>-</Operator>
        </FirstPosition>
        <Brackets position={position1}>
          <Bracket>(</Bracket>
          <FirstPosition onClick={() => handleThree()}>
          <Number>{sequence && sequence.brackets.first}</Number>
          <Operator>-</Operator>
          <Number>{sequence && sequence.brackets.second}</Number>
          </FirstPosition>
          <Bracket>)</Bracket>
        </Brackets>
        <FirstPosition onClick={() => handleFour()}>
        <Operator position={position2}>:</Operator>
        </FirstPosition>
        <Number>{sequence && sequence.numbers[2]}</Number>
        <FirstPosition onClick={() => handleFive()}>
        <Operator position={position5}>+</Operator>
        </FirstPosition>

        <Test>{inLine ? (
          <TestTwo>
            <FirstPosition onClick={() => handleSix()}>
              <Number>{sequence && sequence.numbers[3]}</Number>
              <span>:</span>
              <Number>{sequence && sequence.numbers[4]}</Number>
            </FirstPosition>
          </TestTwo>
        ) : (
          <div position={position3}>
          <Number>{sequence && sequence.numbers[5]}</Number>
          <FractionalLine onClick={() => handleInLine()} />
          <Number>{sequence && sequence.numbers[6]}</Number>
          </div>
        )}</Test>
      </Expression>
      <ButtonsContainer>
        <Clear onClick={() => clearNumbers()}>Clear</Clear>
        <Next onClick={() => nextNumbers()}>Next</Next>
        <Check onClick={() => checkSequence()}>Check</Check>
      </ButtonsContainer>
    </Container>
  )
}

export default SequenceFractionsTest
