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
      <Slide id="skills" flow>
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


const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.blue03};
  padding: 0 40px;
  height: 100%;
  position: relative;

  ${props => props.column && css`
    flex-direction: column;
    justify-content: start;
    padding-top: 20px;
  `}
  ${props => props.flow && css`
    overflow: hidden;
  `}
`

export default Home
