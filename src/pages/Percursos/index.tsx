import { Card, CardDetails, CardWrapper, Content, Title } from "./styles";

function Percursos() {
  return (
    <Content>
      <h1>Os nossos percursos</h1>
      <p>
        O objetivo principal desta atividade é a progressão ao longo de um
        circuito de pontes suspensas ao nível das arvores, constituídas por
        madeira e cabos de aço, todas elas com diferentes graus de dificuldade.
        Temos pontes originais e com dificuldades para pequenos e grandes
        aventureiros. Só precisam de concentração, equilíbrio e alguma coragem!
      </p>
      <CardWrapper>
        <Card className="card-blue">
          <Title className="title">
            <h2>Percurso Azul</h2>
            <span>
              Adultos e crianças a partir dos 5 anos (mínimo 1,10m altura)
            </span>
          </Title>
          <CardDetails className="card-details">
            <p> Dificuldade média/baixa</p>
            <p>Duração aproximada: 30min</p>
            <strong>PVP 8€</strong>
          </CardDetails>
        </Card>
        <Card className="card-red">
          <Title className="title">
            <h2>Percurso Vermelho</h2>
            <span>
              Adultos e crianças a partir dos 10 anos (mínimo 1,30m altura)
            </span>
          </Title>
          <CardDetails className="card-details">
            <p> Dificuldade média/alta</p>
            <p>Duração aproximada: 1 hora</p>
            <strong>PVP 13€</strong>
          </CardDetails>
        </Card>
      </CardWrapper>
      <small>
        <strong>Importante: </strong>A atividade inicia com uma breve formação
        sobre as regras de segurança, seguida de um exercício prático, de
        caráter obrigatório. A segurança é garantida através da supervisão
        atenta de monitores e do uso de equipamento de segurança adequado e
        certificado (arnês, mosquetões e roldana). Os percursos de Arborismo
        foram construídos de acordo com as normas europeias em vigor. A
        atividade está coberta pelos seguros necessários de acordo com o
        processo de licenciamento com base no Dec.Lei nº 108/2009.
        <br />
        <br />
        Com condições meteorológicas adversas (chuva e vento muito forte e/ou
        trovoada) a atividade será anulada. Em caso de chuva, a atividade
        realizar-se-á, sempre que esteja garantido o funcionamento da mesma com
        a máxima segurança.
      </small>
    </Content>
  );
}

export default Percursos;
