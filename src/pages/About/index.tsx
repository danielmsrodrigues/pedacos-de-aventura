import { LeftCol, Wrapper } from "./styles";
import Img from "../../assets/img1.jpg";

function About() {
  return (
    <Wrapper>
      <LeftCol className="left-col">
        <h2>Quem Somos</h2>
        <p>
          A Pedaços de Aventura, Lda. é uma aposta na Animação Turística sediada
          em Cascais que inaugurou a sua atividade em Agosto de 2011 e é
          constituída por uma equipa jovem, dinâmica e com formação na área de
          desportos de aventura.
        </p>

        <h3>Missão e Objetivos</h3>
        <p>
          A Pedaços, visa promover o contacto com a natureza, o respeito pelo
          ambiente e a integração nos espaços verdes. Procuramos promover um
          estilo de vida saudável, através de práticas desportivas de aventura,
          procurando sempre ajudar a desenvolver as capacidades motoras e
          psicológicas dos participantes. Procuramos ainda fomentar o
          desenvolvimento do espírito de equipa, a união e a cooperação na
          realização de actividades de team building, tanto para colegas de
          trabalho como para colegas de escola ou mesmo amigos.
        </p>

        <h3>Localização</h3>
        <p>
          Desenvolvemos as nossas atividades no <strong>Parque Palmela</strong>{" "}
          em <strong>Cascais</strong>, parque público localizado a 5 minutos da
          estação de comboios.
          <br />O Parque possui caraterísticas únicas que nos permitem
          desenvolver programas lúdico-pedagógicos que potenciam diversas
          sensações e uma forte integração no meio natural, fomentando a
          importância da preservação ambiental.
        </p>
      </LeftCol>
      <div className="right-col">
        <img src={Img} alt="" />
      </div>
    </Wrapper>
  );
}

export default About;
