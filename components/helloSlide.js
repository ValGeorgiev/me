import styled, { css } from 'styled-components'
import colors from '../styles/colors'

const HelloSlide = () => {

  return (
    <>
      <Cell small>
        <Image src="/images/me-hq.jpg" alt="Valentin Georgiev" />
      </Cell>
      <Cell>
        <Name><Nickname>Val</Nickname>entin Georgiev</Name>
        <Hr />
        <Greeting>Hello, I&apos;m a Software Engineer and dog lover.<br /> Learn more about me and my work here.</Greeting>

        <div>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#myself">About me</NavLink>
          <NavLink href="#contact">Contact me</NavLink>
        </div>
      </Cell>
    </>
  )
}

const Image = styled.img`
  border-radius: 50%;
  border: 10px solid ${colors.white};
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  box-shadow: 0px 5px 15px #91919126;
  transition: 1s;

  @media screen and (max-width: 950px) {
    margin-bottom: 30px;
    max-width: 250px;
    max-height: 250px;
  }

  &:hover {
    transform: scaleX(-1);
  }
`


const Cell = styled.div`
  display: inline-block;
  width: 65%;
  vertical-align: top;
  padding: 0 40px;

  @media screen and (max-width: 950px) {
    width: 100%;
    margin: 0 auto;
    max-width: 700px;
  }

  ${props => props.small && css`
    width: 35%;
    text-align: center;

    @media screen and (max-width: 950px) {
      text-align: left;
    }
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  `}

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    padding: 0;
  }
`

const Name = styled.h1`
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 30px;
  color: ${colors.grey01};
`

const Nickname = styled.span`
  font-size: 48px;
  color: ${colors.white};
`

const Hr = styled.hr`
  width: 400px;
  border: 2px solid ${colors.white};
  margin: 0;


  @media screen and (max-width: 768px) {
    width: 270px;
  }
`

const Greeting = styled.p`
  font-size: 26px;
  color: ${colors.grey01};
  line-height: 34px;
  margin-top: 30px;
  margin-bottom: 40px;
`

const NavLink = styled.a`
  color: ${colors.grey01};
  margin-right: 15px;
  border-bottom: 1px solid ${colors.grey01};
  padding-bottom: 2px;
  font-size: 16px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }

`


export default HelloSlide