import { useState } from "react"
import styled from "styled-components"
import axios from 'axios'
const Fraction = require('fractional-arithmetic').Fraction;

const Container = styled.div`
  width: 800px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`
  
const First = styled.div``
const Second = styled.div``
const Line = styled.div`
  padding: 1px;
  margin: 10px;
  background-color: lightgray;
`

const Num = styled.input`
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
const Operation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Icon = styled.div`
  padding: 20px;
  background-color: #eeeeee;
  border-radius: 10px;
  cursor: pointer;
`
const Button = styled.button`
  padding: 15px 70px;
  background-color: #8671fc;
  border: none;
  color: #fff;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  margin: 30px 0;
`
const Alert = styled.div`
  padding: 20px 30px;
`

const AddFraction = () => {
  const [firstNum, setFirstNum] = useState('')
  const [firstDen, setFirstDen] = useState('')
  const [operation, setOperation] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [secondDen, setSecondDen] = useState('')
  const [alert, setAlert] = useState('')

  const handleAddFraction = async () => {
    const config = {headers: {'Content-type': 'application/json'}}
    if (firstNum && firstDen && operation && secondNum && secondDen) {
      const first = new Fraction(firstNum, firstDen)
      const second = new Fraction(secondNum, secondDen)
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

      const answerNum = answer.n
      const answerDen = answer.d
      
      try {
        await axios.post('http://localhost:5000/api/fractions', {
          firstNum, firstDen, operation, secondNum, secondDen, answerNum, answerDen
        }, config)
        setAlert('Success')
        setTimeout(() => {
          setAlert('')
        }, 3000);
      } catch (err) {
        setAlert(err)
      }
    } else {
      setAlert('Please enter fractions')
      setTimeout(() => {
        setAlert('')
      }, 3000);
    }
  }

  return (
    <Container>
      <Wrapper>
        <First>
          <Num onChange={(event) => setFirstNum(event.target.value)} />
          <Line />
          <Num onChange={(event) => setFirstDen(event.target.value)} />
        </First>
        <Operation>
          <Icon onClick={() => setOperation('Addition')}><i class="fas fa-plus"></i></Icon>
          <Icon onClick={() => setOperation('Subtraction')}><i class="fas fa-minus"></i></Icon>
          <Icon onClick={() => setOperation('Multiplication')}><i class="fas fa-times"></i></Icon>
          <Icon onClick={() => setOperation('Division')}><i class="fas fa-divide"></i></Icon>
        </Operation>
        <Second>
          <Num onChange={(event) => setSecondNum(event.target.value)} />
          <Line />
          <Num onChange={(event) => setSecondDen(event.target.value)} />
        </Second>
      </Wrapper>
      <Button onClick={handleAddFraction}>Add</Button>
      {alert && <Alert>{alert}</Alert>}
    </Container>
  )
}

export default AddFraction
