import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { login } from '../redux/actions/user'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ width: '1000px'})}
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Left = styled.div`
  flex: 1;
  padding: 20px 70px;
`
const Right = styled.div`
  flex: 1;
`
const Title = styled.h1`
  font-size: 70px;
  font-style: italic;
  font-weight: 800;
  margin-bottom: 30px;
`
const Desc = styled.span`
  font-size: 20px;
  font-weight: 500;
`
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  border: .5px solid lightgray;
  font-size: 25px;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 15px;
  margin: 3px 0;
  &:focus {
    outline-style: none;
  }
`
const Button = styled.button`
  margin: 30px 0;
  width: 100%;
  margin-right: 20px;
  padding: 15px 40px;
  border: none;
  background-color: #8671fc;
  color: #fff;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #9685fc;
  }
`
const Alert = styled.div`
  color: red;
`

const Login = () => {
  const userInfo = useSelector(state => state.login.userInfo)
  const error = useSelector(state => state.login.error)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(login(name, email, password))
  }

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Simplest Math</Title>
          <Desc>Try Out the Drill!</Desc>
        </Left>
        <Right>
          <Form>
            <Input onChange={event => setName(event.target.value)} placeholder='Name' />
            <Input type='email' onChange={event => setEmail(event.target.value)} placeholder='Email' />
            <Input type='password' onChange={event => setPassword(event.target.value)} placeholder='Password' />
            <Button onClick={handleClick}>Login</Button>
            {error ? <Alert>{'Login fail. Email or password is incorrect'}</Alert> : null}
          </Form>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Login