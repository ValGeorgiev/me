import styled, { css } from 'styled-components'
import colors from '../styles/colors'

const ContactSlide = () => {
  return (
    <Container>
      <Title>Contact me</Title>
      <div>
        <a>LinkedIn</a>
        <a href="mailto:valentin.al.georgiev@gmail.com">Mail</a>
      </div>
    </Container>
  )
}

const Title = styled.h3`
  text-align: center;
  color: ${colors.white};
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
  flex-direction: column
`

export default ContactSlide