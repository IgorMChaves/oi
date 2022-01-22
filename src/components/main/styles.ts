import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  background-color: ${colors.rosa};
  border: 0.3rem solid ${colors.marrom};
  display: block;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  h1{
    width: 100%;
    font-size: 40px;
    text-align:right;
    color: ${colors.white};
    margin-right: 70px;
   
    }
`
