import Head from 'next/head'
import GlobalStyle from '../styles/globalStyles'
import { GlobalFonts } from '../styles/fonts'
import colors from '../styles/colors'
import styled, { css } from 'styled-components'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Valentin Georgiev | Software Engineer</title>
        <meta name="description" content="Valentin Georgiev - Software Engineer - Javascript, Reactjs, Nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalFonts />
      <GlobalStyle />

      <Header>
        <Cell small>
          <ImageContainer>
            <Image src="/images/me-hq.jpg" alt="Valentin Georgiev" />
          </ImageContainer>
        </Cell>
        <Cell>
          <Name><Nickname>Val</Nickname>entin Georgiev</Name>
          <Hr />
          <Greeting>Hello, I'm a Software Engineer.<br /> Learn more about me or my work here.</Greeting>

          <div>
            <NavLink>Skills</NavLink>
            <NavLink>My career</NavLink>
            <NavLink>Portfolio</NavLink>
            <NavLink>Me, myself and I</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Contact me</NavLink>
          </div>
        </Cell>
      </Header>

    </div>
  )
}

const ImageContainer = styled.div`
  max-width: 300px;
  max-height: 300px;
`

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  box-shadow: 0px 5px 15px #91919126;
`

const Header = styled.div`
  background: ${colors.blue03};
  padding: 40px;
`

const Cell = styled.div`
  display: inline-block;
  width: 65%;
  vertical-align: top;
  padding: 0 40px;

  ${props => props.small && css`
    width: 35%;
  `}
`

const Name = styled.h1`
  font-size: 48px;
  color: ${colors.grey01};
`
const Nickname = styled.span`
  font-size: 48px;
  color: ${colors.white};
`

const Hr = styled.hr`
  width: 300px;
  border: 2px solid ${colors.white};
  margin: 0;
`

const Greeting = styled.p`
  font-size: 26px;
  color: ${colors.grey01};
  line-height: 34px;
`

const NavLink = styled.span`
  color: ${colors.grey01};
  margin-right: 10px;
  border-bottom: 1px solid ${colors.grey01};
  padding-bottom: 2px;
`

export default Home
