import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import AddFraction from '../components/Fractions/AddFraction'

const Container = styled.div`
  padding: 0px 7vw;
  height: calc(100vh - 100px);
  display: flex;
`
const Left = styled.div`
  margin-top: 50px;
  flex: 1;
`
const StudentList = styled.div``
const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`
const Right = styled.div`
  margin-top: 50px;
  flex: 3;
`
const Student = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  margin: 3px 0;
  width: 250px;
  height: 40px;
  background-color: #eeeeee;
`

const AdminPanel = () => {
  const [students, setStudents] = useState([])
  
  useEffect(() => {
    const getStudents = async () => {
      const res = await axios.get('http://localhost:5000/api/students')
      setStudents(res.data)
    }
    getStudents()
  }, [])

  return (
    <Container>
      <Left>
        <StudentList>
          <Title>Student List</Title>
          {students && students.map(student => (
            <Student>{student.name}</Student>
          ))}
        </StudentList>
      </Left>
      <Right>
        <AddFraction />
      </Right>
    </Container>
  )
}

export default AdminPanel
