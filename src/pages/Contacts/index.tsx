import { FormEvent, useState } from "react";
import { Form, Info, LeftCol, RightCol, Title, Wrapper } from "./styles";

function Contacts() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone(parseInt(""));
    setSubject("");
    setMessage("");
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(Number(e.target.value));
  };

  const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  return (
    <Wrapper>
      <LeftCol>
        <Title>
          <p>Tem alguma questão?</p>
          <span>Contacte-nos!</span>
        </Title>

        <Form action="post" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome *"
            required
            onChange={handleName}
            value={name}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email *"
            required
            onChange={handleEmail}
            value={email}
          />
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Nº Telemóvel"
            onChange={handlePhone}
            value={phone}
          />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Assunto *"
            required
            onChange={handleSubject}
            value={subject}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Mensagem *"
            onChange={handleMessage}
            value={message}
          />
          <small>Campos marcados com * são obrigatórios.</small>
          <button type="submit">Enviar</button>
        </Form>

        <Info>
          <p>
            <strong>Morada</strong>
          </p>
          <p>Av. Marginal - Cascais 38.70409104 -9.41262782</p>
          <br />
          <p>
            <strong>Contactos</strong>
          </p>
          <p>
            <a href="mailto:info@pedacosdeaventura.com">
              info@pedacosdeaventura.com
            </a>{" "}
            |{" "}
            <a href="mailto:reservas@pedacosdeaventura.com">
              reservas@pedacosdeaventura.com
            </a>
          </p>
          <p>
            <a href="tel:+351916281252">+351 912 426 118</a>
          </p>
          <br />
          <p>
            <strong>Horário</strong>
          </p>
          <p>Verão (1 de Abril a 31 de Outubro): 10:30 às 18:00 </p>
          <p>Inverno (1 de Novembro a 31 de Março): 10:30 às 17:00 </p>
          <small>
            <strong>Importante:</strong> Última marcação 1 hora antes do horário
            referido acima.
          </small>
        </Info>
      </LeftCol>

      <RightCol>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.6132708053!2d-9.41529962362325!3d38.70372675810766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ec433115d03e9%3A0x1346fd29d6690162!2sPeda%C3%A7os%20de%20Aventura!5e0!3m2!1spt-PT!2spt!4v1699702683181!5m2!1spt-PT!2spt"
          width="400"
          height="550"
          style={{ border: "none" }}
          loading="lazy"
        ></iframe>
      </RightCol>
    </Wrapper>
  );
}

export default Contacts;
