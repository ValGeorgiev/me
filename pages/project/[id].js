import Head from 'next/head'
import GlobalStyle from '../../styles/globalStyles'
import { GlobalFonts } from '../../styles/fonts'
import styled, { css } from "styled-components"
import colors from "../../styles/colors"
import projects from '../../utils/data'
import logos from '../../utils/logo'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Project = ({ project }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    arrows: false,
  };

  return (
    <>
      <Head>
        <title>Valentin Georgiev | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <Container>
        <Title>{project.title}</Title>

        {project.photos ? (
          <ImagesContainer>
            <div>
              <Device>Desktop:</Device>
              <Slider {...settings}>
                {project.photos?.map((img, index) => {
                  return (
                    <ImageWrapper key={img}>
                      <Image index={index} src={`/images/${project.id}/${img}`} />
                    </ImageWrapper>
                  )
                })}
              </Slider>
            </div>
          </ImagesContainer>
        ) : null}

        <InnerContainer>
          {project.mobilePhotos ? (
            <ImagesContainer>
              <div>
                <Device>Mobile:</Device>
                {project.mobilePhotos?.map((img, index) => {
                  return (
                    <MobileImageWrapper key={img} length={project.mobilePhotos.length}>
                      <Image mobile index={index} src={`/images/${project.id}/${img}`} />
                    </MobileImageWrapper>
                  )
                })}
              </div>
            </ImagesContainer>
          ) : null}
          <Wrapper>
            <Cell>
              <SubTitle>Description</SubTitle>
              <Description dangerouslySetInnerHTML={{__html: project.description}} />
            </Cell>
            <Cell small>
              {
                project.company && (
                  <>
                    <InnerCell>
                      <a href={project.companyLink} target="_blank"><Icon src="/images/office-building.png" /> {project.company}</a>
                    </InnerCell>
                    <Hr />
                  </>
                )
              }
              {
                project.times && (
                  <>
                    <InnerCell>
                      <span><Icon src="/images/calendar.png" /> {project.times}</span>
                    </InnerCell>
                    <Hr />
                  </>
                )
              }
              {
                project.link && (
                  <>
                    <InnerCell>
                      <a href={project.link} target="_blank"><Icon src="/images/link.png" /> {project.displayLink}</a>
                    </InnerCell>
                    <Hr />
                  </>
                )
              }
              {
                project.tech && (
                  <>
                    <InnerCell>
                      <p>Used technologies:</p>
                      {project.tech?.map(t => {
                        return (
                          <LogoWrapper key={t}>
                            <Logo src={logos[t]} alt={t} />
                            <Label>{t}</Label>
                          </LogoWrapper>
                        )
                      })}
                    </InnerCell>
                    <Hr />
                  </>
                )
              }
            </Cell>
          </Wrapper>
        </InnerContainer>

      </Container>
      <Footer />
    </>
  )
}

const Title = styled.h1`
  color: ${colors.white};
  text-align: center;
  font-size: 48px;
  margin-top: 60px;
`

const Container = styled.div`

`

const ImagesContainer = styled.div`
  padding: 10px 0 60px;
`

const InnerContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 60px;
`

const Wrapper = styled.div`
  border: 1px solid ${colors.blue01};
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
`

const Cell = styled.div`
  width: 75%;
  display: inline-block;
  vertical-align: top;

  ${props => props.small && css`
    width: 25%;
    border-left: 1px solid ${colors.blue01};
    padding: 20px;
  `}
`

const SubTitle = styled.h3`
  color: ${colors.white};
`

const Description = styled.p`
  color: ${colors.white};
  padding: 0 40px 40px 0;
  line-height: 24px;
`

const InnerCell = styled.div`
  color: ${colors.white};
  padding: 10px 0;
`

const Hr = styled.hr`
  border: 1px solid ${colors.blue01};
`

const Icon = styled.img`
  width: 30px;
  vertical-align: middle;
  margin-right: 10px;
`

const Image = styled.img`
  width: 100%;
  border-radius: 20px;

  ${props => props.mobile && css`
    border: 10px solid ${colors.black};
  `}
`

const ImageWrapper = styled.div`
  padding: 0 10px;
  outline: none;
`

const MobileImageWrapper = styled.div`
  padding: 0 60px;
  display: inline-block;
  ${props => props.length && css`
    width: ${100 / props.length}%;
  `}
`

const Device = styled.h3`
  text-align: center;
  color: ${colors.white};
`

const Logo = styled.img`
  width: 50px;
  margin-right: 20px;
  margin-bottom: 10px;
  vertical-align: middle;
`
const LogoWrapper = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    span {
      display: inline-block;
    }
  }
`

const Label = styled.span`
  position: absolute;
  top: -5px;
  right: 0;
  padding: 0 5px;
  border: 1px solid ${colors.blue01};
  color: ${colors.blue03};
  background: ${colors.white};
  font-size: 12px;
  display: none;

`

export async function getServerSideProps(context) {
  const project = projects.filter(({ id }) => id === context.params.id)?.[0]

  return {
    props: {
      project
    }
  }
}

export default Project