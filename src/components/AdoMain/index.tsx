import * as S from "./styles";
import comp from "assets/img/Component 1.svg";
import compi from "assets/img/Component 2.svg";
import compo from "assets/img/Component 3.svg";



const AdoMain = () => {
  return (
    <S.AdoMain>
      <div>

      <br /><br />
     
      <picture>
        <img src={comp} alt= "componente1"/> 
        <h5> Condições para a adoção</h5>
      </picture>

      
      
      <picture>
        <img src={compi} alt= "componente2"/> 
        <h5> Animais para a adoção </h5>
      </picture>

     

    
      <picture>
        <img src={compo} alt= "componente3"/> 
        <h5> Como adotar </h5>
      </picture>

     
      <br /><br />
      
    </div>
    </S.AdoMain> 
  )
};

export default AdoMain