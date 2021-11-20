import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { randomFractions } from './randomFractions'
import { equalFractions } from './equalFractions'
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
const Numbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Numerator = styled.span`
  font-size: 50px;
  font-weight: 300;
  ${mobile({ fontSize: '30px' })}
`
const FractionalLine = styled.div`
  height: 2px;
  width: 60px;
  background-color: #333;
`
const Denominator = styled.span`
  font-size: 50px;
  font-weight: 300;
  ${mobile({ fontSize: '30px' })}
`
const Is = styled.div`
  padding: 30px 30px;
`
const Answer = styled.input`
  border: .5px solid lightgray;
  font-size: 50px;
  font-weight: 300;
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 5px;
  border-radius: 30px;
  &:focus {
    outline-style: none;
  }
  ${mobile({ marginBottom: '30px' })}
`
const Qestion = styled.div`
  padding: 30px 30px;
  font-size: 30px;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
`
const Next = styled.button`
  padding: 15px 40px;
  background: none;
  border: 2px solid #333;
  color: #333;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  margin-right: 20px;
`
const Check = styled.button`
  padding: 15px 40px;
  background-color: #8671fc;
  border: none;
  color: #fff;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
`
const RadioAnswer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const AnswerContainer = styled.div`
  margin: 10px;
  font-size: 20px;
  font-weight: 500;
`
const Input = styled.input`
  margin: 0 10px;
`
const Label = styled.label``
const Alert = styled.div`
  padding: 10px 100px;
  background-color: #8671fc;
  color: #fff;
  font-weight: 700;
  background-color: ${props => props.color};
  border-radius: 20px;
  margin: 30px 0;
`

const EqualFractionsTest = () => {
  const [fraction, setFraction] = useState({})
  const [equalFraction, setEqualFraction] = useState({})
  const [simpleAnswer, setSimpleAnswer] = useState(null)
  const [equalAnswer, setEqualAnswer] = useState(null)
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const getFractions = () => {
      const randomFraction = randomFractions()
      const destructFraction = randomFraction[0]
      setFraction(destructFraction)
      const equal = equalFractions()
      setEqualFraction(equal)
    }
    getFractions()
  }, [])

  const handleSimpleNext = () => {
    const newRandom = randomFractions()
    const destrFraction = newRandom[0]
    setFraction(destrFraction)
  }

  const handleSimpleCheck = () => {
    const right = fraction.toNumber
    const str_right = right.toString()
    const result = Number(str_right.slice(0, 4))
    if (result && result.toString() === simpleAnswer && simpleAnswer.toString()) {
      setAlert(true)
      setMessage('Success!')
      setTimeout(() => {
        setAlert(false)
        handleSimpleNext()
        setSimpleAnswer('') 
        document.getElementById('answer').value = ''
        document.getElementById('answer2').value = ''
      }, 2000);
    } else {
      setAlert(true)
      setMessage('Wrong!')
      setTimeout(() => {
        setSimpleAnswer('')
        setAlert(false)
        document.getElementById('answer').value = ''
        document.getElementById('answer2').value = ''
      }, 2000);
    }
  }

  const handleEqualNext = () => {
    const newEqual = equalFractions()
    setEqualFraction(newEqual)
  }

  const handleEqualCheck = () => {
    if (equalFraction.answer === 'equal' && equalAnswer === 'correct') {
      handleEqualNext()
      setAlert(true)
      setMessage('Success!')
      setTimeout(() => {
        setAlert(false)
        handleSimpleNext()
        setSimpleAnswer('') 
        document.getElementById('answer').value = ''
        document.getElementById('answer2').value = ''
      }, 2000);
    } else if (equalFraction.answer === 'equal' && equalAnswer === 'uncorrect') {
      setAlert(true)
      setMessage('Wrong!')
      setTimeout(() => {
        setSimpleAnswer('')
        setAlert(false)
        document.getElementById('answer').value = ''
        document.getElementById('answer2').value = ''
      }, 2000);
    } else if (equalFraction.answer === 'not-equal' && equalAnswer === 'correct') {
      setAlert(true)
      setMessage('Wrong!')
      setTimeout(() => {
        setSimpleAnswer('')
        setAlert(false)
        document.getElementById('answer').value = ''
        document.getElementById('answer2').value = ''
      }, 2000);
    } else {
      handleEqualNext()
      setAlert(true)
      setMessage('Success!')
      setTimeout(() => {
        setAlert(false)
        handleSimpleNext()
        setSimpleAnswer('') 
        document.getElementById('answer').value = ''
        document.getElementById('answer2').value = ''
      }, 2000);
    }
  }

  return (
    <Container>
      {alert && <Alert color={message === 'Success!' ? '#0cc41b' : '#ff4800'}>{message}</Alert> }
      <Expression>
        <Numbers>
          <Numerator>{fraction.firstNum}</Numerator>
          <FractionalLine />
          <Denominator>{fraction.firstDen}</Denominator>
        </Numbers>
        <Is>
          <i class="fas fa-equals"></i>
        </Is>
        <Answer id='answer' onChange={(event) => setSimpleAnswer(event.target.value)} />
        <Buttons>
          <Next onClick={() => handleSimpleNext()}>Next</Next>
          <Check onClick={() => handleSimpleCheck()}>Check</Check>
        </Buttons>
      </Expression>
      <Expression>
        <Numbers>
          <Numerator>{equalFraction.fEqualNum}</Numerator>
          <FractionalLine />
          <Denominator>{equalFraction.fEqualDen}</Denominator>
        </Numbers>
        <Is>
          <i class="fas fa-equals"></i>
        </Is>
        <Numbers>
          <Numerator>{equalFraction.sEqualNum}</Numerator>
          <FractionalLine />
          <Denominator>{equalFraction.sEqualDen}</Denominator>
        </Numbers>
        <Qestion>
          <i class="fas fa-question"></i>
        </Qestion>
        <RadioAnswer>
          <AnswerContainer>
            <Input onClick={(event) => setEqualAnswer(event.target.value)} type="radio" id="contactChoice1"
            name="answer" value="correct" />
            <Label for="contactChoice1">Correct</Label>
          </AnswerContainer>
          <AnswerContainer>
            <Input onClick={(event) => setEqualAnswer(event.target.value)} type="radio" id="contactChoice2"
            name="answer" value="uncorrect" />
            <Label for="contactChoice2">Uncorrect</Label>
          </AnswerContainer>
        </RadioAnswer>
        <Buttons>
          <Next onClick={() => handleEqualNext()}>Next</Next>
          <Check onClick={() => handleEqualCheck()}>Check</Check>
        </Buttons>
      </Expression>
    </Container>
  )
}

export default EqualFractionsTest
