import Head from 'next/head'
import GlobalStyle from '../styles/globalStyles'
import { GlobalFonts } from '../styles/fonts'
import colors from '../styles/colors'
import styled, { css } from 'styled-components'
import FirstSlide from '../components/helloSlide'
import SkillsSlide from '../components/skillsSlide'
import ContactSlide from '../components/contactSlide'
import PortfolioSlide from '../components/portfolioSlide'
import MyselfSlide from '../components/myselfSlide'

const Home = () => {
  return (
    <>
      <Head>
        <title>Valentin Georgiev | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalFonts />
      <GlobalStyle />
      <Container>
        <Slide first>
          <FirstSlide />
        </Slide>
        <Slide id="skills" noHeight>
          <SkillsSlide />
        </Slide>
        <div id="portfolio">
          <PortfolioSlide />
        </div>
        <Slide id="myself" column>
          <MyselfSlide />
        </Slide>
        <Slide id="contact">
          <ContactSlide />
        </Slide>
      </Container>
    </>
  )
}

const Container = styled.div`
  height: 100%;
`

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  ${props => props.column && css`
    flex-direction: column;
    justify-content: start;
    padding-top: 20px;
    height: auto;
  `}
  ${props => props.flow && css`
    overflow: hidden;
  `}
  ${props => props.noHeight && css`
    height: auto;
    @media screen and (max-width: 768px) {
      display: block;
    }
  `}

  ${props => props.first && css`
    
    @media screen and (max-width: 950px) {
      flex-direction: column
    }
  `}

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`


export default Home
