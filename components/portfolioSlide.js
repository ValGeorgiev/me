import styled, { css, keyframes } from 'styled-components'
import colors from '../styles/colors'

const PortfolioSlide = () => {
  return (
    <>
      <Title>Projects</Title>
      <Clarification>All projects listed below are result of a hard team work.<br /> I have described what part of every project I did, just select a project and explore.</Clarification>
      <Container>
        <Cell>
          <Wrapper>
            <Image src="/images/social-adidas.png" alt="adidas" />
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
        <Cell>
          <Wrapper>
            <Image src="/images/social-thetimes.png" alt="The Times & The Sunday Times" />
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
      </Container>
      <Container>
        <Cell>
          <Wrapper>
            <Image src="/images/social-newskit.png" alt="NewsKit" />
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
        <Cell>
          <Wrapper>
            <Image src="/images/social-cmg.png" alt="Crypto Management Group" />
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
      </Container>
      <Container>
        <Cell>
          <Wrapper>
            <Image src="/images/social-danuki.jpeg" alt="Danuki Dojo" />
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
        <Cell>
          <Wrapper>
            <Image src="/images/social-florence.png" alt="Tourist guide in Florence" />
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
      </Container>
      <Container>
        <Cell>
          <Wrapper>
            <Image src="/images/social-wzrds.jpg" alt="WZRDS" />
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
        <Cell>
          <a href="mailto:valentin.al.georgiev@gmail.com">
            <Wrapper contactme>
              <Image visibilityHidden src="/images/social-wzrds.jpg" alt="WZRDS" />
              <HoverMe id="hover-me">Hover me!</HoverMe>
              <ContactMe id="contact-me">Contact me! <br /> Let&apos;s build your project and add it here!</ContactMe>
              <InfoContainer className="more-info">
                <InfoWrapper>
                  <span>Click for more information</span>
                </InfoWrapper>
              </InfoContainer>
            </Wrapper>
          </a>
        </Cell>
      </Container>
    </>
  )
}

const Title = styled.h2`
  color: ${colors.white};
  font-size: 26px;
`

const Cell = styled.div`
  display: inline-flex;
  flex-direction: column;
  text-align: center;
  max-width: 500px;
  color: ${colors.white};
  vertical-align: top;
  padding: 10px 15px;
  cursor: pointer;

  &:hover {

    & img {
      transform: scale(1.1);
    }

    .more-info {
      display: block;
    }
  }
`

const Wrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: ${colors.white};
  height: 100%;

  ${props => props.contactme && css`

    &:hover {
      & #hover-me {
        top: -80px;
      }
      & #contact-me {
        bottom: calc(50% - 65px);
      }
    } 
  `}
`

const Image = styled.img`
  width: 100%;
  transition: transform .5s ease;
  height: 100%;

  ${props => props.visibilityHidden && css`
    visibility: hidden;
  `}
`

const HoverMe = styled.p`
  color: ${colors.blue03};
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 65px);
  font-size: 24px;
  transition: all .2s ease-in-out;
`

const ContactMe = styled.p`
  color: ${colors.blue03};
  position: absolute;
  bottom: -120px;
  left: calc(50% - 240px);
  font-size: 24px;
  padding: 0 70px;
  line-height: 28px;
  transition: all .2s ease-in-out;
`

const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  box-shadow: inset 0px -25px 25px 9px rgba(0, 51, 101, .7);
  display: none;
`

const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;


  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Clarification = styled.p`
  color: ${colors.white};
  text-align: center;
  font-size: 18px;
  line-height: 24px;
`

export default PortfolioSlide