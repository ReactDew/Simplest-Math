import styled from 'styled-components'
import WorksheetButtons from '../components/WorksheetButtons'
import FractionsTest from '../components/Fractions/FractionsTest'
import EqualFractionsTest from '../components/Fractions/EqualFractionsTest'
import SequenceFractionsTest from '../components/Fractions/SequenceFractionsTest'
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Youtube from 'react-youtube'
import axios from 'axios'
import { mobile } from '../responsive'

const Container = styled.div`
  padding: 0 25vw;
  ${mobile({ padding: '0px 0px', display: 'flex', alignItems: 'center'})}
`
const FractionsWorksheet = styled.div``

const ForumDropDown = styled.div`
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35); 
  box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35);
`
const Title = styled.h2`
  margin-left: 50px;
  font-size: 17px;
  font-weight: 500;
`
const Icon = styled.div`
  margin-right: 50px;
`

const PostSection = styled.div`
  width: 100%;
  margin-top: -5px;
  height: 550px;
  -webkit-box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35); 
  box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35);
`
const Link = styled.h1`
  padding: 20px 50px;
  font-size: 17px;
  font-weight: 500;
`
const EqualDropDown = styled.div`
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35); 
  box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35);
`
const VideoContainer = styled.div`
  ${mobile({ width: '100%' })}
`
const SequenceDropDown = styled.div`
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35); 
  box-shadow: 0px 0px 14px -5px rgba(0,0,0,0.35);
`

const Fractions = () => {
  const buttons = ['Addition', 'Subtraction', 'Multiplication', 'Division', 'Mixed']
  const [open, setOpen] = useState(false)
  const [equalOpen, setEqualOpen] = useState(false)
  const [sequenceOpen, setSequenceOpen] = useState(false)
  const videoOptions = {height: '600px', width: '100%'}

  const operation = useSelector(state => state.worksheetButtons.button)
  const mode = useSelector(state => state.practiceMode.mode)
  const [fractions, setFractions] = useState([])

  useEffect(() => {
    const getFractions = async () => {
      const res = await axios.get('http://localhost:5000/api/fractions')
      setFractions(res.data)
    }
    getFractions()
  }, [operation])

  return (
    <Container>
      <FractionsWorksheet>
        {mode && mode === 'Prebuilt Sheet' ? <WorksheetButtons buttons={buttons} /> : ''}
        <FractionsTest fractions={fractions} />
        <EqualDropDown onClick={() => setEqualOpen(!equalOpen)}>
          <Title>Test the equal fractions</Title>
          <Icon>{equalOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</Icon>
        </EqualDropDown>
        {equalOpen && (
          <EqualFractionsTest />
        )}
        <SequenceDropDown onClick={() => setSequenceOpen(!sequenceOpen)}>
          <Title>The sequence test</Title>
          <Icon>{sequenceOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</Icon>
        </SequenceDropDown>
        {sequenceOpen && (
          <SequenceFractionsTest />
        )}
        <ForumDropDown onClick={() => setOpen(!open)}>
          <Title>Watch the Post on our Forum</Title>
          <Icon>{open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}</Icon>
        </ForumDropDown>
        {open && (
          <PostSection>
            <Link>Go to the <a href='https://blissful-morse-74ed12.netlify.app/' target='_blank' rel='noreferrer'>forum</a></Link>
            <iframe style={{border: 'none'}} title='post' src='https://blissful-morse-74ed12.netlify.app/' width='100%' height='100%'></iframe>
            <VideoContainer>
              <Youtube videoId='OdRHCc_qE2A' opts={videoOptions} />
            </VideoContainer>
          </PostSection>
        )}
      </FractionsWorksheet>
    </Container>
  )
}

export default Fractions