import styled, { css } from 'styled-components'
import colors from '../styles/colors'

const Footer = () => {
  return (
    <Container>
      <Cell>
        <Link href="mailto:valentin.al.georgiev@gmail.com">valentin.al.georgiev@gmail.com</Link>
      </Cell>
      <Cell center>
        <Link href="https://www.linkedin.com/in/val-georgiev/" target="_blank" rel="noreferrer">/val-georgiev</Link>
      </Cell>
      <Cell right>
        <Copyright>© Copyright. All rights reserved.</Copyright>
      </Cell>
    </Container>
  )
}

const Container = styled.div`
  padding: 40px;
  background: ${colors.white};
`

const Cell = styled.div`
  width: 33.333%;
  display: inline-block;
  vertical-align: middle;

  ${props => props.center && css`
    text-align: center;
  `}

  ${props => props.right && css`
    text-align: right;
  `}
`

const Link = styled.a`
  color: ${colors.blue03};
  font-size: 16px;
`

const Copyright = styled.p`
  color: ${colors.blue03};
  font-size: 16px;
  margin: 0;
`

export default Footer