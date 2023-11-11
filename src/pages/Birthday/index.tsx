import {
  Container,
  Content,
  Info,
  Over10,
  SixToNine,
  Title,
  Wrapper,
} from "./styles";

function Birthday() {
  return (
    <>
      <Container>
        <Title>
          <h2>Aniversários</h2>
          <p>Um dia especial com os teus amigos!</p>
        </Title>
        <Wrapper>
          <SixToNine>
            <Content>
              <h3>5 a 9 anos</h3>
              <h4>5 e 6 anos</h4>
              <span>Jogo do Zimmo + Slide</span>
              <p>
                <strong>Jogo de Perdidos e Achados do Zimmo:</strong> No parque
                vive um duende, muito brincalhão e traquinas, chamado Zimmo!
                Certo dia bebeu água da ribeira e ficou tão confuso que tudo
                perdeu! O que será que o Zimmo perdeu? Vamos procurar e tornar o
                duende feliz! Jogo de pistas onde os participantes terão que
                encontrar os pertences (roupas, acessórios e outros) do Duende
                Zimmo. Uma aventura pelo parque com animação, criatividade,
                espírito de equipa e amizade.
              </p>
              <Info>
                <small>Duração: 2 horas</small>
                <br />
                <small>PVP 16€ /pax</small>
                <br />
                <small>Nº. Minímo de Participantes: 10</small>
              </Info>
            </Content>
            <Content>
              <h4>6 a 9 anos</h4>
              <span>
                Arborismo Percurso Azul + Quiz Aventura ou Caça ao Tesouro{" "}
              </span>
              <p>
                <strong>Arborismo Percurso Azul:</strong> Atividade de aventura
                que consiste no caminhar ao longo de um percurso de pontes
                suspensas, todas com diferentes graus de dificuldade. Os
                participantes só precisam de alguma concentração, equilíbrio e
                coragem.
                <br />
                <br />
                <strong> Quiz Aventura:</strong> Jogo de equipa que engloba um
                circuito de orientação dinamizado com diversos jogos mentais e
                fisícos. A leitura do mapa, a rapidez de orientação e o número
                de recompensas ganhas, definirá a equipa vencedora! O grau de
                dificuldade deste jogo depende da idade dos participantes.
              </p>
              <Info>
                <small>Duração: 2 horas</small>
                <br />
                <small>PVP 15€ /pax</small>
                <br />
                <small>Nº. Minímo de Participantes: 10</small>
              </Info>
            </Content>
          </SixToNine>
          <Over10>
            <Content>
              <h3>A partir de 10 anos</h3>
              <h4>Mais de 10 anos</h4>
              <span>Arborismo Percurso Vermelho + Quiz Aventura </span>
              <p>
                <strong>Percurso Vermelho:</strong> Arborismo para jovens
                aventureiros! Atividade de aventura que consiste em caminhar ao
                longo de um percurso de pontes suspensas, todas com diferentes
                graus de dificuldade. Percurso com desafio avançado onde os
                participantes precisam de concentração, equilíbrio, coragem e
                bom cumprimento das regras de segurança.
                <br />
                <br />
                <strong>Quiz Aventura:</strong> Jogo de equipa que engloba um
                circuito de orientação dinamizado com diversos jogos mentais e
                fisícos. A leitura do mapa, a rapidez de orientação e o número
                de recompensas ganhas, definirá a equipa vencedora! O grau de
                dificuldade deste jogo depende da idade dos participantes.
              </p>
              <Info>
                <small>Duração: 2 horas</small>
                <br />
                <small>PVP 15€ /pax</small>
                <br />
                <small>Nº. Minímo de Participantes: 10</small>
              </Info>
            </Content>
            <Content>
              <h4>Mais de 13 anos</h4>
              <span>Arborismo Percurso Vermelho + Jantar</span>
              <p>
                <strong>Aniversários Sunset:</strong> Diversão e aventura ao pôr
                do Sol. Reúne os teus amigos e prolonga o teu dia. Que tal uma
                festa sunset para celebrar?! Aventura, petisquinhos leves e
                bebidas frescas. Sextas e Sábados a partir das 19h.
              </p>
              <Info>
                <small>Valor sob consulta.</small>
              </Info>
            </Content>
          </Over10>
        </Wrapper>
      </Container>
    </>
  );
}

export default Birthday;
