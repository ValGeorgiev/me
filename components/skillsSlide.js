import styled, { css } from 'styled-components'
import colors from '../styles/colors'

const SkillsSlide = () => {
  return (
    <Container>
      <Cell>
        <div>Expert</div>
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
        <div>Pro</div>
        <List>
          <Skill>Typescript</Skill>
          <Skill>Vue.js</Skill>
          <Skill>AWS</Skill>
          <Skill>Salesforce Commerce Cloud</Skill>
          <Skill>Animations</Skill>
          <Skill>Progressive Web Apps</Skill>
          <Skill>Performance optimizations</Skill>
          <Skill>Webpack/Rollup/Parcel</Skill>
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
`

const List = styled.ul`
  color: ${colors.white};
  list-style-type: none;
  display: inline-block;
  text-align: left;
`

const Skill = styled.li`
  margin: 10px 0;
`

const Container = styled.div`
  display: flex;
`

export default SkillsSlide