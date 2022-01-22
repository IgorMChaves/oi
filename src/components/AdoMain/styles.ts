import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const AdoMain = styled.main`
  background-color: ${colors.rosa};
  border: 0.3rem solid ${colors.marrom};
  display: block;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  picture{
    img {
    width: 10%;
    align-items: center;
    margin-left: 50px;
      }
    }

  h5 {
    margin-left: 24px;
    font-size: 16px;
    color: ${colors.marrom};
  }
`