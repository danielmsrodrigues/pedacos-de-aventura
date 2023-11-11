import Img from "../../assets/img4.jpg";
import { LeftCol, Wrapper } from "./styles";

function GroupsCompanies() {
  return (
    <>
      {" "}
      <Wrapper>
        <LeftCol className="left-col">
          <h2>Grupos & Empresas</h2>
          <p>
            O exercício realizado em ambientes naturais, está associado a uma
            maior sensação de revitalização, a um aumento da energia e a um
            envolvimento positivo! O Arborismo no Parque Palmela proporciona
            todas estas sensações ao seu grupo de trabalho.
            <br />
            Dispomos de um programa "non-stop", repleto de adrenalina, emoção e
            diversão, onde o espírito de equipa está sempre presente. Este
            programa é sempre ajustável às necessidades dos nossos clientes.
            <br />
            <br />
            Para mais informações contacte-nos.
          </p>
        </LeftCol>
        <div className="right-col">
          <img src={Img} alt="" />
        </div>
      </Wrapper>
    </>
  );
}

export default GroupsCompanies;
