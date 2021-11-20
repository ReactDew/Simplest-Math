import styled from "styled-components"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import { logout } from "../redux/actions/user"
import { useDispatch } from 'react-redux'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35); 
  box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35);
  ${mobile({ width: '100vw' })}
`
const Left = styled.div`
  flex: 2;
  margin-left: 140px;
  ${mobile({ marginLeft: '10px' })}
`
const Logo = styled.h1`
  font-weight: 800;
  font-style: italic;
  font-size: 30px;
  ${mobile({ display: 'none' })}
`
const Subtitle = styled.span`
  font-size: 17px;
  font-weight: 400;
  ${mobile({ display: 'none' })}
`
const Center = styled.div`
  display: flex;
  flex: 6;
  ${mobile({ display: 'flex', flexDirection: 'column' })}
`
const NavLink = styled.div`
  margin: 0 30px;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  ${mobile({ fontSize: '14px' })}
`
const Right = styled.div`
  display: flex;
  flex: 3;
`
const Buttons = styled.div`
  display: flex;
  ${mobile({ display: 'flex', flexDirection: 'column' })}
`
const LoginButton = styled.button`
  margin-right: 30px;
  padding: 15px 40px;
  background: none;
  border: 2px solid #8671fc;
  color: #333;
  border-radius: 30px;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #9685fc;
    border: 2px solid #9685fc;
    color: #fff;
  }
`
const RegisterButton = styled.button`
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
const ProfileWrapper = styled.div`
  margin-top: -20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
`
const Profile = styled.div`
  padding: 10px 50px;
  background-color: #eeeeee;
  border-radius: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Icon = styled.div`
  margin-left: 20px;
`
const Options = styled.div`
  width: 170px;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
`
const ProfileButton = styled.div`
  background-color: #eeeeee;
  padding: 7px 0;
  margin: 3px 0;
  &:hover {
    background-color: #9685fc;
    color: #fff;
  }
`

const Header = () => {
  const userInfo = useSelector(state => state.login.userInfo)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Container>
      <Left>
        <Link style={{textDecoration: 'none', color: '#333'}} to='/'>
          <Logo>Simplest Math</Logo>
          <Subtitle>Try Out The Drill</Subtitle>
        </Link>
      </Left>
      <Center>
        <Link style={{textDecoration: 'none'}} to='/fractions'>
          <NavLink>Fractions</NavLink>
        </Link>
        <NavLink>Geometry</NavLink>
        <NavLink>Trigonometry</NavLink>
      </Center>
      <Right>
        {userInfo ?
        <ProfileWrapper>
          <Profile onClick={() => setOpen(!open)}>
            {userInfo.name}
            <Icon>{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</Icon>
          </Profile>
          {open && (
            <Options>
              <Link style={{textDecoration: 'none', color: '#333'}} to='/profile'>
                <ProfileButton>My Profile</ProfileButton>
              </Link>
              {userInfo.isAdmin && <Link style={{textDecoration: 'none', color: '#333'}} to='/adminpanel'><ProfileButton>Admin Panel</ProfileButton></Link> }
              <Link style={{textDecoration: 'none', color: '#333'}} to='/logout'>
                <ProfileButton onClick={handleLogout}>Logout</ProfileButton>
              </Link>
            </Options>
          )}
        </ProfileWrapper>
        : (
          <Buttons>
            <Link to='/login'>
              <LoginButton>Login</LoginButton>
            </Link>
            <Link to='/register'>
              <RegisterButton>Register</RegisterButton>
            </Link>
          </Buttons>
        )}
      </Right>
    </Container>
  )
}

export default Header
