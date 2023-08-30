import Cabecalho from "./Components/Cabecalho";
import Conteudo from "./Components/Conteudo";
import Rodape from "./Components/Rodape";
import logoReact from "./assets/react.svg";

export default function App(){

  //Criando props para ser transmitido para um dos componentes filhos.
  let novoConteudo = "Nova notícia!"

  let altLogo = "Logomarca da Tecnologia React!"

  return (
    <>
      {/* Crie um cabeçalho com um h1, um titulo e uma lista com 3 itens. */}
      <Cabecalho/>
      {/* Crie uma Section com uma div e 3 paragrafos com texto lorem de 3 linhas */}
      <Conteudo novoProps={novoConteudo} uriLogoReact={logoReact} altLogo={altLogo}/>
      {/* Crie um rodape com um p e o codigo do simbolo de copyright mais o texto que se segue. "Todos os meus direitos reservados. 2023" */}
      <Rodape/>
    </>
  )
}