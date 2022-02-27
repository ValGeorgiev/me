import styled, { css, keyframes } from 'styled-components'
import colors from '../styles/colors'

const PortfolioSlide = () => {
  return (
    <PorfolioContainer>
      <ContainerWrapper>
        <Title>Projects</Title>
        <Clarification>All projects listed below are result of a hard team work.<br /> I have described what part of every project I did, just select a project and explore.</Clarification>
        <Container>
          <Cell>
            <Wrapper>
              <ProjectLink href="/project/virtue-alliance">
                <Image src="/images/social-va.jpg" alt="Virtue Alliance" />
                <ProjectInfo>
                  <div>
                    <Year>2022</Year>
                  </div>
                  <ProjectTitle>Virtue Alliance</ProjectTitle>
                </ProjectInfo>
              </ProjectLink>
            </Wrapper>
          </Cell>
          <Cell>
            <Wrapper>
              <ProjectLink href="/project/new-degen-order">
                <Image src="/images/social-degenorder.png" alt="New Degen Order" />
                <ProjectInfo>
                  <div>
                    <Year>2022</Year>
                  </div>
                  <ProjectTitle>New Degen Order</ProjectTitle>
                </ProjectInfo>
              </ProjectLink>
            </Wrapper>
          </Cell>
          <Cell>
            <Wrapper>
              <ProjectLink href="/project/wzrds">
                <Image src="/images/social-wzrds.jpg" alt="WZRDS" />
                <ProjectInfo>
                  <div>
                    <Year>2022</Year>
                  </div>
                  <ProjectTitle>WZRDS</ProjectTitle>
                </ProjectInfo>
              </ProjectLink>
            </Wrapper>
          </Cell>
          <Cell>
            <Wrapper>
              <ProjectLink href="/project/cmg">
                <Image src="/images/social-cmg.png" alt="Crypto Management Group" />
                <ProjectInfo>
                  <div>
                    <Year>2021</Year>
                  </div>
                  <ProjectTitle>Crypto Management Group</ProjectTitle>
                </ProjectInfo>
              </ProjectLink>
            </Wrapper>
          </Cell>
          <Cell>
            <Wrapper>
              <ProjectLink href="/project/tourist-guide-in-florence">
                <Image src="/images/social-florence.png" alt="Tourist guide in Florence" />
                <ProjectInfo>
                  <div>
                    <Year>2021</Year>
                  </div>
                  <ProjectTitle>Tourist guide in Florence</ProjectTitle>
                </ProjectInfo>
              </ProjectLink>
            </Wrapper>
          </Cell>
          <Cell>
            <Wrapper>
              <ProjectLink href="/project/danuki">
                <Image src="/images/social-danuki.jpeg" alt="Danuki Dojo" />
                <ProjectInfo>
                  <div>
                    <Year>2021</Year>
                  </div>
                  <ProjectTitle>Danuki Dojo</ProjectTitle>
                </ProjectInfo>
              </ProjectLink>
            </Wrapper>
          </Cell>
          <Cell>
            <Wrapper>
              <ProjectLink href="/project/the-times">
                <Image src="/images/social-thetimes.png" alt="The Times & The Sunday Times" />
                <ProjectInfo>
                  <div>
                    <Year>2019</Year>
                  </div>
                  <ProjectTitle>The Times & The Sunday Times</ProjectTitle>
                </ProjectInfo>
              </ProjectLink>
            </Wrapper>
          </Cell>
          <Cell>
            <Wrapper>
              <ProjectLink href="/project/adidas">
                <Image src="/images/social-adidas.png" alt="adidas" />
                <ProjectInfo>
                  <div>
                    <Year>2017-2018</Year>
                  </div>
                  <ProjectTitle>adidas</ProjectTitle>
                </ProjectInfo>
              </ProjectLink>
            </Wrapper>
          </Cell>
          <Cell>
            <ProjectLink href="mailto:valentin.al.georgiev@gmail.com">
              <Wrapper contactme>
                <Image visibilityHidden src="/images/social-wzrds.jpg" alt="WZRDS" />
                <ProjectInfo visibilityHidden>
                  <div>
                    <Year>2022</Year>
                  </div>
                  <ProjectTitle>WZRDS</ProjectTitle>
                </ProjectInfo>
                <HoverMe id="hover-me">Hover me!</HoverMe>
                <ContactMe id="contact-me">Contact me! <br /> Let&apos;s build your project and add it here!</ContactMe>
                <InfoContainer className="more-info">
                  <InfoWrapper>
                    <span>Click for more information</span>
                  </InfoWrapper>
                </InfoContainer>
              </Wrapper>
            </ProjectLink>
          </Cell>
          <Cell />
        </Container>
        <Note>NOTE: I have worked on more projects which unfortunately are private. If you are interested, I can walk you through them on our 1:1 meeting.</Note>
      </ContainerWrapper>
    </PorfolioContainer>
  )
}

const PorfolioContainer = styled.div`
  background: ${colors.beige};
  padding: 20px 40px;
  text-align: center;

  @media screen and (max-width: 520px) {
    padding: 20px;
  }
`

const ContainerWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

const Title = styled.h2`
  color: ${colors.blue03};
  font-size: 32px;
`

const Cell = styled.div`
  text-align: center;
  display: inline-block;
  width: 33.333%;
  color: ${colors.blue03};
  vertical-align: top;
  padding: 10px 15px;
  cursor: pointer;


  @media screen and (max-width: 1350px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const ProjectInfo = styled.div`
  text-align: center;
  margin-top: -4px;
  

  ${props => props.visibilityHidden && css`
    visibility: hidden;
  `}
`

const ProjectTitle = styled.span`
  color: ${colors.black};
  font-size: 18px;
  margin-top: 10px;
  display: inline-block;
  letter-spacing: 1px;

  @media screen and (max-width: 920px) {
    height: 40px;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }

`

const Year = styled.span`
  background: ${colors.black};
  color: ${colors.white};
  font-size: 16px;
  padding: 3px 10px;
  display: inline-block;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 400px;
  margin: 0 auto;

  padding: 10px;
  background: ${colors.white};
  box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
  transition: all .2s linear;
  
  ${props => props.contactme && css`
    background: ${colors.white};
    &:hover {
      & #hover-me {
        top: -80px;
      }
      & #contact-me {
        bottom: calc(50% - 55px);
      }
    } 
  `}

  &:hover {
    box-shadow: 0 10px 20px rgb(0 0 0 / 70%);
    transform: scale(1.01);
  }

  @media screen and (max-width: 920px) {
    width: 300px
  }

  @media screen and (max-width: 768px) {
    width: 400px
  }
  @media screen and (max-width: 470px) {
    width: 300px
  }
`

const Image = styled.img`
  width: 100%;
  transition: transform .5s ease;
  height: 100%;
  border: 1px solid ${colors.blue03};

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


  @media screen and (max-width: 768px) {
    display: none;
  }
`

const ContactMe = styled.p`
  color: ${colors.blue03};
  position: absolute;
  bottom: -120px;
  left: calc(50% - 200px);
  font-size: 20px;
  padding: 0 60px;
  width: 400px;
  line-height: 28px;
  transition: all .2s ease-in-out;


  @media screen and (max-width: 767px) {
    width: 280px;
    bottom: calc(50% - 45px);
    left: calc(50% - 140px);
    padding: 0;
    font-size: 18px;
    line-height: 22px;
  }
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

`

const Clarification = styled.p`
  color: ${colors.blue03};
  text-align: center;
  font-size: 18px;
  line-height: 24px;
`

const Note = styled.p`
  color: ${colors.blue03};
  max-width: 800px;
  margin: 40px auto;
  text-align: center;
  line-height: 26px;
`

const ProjectLink = styled.a`

`

export default PortfolioSlide