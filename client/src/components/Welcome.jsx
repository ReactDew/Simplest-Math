import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  padding: 0 490px;
  ${mobile({
    display: 'flex',
    alignItems: 'center',
    padding: '0px 100px'
  })}
`
const Wrapper = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: 100%;
`
const Greet = styled.div`
  font-size: 45px;
  font-weight: 700;
  margin-bottom: 30px;
  ${mobile({ fontSize: '40px' })}
`
const Desc = styled.span`
  font-size: 30px;
  ${mobile({ fontSize: '20px' })}
`
const Option = styled.div`
  border-radius: 25px;
  margin-top: 50px;
  height: 100px;
  padding: 30px 50px;
  background-color: #8671fc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  &:hover {
    background-color: #9685fc;
  }
  ${mobile({ padding: '50px 100px' })}
`
const Logo = styled.div`
  color: #fff;
  font-size: 25px;
`
const Title = styled.h1`
  font-size: 20px;
  color: #fff;
`

const Welcome = () => {
  return (
    <Container>
      <Wrapper>
        <Greet>Welcome to Simplest Math</Greet>
        <Desc>Choose your practice</Desc>
        <Link to='/fractions' style={{textDecoration: 'none'}}>
          <Option>
            <Logo>
              <i class="fas fa-divide"></i>
            </Logo>
            <Title>Fractions</Title>
          </Option>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Welcome
