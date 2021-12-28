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
        Currently I am working for the best global digital design + development firm and open source software organization - <FormidaLink href="https://formidable.com" target={"_blank"}>Formidable</FormidaLink>, 
        as a hands-on Engineering Manager. I am very happy in the company, these people are amazing, so I am not looking for a permanent position.
      </Summary>
      <InnerWrapper>

        <Info>
          On the other side, I am looking for side projects, where I can demonstrate my skills and help people and companies to improve their tech side of the business. 
          In me you will always find a person who can give 100% honest opinions and share valuable improvements and suggestions that you are not aware.
          Otherwise we can always sit down and talk about tech, real estates, dogs and sport. These are the 4 fields that are very close to my heart and I can talk (and listen) all day about that.
        </Info>
        <ImageWrapper>
          <Image src='images/rocky-and-me.jpg' alt="rocky and me" />
        </ImageWrapper>
      </InnerWrapper>
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
  font-size: 20px;
  line-height: 28px;
  vertical-align: top;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-right: 0;
    padding-top: 30px;
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  display: inline-block;
  width: 50%;
  padding-left: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-left: 0;
    width: 100%;
    margin-top: 20px;
  }
`

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  opacity: 0.9;
  max-width: 600px;
`

const FormidaLink = styled.a`
  font-family: ${fonts.fontFamilyBold};
`

export default MyselfSlide