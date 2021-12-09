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
        <meta name="description" content="Valentin Georgiev - Software Engineer - Javascript, Reactjs, Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalFonts />
      <GlobalStyle />

      <Slide>
        <FirstSlide />
      </Slide>
      <Slide id="skills" noHeight>
        <SkillsSlide />
      </Slide>
      <Slide id="portfolio" column>
        <PortfolioSlide />
      </Slide>
      <Slide id="myself" column>
        <MyselfSlide />
      </Slide>
      <Slide id="contact">
        <ContactSlide />
      </Slide>

    </>
  )
}

const Container = styled.div`
  padding: 40px 50px;
  background: ${colors.white};
`

const Wrapper = styled.div`
  padding: 40px;
  background: ${colors.blue03};
  border-radius: 40px;
`

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  position: relative;

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
  `}
`


export default Home
