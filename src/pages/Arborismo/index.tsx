import { Book, LeftCol, Wrapper } from "./styles";
import Img from "../../assets/img3.jpg";

function Arborismo() {
  return (
    <Wrapper>
      <div className="right-col">
        <img src={Img} alt="" />
      </div>
      <LeftCol className="left-col">
        <h2>O que é o Arborismo?</h2>
        <p>
          Desde sempre que o topo das árvores foi o local escolhido pelos
          investigadores para estudar a fauna e flora das grandes florestas. Até
          meados dos anos 80, subiam, desciam vezes sem conta, até que se
          lembraram de criar uma forma mais simples de passar de árvore em
          árvore recorrendo a cordas e madeiras, nascendo assim o Arborismo.
          Anos mais tarde, a França e a Nova Zelândia adotaram a ideia das
          pontes suspensas entre as árvores e transformaram o Arborismo numa
          atividade desportiva. Desde então tem vindo a criar raízes em muitos
          locais e é sem dúvida uma atividade marcante para todas as idades.
        </p>

        <h3>Descrição da Atividade</h3>
        <p>
          O objetivo principal deste desporto é a progressão ao longo de um
          circuito de pontes suspensas ao nível das arvores, constituídas por
          madeira e cabos de aço, todas elas com diferentes graus de
          dificuldade. Temos pontes originais e com dificuldades para pequenos e
          grandes aventureiros. Só precisam de concentração, equilíbrio e alguma
          coragem!
        </p>

        <h3>Benefícios</h3>
        <p>
          Esta atividade para além da diversão e do contato com a natureza,
          promove entre os praticantes, auto-confiança, coordenação dos
          movimentos, concentração e equilíbrio, aspectos fundamentais para
          "superar os obstáculos" e mesmo os medos que possam existir.
        </p>

        <Book>
          <a href="#" className="primary-cta">
            Reserve Agora
          </a>
        </Book>
      </LeftCol>
    </Wrapper>
  );
}

export default Arborismo;
