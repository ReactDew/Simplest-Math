import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from 'react-redux';
import { setMode } from '../redux/actions/practiceMode'
import { mobile } from '../responsive'

const Container = styled.div`
  display: flex;
  padding: 0 25vw;
  margin-top: 50px;
  justify-content: space-between;
  ${mobile({ display: 'flex', flexDirection: 'column', margin: '20px 0', marginLeft: '-40px' })}
`
const Title = styled.h1`
  font-size: 45px;
  font-weight: 900;
`
const Button = styled.button`
  padding: 15px 25px;
  background: none;
  border: 2px solid #333;
  color: #333;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  ${mobile({ margin: '5px 0' })}
`
const ButtonToggle = styled(Button)`
  ${({active}) => active && 'background-color: #333; color: #fff'}
`

const PracticeMode = () => { 
  const dispatch = useDispatch();
  const types = ['Prebuilt Sheet', 'Random Sheet']
  const [active, setActive] = useState(types[0])

  const handleMode = (type) => {
    setActive(type)
    dispatch(setMode({type}))
  }

  return (
    <Container>
      <Title>Practice Worksheets</Title>
      {types.map((type, index) => (
        <ButtonToggle onClick={() => handleMode(type)} active={active === type} key={index}>{type}</ButtonToggle>
      ))}
    </Container>
  )
}

export default PracticeMode