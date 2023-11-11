import { Link } from "react-router-dom";
import {
  Card,
  CardDetails,
  CtaBtns,
  Details,
  HeroWrapper,
  LeftCol,
  PrimaryCta,
  Ratings,
  RightCol,
  SecondaryCta,
  Stars,
} from "./styles";

function Hero() {
  return (
    <>
      <HeroWrapper>
        <LeftCol className="left-col">
          <h1>Pedaços de Aventura</h1>
          <p>Arborismo, diversão e contacto com a Natureza!</p>
          <CtaBtns className="cta btns">
            <PrimaryCta href="#" className="primary-cta">
              Reserve Agora
            </PrimaryCta>
            <SecondaryCta href="#" className="secondary-cta">
              <Link
                to="/percursos"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Saber mais
              </Link>
              <svg viewBox="0 0 19 9" fill="none">
                <path
                  d="M18.3536 4.85355C18.5488 4.65829 18.5488 4.34171 18.3536 4.14645L15.1716 0.964466C14.9763 0.769204 14.6597 0.769204 14.4645 0.964466C14.2692 1.15973 14.2692 1.47631 14.4645 1.67157L17.2929 4.5L14.4645 7.32843C14.2692 7.52369 14.2692 7.84027 14.4645 8.03553C14.6597 8.2308 14.9763 8.2308 15.1716 8.03553L18.3536 4.85355ZM0 5H18V4H0V5Z"
                  fill="black"
                />
              </svg>
            </SecondaryCta>
          </CtaBtns>
          <Ratings className="rating">
            <Stars className="stars">
              4.6
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
                fill="#ffaa00"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </Stars>
            <Details className="details">
              Em 2023, <strong>96%</strong> dos nossos clientes ficaram
              satisfeitos.
            </Details>
          </Ratings>
        </LeftCol>
        <RightCol className="right-col">
          <Card className="card card1">
            <Link
              to="/percursos"
              style={{ textDecoration: "none", color: "black" }}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              <CardDetails className="card-details">
                <div>
                  <span>Percursos</span>
                  <p>Saber mais</p>
                </div>
              </CardDetails>
            </Link>
          </Card>
          <Card className="card card2">
            <Link
              to="/aniversarios"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardDetails className="card-details">
                <div>
                  <span>Aniversários</span>
                  <p>Saber mais</p>
                </div>
              </CardDetails>
            </Link>
          </Card>
          <Card className="card card3">
            <Link
              to="/grupos&empresas"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardDetails className="card-details">
                <div>
                  <span>Grupos e Empresas</span>
                  <p>Saber mais</p>
                </div>
              </CardDetails>
            </Link>
          </Card>
        </RightCol>
      </HeroWrapper>
    </>
  );
}

export default Hero;
