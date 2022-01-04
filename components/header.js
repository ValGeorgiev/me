import styled from "styled-components"
import colors from "../styles/colors"

const Header = () => {
  return (
    <Wrapper>
      <a href="/">
        <Image src="/images/me-hq.jpg" alt="Valentin Georgiev" />
        <Label>Val Georgiev</Label>
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 20px 40px;
  background: ${colors.white};
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