import styled, { css } from 'styled-components'
import colors from '../styles/colors'

const SkillsSlide = () => {
  return (
    <Container>
      <Cell>
        <Title>Expert</Title>
        <List>
          <Skill>Javascript</Skill>
          <Skill>React.js</Skill>
          <Skill>Next.js</Skill>
          <Skill>Node.js</Skill>
          <Skill>Express.js</Skill>
          <Skill>GraphQL</Skill>
          <Skill>MongoDB</Skill>
          <Skill>HTML & CSS</Skill>
          <Skill>CSS-in-JS</Skill>
          <Skill>Unit & E2E testing</Skill>
          <Skill>CI & CD tools</Skill>
        </List>
      </Cell>
      <Cell>
        <Title>Pro</Title>
        <List>
          <Skill>Typescript</Skill>
          <Skill>Vue.js</Skill>
          <Skill>AWS</Skill>
          <Skill>Serverless</Skill>
          <Skill>Salesforce Commerce Cloud</Skill>
          <Skill>Animations</Skill>
          <Skill>Progressive Web App</Skill>
          <Skill>Performance optimizations</Skill>
          <Skill>Webpack & Babel</Skill>
          <Skill>Leading teams</Skill>
        </List>
      </Cell>
      <BGImage src="/images/me-presenting.jpg" />
      <BGImage oposite src="/images/me-presenting.jpg" />
    </Container>
  )
}

const Cell = styled.div`
  display: inline-block;
  width: 50%;
  text-align: center;
  color: ${colors.blue03};
  vertical-align: top;
  z-index: 2;
  backdrop-filter: blur(20px);
  padding: 40px;
  height: 100%;
  border: 1px solid ${colors.blue03};
`

const List = styled.ul`
  color: ${colors.white};
  list-style-type: none;
  display: inline-block;
  text-align: left;
  padding: 0 40px 40px;
  margin-top: 0;
`

const Skill = styled.li`
  margin: 10px 0;
  color: ${colors.blue03};
  font-size: 20px;
`

const Title = styled.h4`
  text-align: left;
  font-size: 28px;
`

const Container = styled.div`
  display: flex;
  height: 100%;
`

const BGImage = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;

  ${props => props.oposite && css`
    transform: rotateY(180deg);
    left: 0;
  `}
`

export default SkillsSlide