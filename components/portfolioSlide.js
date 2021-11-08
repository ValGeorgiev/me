import styled, { keyframes } from 'styled-components'
import colors from '../styles/colors'

const PortfolioSlide = () => {
  return (
    <>
      <Title>Projects</Title>
      <Clarification>All projects listed below are result of a hard team work. I have described what part of every project I did.</Clarification>
      <Container>
        <Cell>
          <Wrapper>
            <div>
              <Image src="/images/social-cmg.png" alt="Crypto Management Group" />
            </div>
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
        <Cell>
          <Wrapper>
            <div>
              <Image src="/images/social-danuki.jpeg" alt="Danuki Dojo" />
            </div>
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
            <div>
              <Image src="/images/social-danuki.jpeg" alt="Danuki Dojo" />
            </div>
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
        <Cell>
          <Wrapper>
            <div>
              <Image src="/images/social-danuki.jpeg" alt="Danuki Dojo" />
            </div>
            <InfoContainer className="more-info">
              <InfoWrapper>
                <span>Click for more information</span>
              </InfoWrapper>
            </InfoContainer>
          </Wrapper>
        </Cell>
      </Container>
    </>
  )
}

const rotate = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
`;

const Title = styled.h2`
  color: ${colors.white};
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
      transform: scale(1.2);
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
`


const Image = styled.img`
  width: 100%;
  transition: transform .5s ease;
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
`

const Clarification = styled.p`
  color: ${colors.white};
`

export default PortfolioSlide