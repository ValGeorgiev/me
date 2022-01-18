import styled, { css } from 'styled-components'
import colors from '../styles/colors'

const ContactSlide = () => {
  return (
    <Container>
      <Title>You can contact me as well.</Title>
      <Summary>I will respond for sure if you are looking for someone to build your website, mobile application or any other software or if you are software engineer who is looking for a career advice or just wants to explore new opportunities.</Summary>
      <Wrapper>
        <ButtonsWrapper>
          <SocialLink href="https://www.linkedin.com/in/val-georgiev/" target="_blank" rel="noreferrer">
            <Logo src="/images/linkedin.svg" />
            <Label>/val-georgiev</Label>
          </SocialLink>
          <SocialLink href="mailto:valentin.al.georgiev@gmail.com">
            <Logo src="/images/mail.svg" />
            <Label>valentin.al.georgiev@gmail.com</Label>
          </SocialLink>
        </ButtonsWrapper>
      </Wrapper>
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
  font-size: 18px;

  @media screen and (max-width: 1100px) {
    max-width: 800px;
  }
`

const Logo = styled.img`
  width: 50px;
  vertical-align: middle;
  margin-right: 10px;
`

const Label = styled.span`
  vertical-align: middle;
  display: inline-block;

  @media screen and (max-width: 767px) {
    display: block;
    margin-top: 10px;
  }
`

const ButtonsWrapper = styled.div`
  color: ${colors.white};
  text-align: left;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

const SocialLink = styled.a`
  margin: 15px 0;
  padding: 0 15px;
  display: block;
  
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`

export default ContactSlide