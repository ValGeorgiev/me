import styled from "styled-components"
import colors from "../styles/colors"

const Header = () => {
  return (
    <Wrapper>
      <a href="/">
        <Image src="/images/me-hq.jpg" alt="Valentin Georgiev" />
        <Label>Val Georgiev</Label>
      </a>

      <MoreLink href="/#portfolio">
        <Label>More projects</Label>
      </MoreLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px 40px;
  background: ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    padding: 20px;
  }
`

const MoreLink = styled.a`
  vertical-align: middle;
  line-height: 38px;
`

const Image = styled.img`
  width: 40px;
  border-radius: 50%;
  vertical-align: middle;
`
  
const Label = styled.span`
  color: ${colors.blue03};
  font-size: 18px;
  margin-left: 15px;
  vertical-align: middle;
`

export default Header