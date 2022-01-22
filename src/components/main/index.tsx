import * as S from "./styles";
import gata from "assets/img/Imagem_Zukinha.svg";


const Main = () => {
  return (
    <S.Main>
      <div
        className="bg_image"
        style={{
          backgroundImage: `url(${gata})`,
          height: "70vh",
          color: "#f5f5f5"
        }}
     >


      <h1>Doe seu lar,</h1>
      <h1>adote um animalzinho</h1>
      <h1>Adoções somente em </h1>
      <h1>Minas gerais</h1>
    </div>
    </S.Main> 
  )
};

export default Main