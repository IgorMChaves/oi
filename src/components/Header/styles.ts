
import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Header = styled.header`

  display: flex;
  border: 0.3rem solid ${colors.marrom};
  align-items: center;
  background-color: ${colors.rosa};

 
  
  picture {
    img {
      height: 50px;
      border: 0;
      margin: 5px;
    }
  
  }
  h1 {
    width: 100%;
    text-align: center;
    color: ${colors.marrom};
  }
`