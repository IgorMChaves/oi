
import * as S from "./styles" 
import logo  from "assets/img/cachorro 1.svg"
import logo2  from "assets/img/gato-manx 1.svg"

const Header = () => {
    return(
    <S.Header>
        <picture>
            <img src={logo} alt="Logo" />  
        </picture>
        <picture>
            <img src={logo2} alt="Logo2" />  
        </picture>

   


        <h1> Adote um amigo </h1>
    </S.Header>
    );
};

export default Header
