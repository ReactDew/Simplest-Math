import React, { useState } from 'react'
import styled from "styled-components"
import { useDispatch } from 'react-redux';
import { setButton } from '../redux/actions/worksheetButtons'
import { mobile } from '../responsive';

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  ${mobile({ display: 'flex', flexDirection: 'column', width: '70%' })}
`
const Button = styled.button`
  padding: 15px 25px;
  background: none;
  border: none;
  color: #333;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
`

const ButtonToggle = styled(Button)`
  ${({active}) => active && 'background-color: #9685fc; color: #fff'}
`

const WorksheetButtons = ({ buttons }) => {
  const dispatch = useDispatch()
  const [active, setActive] = useState(buttons[0])

  const handleClick = (button) => {
    setActive(button)
    dispatch(setButton({button}))
  }

  return (
    <Container>
      {buttons.map((button, index) => (
        <ButtonToggle onClick={() => handleClick(button)} active={active === button} key={index}>{button}</ButtonToggle>
      ))}
    </Container>
  )
}

export default WorksheetButtons
