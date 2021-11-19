import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { randomFractions } from './randomFractions'
import { mobile } from '../../responsive'

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
const Operator = styled.div`
  padding: 30px 30px;
`
const Is = styled.div`
  padding: 30px 30px;
`

const Answer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FirstAnswer = styled.input`
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
`
const AnswerLine = styled.div`
  height: 2px;
  width: 170px;
  margin: 5px 0;
  background-color: #333;
`
const SecondAnswer = styled.input`
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
`
const Buttons = styled.div`
  width: 50%;
  display: flex;
  margin-top: 50px;
  justify-content: space-evenly;
`
const Next = styled.button`
  padding: 15px 70px;
  background: none;
  border: 2px solid #333;
  color: #333;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  ${mobile({ width: '25px', display: 'flex', justifyContent: 'center', margin: '0 10px' })}
`
const Check = styled.button`
  padding: 15px 70px;
  background-color: #8671fc;
  border: none;
  color: #fff;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  ${mobile({ width: '25px', display: 'flex', justifyContent: 'center' })}
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

const FractionsTest = ({ fractions }) => {
  const operation = useSelector(state => state.worksheetButtons.button)
  const mode = useSelector(state => state.practiceMode.mode)
  let [num, setNum] = useState(0)
  const [fractionsSorted, setFractionsSorted] = useState([])
  const [descrFr, setDestrFr] = useState([])
  const [builtFraction, setBuiltFraction] = useState({})
  const [mixedFraction, setMixedFraction] = useState({})
  const [randomFraction, setRandomFraction] = useState({})
  const [firstAnswer, setFirstAnswer] = useState(null) 
  const [secondAnswer, setSecondAnswer] = useState(null) 
  const [alert, setAlert] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const destructFractions = () => {
      const destructFractions = [...fractions]
      setDestrFr(destructFractions)
      const sortedFractions = destructFractions.filter(fr => fr.operation === operation)
      const destructFraction = {...sortedFractions[num]} // able to get fields!
      const randomForMixed = Math.floor(Math.random() * destructFractions.length)
      const randomFraction = destructFractions[randomForMixed]
      setFractionsSorted(sortedFractions)
      setBuiltFraction(destructFraction)
      setMixedFraction(randomFraction)
    }
    const randomFraction = () => {
      const random = randomFractions()
      setRandomFraction(random)
    }
    mode === 'Random Sheet' ? randomFraction() : destructFractions()
  }, [num, mode, operation, fractions])

  const prebuiltFraction = operation === 'Mixed' ? mixedFraction : builtFraction
  const destructRandom = {...randomFraction[0]}

  const fraction = mode === 'Random Sheet' ? destructRandom : prebuiltFraction

  const handleNext = () => {
    if (fractionsSorted.length -1 > num) {
      setNum(num + 1)
    } else {
      setNum(0)
    }
    const random = Math.floor(Math.random() * descrFr.length)
    setMixedFraction(descrFr[random])
    const newRandom = randomFractions()
    setRandomFraction(newRandom)
  }

  const handleCheck = () => {
    if (firstAnswer && firstAnswer.toString() === fraction.answerNum.toString() && 
        secondAnswer && secondAnswer.toString() === fraction.answerDen.toString()) {
      setAlert(true)
      setMessage('Success!')
      setTimeout(() => {
        setAlert(false)
        handleNext()
        setFirstAnswer('') 
        setSecondAnswer('')
        document.getElementById('answer').value = ''
        document.getElementById('answer2').value = ''
      }, 2000);
    } else {
      setAlert(true)
      setMessage('Wrong!')
      setTimeout(() => {
        setFirstAnswer('') 
        setSecondAnswer('')
        setAlert(false)
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
          <Numerator>{fraction && fraction.firstNum}</Numerator>
          <FractionalLine />
          <Denominator>{fraction && fraction.firstDen}</Denominator>
        </Numbers>
        <Operator>
          { fraction.operation &&
            fraction.operation === 'Addition' ? <i class="fas fa-plus"></i> :
            fraction.operation === 'Subtraction' ? <i class="fas fa-minus"></i> :
            fraction.operation === 'Multiplication' ? <i class="fas fa-times"></i> :
            <i class="fas fa-divide"></i> 
          }
        </Operator>
        <Numbers>
          <Numerator>{fraction && fraction.secondNum}</Numerator>
          <FractionalLine />
          <Denominator>{fraction && fraction.secondDen}</Denominator>
        </Numbers>
        <Is>
          <i class="fas fa-equals"></i>
        </Is>
        <Answer>
          <FirstAnswer id='answer' onChange={(event) => setFirstAnswer(event.target.value)}></FirstAnswer>
          <AnswerLine />
          <SecondAnswer id='answer2' onChange={(event) => setSecondAnswer(event.target.value)}></SecondAnswer>
        </Answer>
      </Expression>
      <Buttons>
        <Next onClick={() => handleNext()}>Next</Next>
        <Check onClick={handleCheck}>Check</Check>
      </Buttons>
    </Container>
  )
}

export default FractionsTest
