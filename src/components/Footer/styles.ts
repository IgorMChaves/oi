import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Footer = styled.footer`
  border: 0.3rem solid ${colors.marrom};
  background-color: ${colors.rosa};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    margin: 10px;  
    width: 50%;
    text-align: center;
  }
 
`

export const A = styled.a`
  margin: 0 auto;
`;