import * as S from "./styles";
import gato from "assets/img/Haru.svg";


const AjudeMain = () => {
  return (
    <S.AjudeMain>
      <div
        className="bg_image"
        style={{
          backgroundImage: `url(${gato})`,
          height: "50vh",
          color: "#f5f5f5"
        }}
     >
      <h1>CÃOPADRINHESE</h1>
    
      <h1>Nossa instituição passa por dificuldades desde o começo. Em </h1>
      <h1>razão da quantidade de animais, os débitos relacioandos à</h1>
      <h1>vacinação, castração e cuidados em geral sempre foram altos,</h1>
      <h1>porém,com o crescimento do porjeto, esses númeors triplicaram, </h1>
      <h1>tornando impossível o trabalho do Adote Um Amigo sem ajuda de</h1>
      <h1>contribuinetes incríveis: os CÃOPADRINHOS.</h1>
      <h1>Quem visita nossa instituição sabe o quão bem cuidados nossos</h1>
      <h1>animais são. Investimos muito dinhero nesse projeto, e temos </h1>
      <h1>medo que um dia esse dinheiro venha a faltar,dessa forma, as </h1>
      <h1>doações regulares e/ou esporádicas de dinheiro, ração, roupinhas</h1>
      <h1>ou até mesmo trabalho voluntário, são extremamente essenciais</h1>
      
    </div>
    </S.AjudeMain> 
  )
};

export default AjudeMain