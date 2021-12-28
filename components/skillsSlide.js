import styled, { css } from 'styled-components'
import colors from '../styles/colors'
import Xarrow from "react-xarrows";
import { useRef } from 'react';

const SkillsSlide = () => {
  const tsRef = useRef(null)
  const jsRef = useRef(null)
  const reactRef = useRef(null)
  const htmlRef = useRef(null)
  const nodeRef = useRef(null)
  const graphRef = useRef(null)
  const mongoRef = useRef(null)
  const nextRef = useRef(null)
  const rnRef = useRef(null)

  return (
    <Container>
      <Title>What I do</Title>
      <Cell>
        <CellWrapper>
          <Number>1.</Number>
          Modern web sites & platforms
        </CellWrapper>
      </Cell>
      <Cell>
        <CellWrapper>
          <Number>2.</Number>
          Mobile applications
        </CellWrapper>
      </Cell>
      <Cell>
        <CellWrapper>
          <Number>3.</Number>
          Leading and scaling engineering teams
        </CellWrapper>
      </Cell>
      <Cell>
        <CellWrapper>
          <Number>4.</Number>
          Lecturing and helping people grow
        </CellWrapper>
      </Cell>
      <Cell fullWidth>
        <Title>Expertise</Title>
        <Disclaimer>
          These are the languages/frameworks which I am most skilled with. I have experience with many other languages and libraries, where I am not an expert, but I can bring a lot of value.
        </Disclaimer>
        <List>
          <FirstRow>
            <Skill mobileJs center medium ref={jsRef}>Javascript</Skill>
            <Skill mobileHtml right medium ref={htmlRef}>HTML & CSS</Skill>
          </FirstRow>
          <div>
            <Skill margin mobileJs medium ref={tsRef} tsSkill>Typescript</Skill>
            <Skill margin mobileReact ref={reactRef}>React.js</Skill>
          </div>
          <div>
            <Skill ref={nodeRef}>Node.js</Skill>
            <Skill margin mobileNative medium ref={rnRef} rnSkill>React Native</Skill>
            <Skill right mobileNext ref={nextRef}>Next.js</Skill>
          </div>
          <div>
            <Skill margin mobileGraph regular ref={graphRef}>GraphQL</Skill>
            <Skill margin mobileMongo regular ref={mongoRef}>MongoDB</Skill>
          </div>
          <Xarrow
            start={jsRef}
            end={tsRef}
            animateDrawing
            strokeWidth={2}
            headSize={0}
            lineColor={colors.blue02}
            startAnchor="bottom"
            endAnchor="top"
          />
          <Xarrow
            start={jsRef}
            end={reactRef}
            strokeWidth={2}
            animateDrawing
            headSize={0}
            lineColor={colors.blue02}
            startAnchor="bottom"
            endAnchor="top"
          />
          <Xarrow
            start={tsRef}
            end={reactRef}
            strokeWidth={2}
            animateDrawing
            headSize={0}
            lineColor={colors.blue02}
          />
          <Xarrow
            start={reactRef}
            end={nextRef}
            strokeWidth={2}
            animateDrawing
            headSize={0}
            lineColor={colors.blue02}
          />
          <Xarrow
            start={reactRef}
            end={rnRef}
            strokeWidth={2}
            animateDrawing
            headSize={0}
            lineColor={colors.blue02}
          />
          <Xarrow
            start={reactRef}
            end={htmlRef}
            strokeWidth={2}
            animateDrawing
            headSize={0}
            lineColor={colors.blue02}
          />
          <Xarrow
            start={tsRef}
            end={nodeRef}
            strokeWidth={2}
            animateDrawing
            headSize={0}
            lineColor={colors.blue02}
          />
          <Xarrow
            start={nodeRef}
            end={graphRef}
            strokeWidth={2}
            animateDrawing
            headSize={0}
            lineColor={colors.blue02}
          />
          <Xarrow
            start={nodeRef}
            end={mongoRef}
            strokeWidth={2}
            animateDrawing
            headSize={0}
            lineColor={colors.blue02}
            startAnchor="bottom"
            endAnchor="top"
          />
          <div>
            <Skill regular>Testing</Skill>
            <Skill>CI/CD</Skill>
            <Skill>AWS</Skill>
          </div>
          <div>
            <Skill mobileSalesforce huge>Salesforce Commerce Cloud</Skill>
          </div>
        </List>
      </Cell>
    </Container>
  )
}

const Cell = styled.div`
  display: inline-block;
  width: 50%;
  text-align: center;
  color: ${colors.white};
  vertical-align: top;
  padding: 10px;

  ${props => props.fullWidth && css`
    width: 100%;
    display: block;
    margin-top: 80px;
  `}


  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
  }
`

const CellWrapper = styled.div`
  border: 2px solid ${colors.white};
  padding: 25px;
  border-radius: 5px;
  position: relative;
  font-size: 20px;
  transition: .5s;
  
  &:hover {
    border: 2px solid ${colors.blue02};

    & > span {
      border-bottom: 2px solid ${colors.blue02};
      border-right: 2px solid ${colors.blue02};
    }
  }
  
  @media screen and (max-width: 787px) {
    padding: 32px;
  }
`


const Number = styled.span`
  width: 35px;
  height: 35px;
  line-height: 32px;
  top: -2px;
  left: -2px;
  position: absolute;
  color: ${colors.white};
  font-size: 20px;
  border-bottom-right-radius: 5px;
  border-top: 2px solid ${colors.blue03};
  border-left: 2px solid ${colors.blue03};
  border-bottom: 2px solid ${colors.white};
  border-right: 2px solid ${colors.white};
  background: ${colors.blue03};
  transition: .5s;
`

const List = styled.ul`
  color: ${colors.white};
  list-style-type: none;
  display: block;
  width: 100%;
  text-align: center;
  padding: 0 40px 40px;
  margin-top: 0;

  @media screen and (max-width: 767px) {
    padding: 0 0 40px;
  }

`

const Skill = styled.li`
  margin: 10px 20px;
  border: 2px dashed ${colors.white};
  color: ${colors.white};
  font-size: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 5px;
  transition: .5s;
  height: 70px;
  display: inline-block;
  width: 120px;
  text-align: center;
  line-height: 70px;

  &:hover {
    border: 2px dashed ${colors.blue02};
    font-size: 22px;
  }

  ${props => props.margin && css`
    margin: 60px 80px;

    @media screen and (max-width: 820px) {
      margin: 60px 30px;
    }
  `}

  ${props => props.center && css`
    margin-right: -200px;
  `}
  ${props => props.right && css`
    float: right;
  `}
  
  ${props => props.rnSkill && css`
    margin-right: -100px;
  `}

  ${props => props.medium && css`
    width: 180px;
  `}
  ${props => props.regular && css`
    width: 140px;
  `}
  ${props => props.huge && css`
    width: 350px;
  `}

  ${props => props.mobileJs && css`
    @media screen and (max-width: 820px) {
      float: left;
      margin-left: 70px;
    }
    @media screen and (max-width: 767px) {
      float: left;
      margin-left: 10px;
    }
  `}

  ${props => props.mobileHtml && css`

    @media screen and (max-width: 767px) {
      float: right;
      margin-left: 10px;
      margin-top: 90px;
    }
  `}
  ${props => props.mobileNext && css`

    @media screen and (max-width: 767px) {
      margin-right: 0;
    }
  `}

  ${props => props.mobileReact && css`

    @media screen and (max-width: 767px) {
      margin: 20px 0px;
      float: right;
    }
  `}
  ${props => props.mobileNative && css`

    @media screen and (max-width: 767px) {
      margin: 25px 30px;
      float: right;
    }
  `}
  ${props => props.mobileGraph && css`

    @media screen and (max-width: 767px) {
      margin: 130px 5px 5px;
    }
  `}
  ${props => props.mobileMongo && css`

    @media screen and (max-width: 767px) {
      margin: 0px 20px 5px 5px;
      float: right;
    }
  `}
  ${props => props.mobileSalesforce && css`

    @media screen and (max-width: 767px) {
      margin: 10px 0;
      width: 330px;
    }
  `}
`

const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  color: ${colors.white};
  margin-bottom: 50px;
`

const Container = styled.div`

`

const Disclaimer = styled.p`
  padding: 0 190px;
  margin: 10px 0 60px;
  line-height: 24px;
  font-size: 18px;

  @media screen and (max-width: 1024px) {
    padding: 0 90px;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

const FirstRow = styled.div`
  @media screen and (max-width: 820px) {
    height: 120px;
  }
`

export default SkillsSlide