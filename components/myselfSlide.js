import styled from 'styled-components'
import colors from '../styles/colors'
import fonts from '../styles/fonts'

const MyselfSlide = () => {
  return (
    <Container>
      <Title>Me, myself and I</Title>
      <Summary>
        Most of the people call me Val, you can do it as well!
        <br />
        <br />
        I am very passionate and motivated software engineer, with a lot of experience in mobile and web worlds. 
        In the past few years I gained a lot of experience in leading teams, delivering products and helping people become better human beings and engineers.
        <br />
        <br />
        Currently I am working for the best global digital design + development firm and open source software organization - <FormidaLink href="https://formidable.com" target={"_blank"} rel="noreferrer">Formidable</FormidaLink>, 
        as a hands-on Engineering Manager. I am very happy in the company, these people are amazing, so I am not looking for a permanent position.
      </Summary>
      <InnerWrapper>

        <Info>
          On the other side, I am looking for side projects, where I can demonstrate my skills and help people and companies to improve their tech side of the business. 
          In me you will always find a person who can give 100% honest opinions and share valuable improvements and suggestions that you are not aware of.
          Otherwise we can always sit down and talk about tech, real estates, dogs and sport. These are the 4 fields that are very close to my heart and I can talk (and listen) all day.
        </Info>
        <ImageContainer>

          <ImageWrapper>
            <Image src='images/rocky-and-me.jpg' alt="rocky and me" />
            <Shadow></Shadow>
          </ImageWrapper>
        </ImageContainer>
      </InnerWrapper>
    </Container>
  )
}

const Title = styled.h2`
  text-align: center;
  color: ${colors.white};
  font-size: 32px;
`
const Summary = styled.p`
  text-align: center;
  color: ${colors.white};
  max-width: 1000px;
  line-height: 28px;
  font-size: 18px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px 0;
`
const InnerWrapper = styled.div`
  display: block;
  max-width: 1000px;

`

const Info = styled.div`
  display: inline-block;
  width: 50%;
  padding-right: 30px;
  padding-top: 60px;
  color: ${colors.white};
  font-size: 18px;
  line-height: 28px;
  vertical-align: top;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-right: 0;
    padding-top: 30px;
    width: 100%;
  }
`

const ImageContainer = styled.div`
  display: inline-block;
  width: 50%;
  padding-left: 20px;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    width: 100%;
    margin-top: 20px;
  }
`

const ImageWrapper = styled.div`
  text-align: center;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  opacity: 0.9;
  max-width: 600px;
`

const Shadow = styled.div`
  display: block;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  box-shadow: inset 0px 0px 20px 5px ${colors.blue03};
`

const FormidaLink = styled.a`
  font-family: ${fonts.fontFamilyBold};
`

export default MyselfSlide