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
        <List>
          <div>
            <Skill center ref={jsRef}>Javascript</Skill>
            <Skill right ref={htmlRef}>HTML & CSS</Skill>
          </div>
          <div>
            <Skill margin ref={tsRef} tsSkill>Typescript</Skill>
            <Skill margin ref={reactRef}>React.js</Skill>
          </div>
          <div>
            <Skill ref={nodeRef}>Node.js</Skill>
            <Skill right ref={nextRef}>Next.js</Skill>
          </div>
          <div>
            <Skill margin ref={graphRef}>GraphQL</Skill>
            <Skill margin ref={mongoRef}>MongoDB</Skill>
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
            <Skill>Testing</Skill>
            <Skill>CI/CD</Skill>
            <Skill>AWS</Skill>
          </div>
          <div>
            <Skill>Salesforce Commerce Cloud</Skill>
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
  `}
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

`

const Skill = styled.li`
  margin: 10px 20px;
  border: 2px dashed ${colors.white};
  color: ${colors.white};
  font-size: 20px;
  padding: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 5px;
  transition: .5s;
  height: 70px;
  display: inline-block;

  &:hover {
    border: 2px dashed ${colors.blue02};
  }

  ${props => props.margin && css`
    margin: 60px 80px;
  `}

  ${props => props.center && css`
    margin-right: -200px;
  `}
  ${props => props.right && css`
    float: right;
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

export default SkillsSlide