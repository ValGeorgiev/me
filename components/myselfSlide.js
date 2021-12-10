import styled, { css } from 'styled-components'
import colors from '../styles/colors'

const MyselfSlide = () => {
  return (
    <Container>
      <Title>Me, myself and I</Title>
      <Summary>If you are interested in me, here is the right place.</Summary>

    </Container>
  )
}

const Title = styled.h3`
  text-align: center;
  color: ${colors.white};
  font-size: 26px;
`
const Summary = styled.p`
  text-align: center;
  color: ${colors.white};
  max-width: 1000px;
  line-height: 28px;
  font-size: 20px;
`

const Logo = styled.img`
  width: 50px;
  vertical-align: middle;
  margin-right: 10px;
`

const Label = styled.span`
  vertical-align: middle;
  display: inline-block;
`

const ButtonsWrapper = styled.div`
  color: ${colors.white};
  text-align: left;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SocialLink = styled.a`
  margin: 15px 0;
  padding: 0 15px;
  display: block;
`

export default MyselfSlide