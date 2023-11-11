import {
  Content,
  FooterWrapper,
  MiddleCol,
  StyledNavLink,
  StyledNavLinkContainer,
} from "./styles";

type Page = {
  path: string;
  name: string;
};

function Footer() {
  const pages: Page[] = [
    {
      path: "/",
      name: "Página Inicial",
    },
    {
      path: "/arborismo",
      name: "Arborismo",
    },
    {
      path: "/percursos",
      name: "Percursos",
    },
    {
      path: "/sobre",
      name: "Sobre Nós",
    },
    {
      path: "/contactos",
      name: "Contactos",
    },
  ];

  return (
    <>
      <FooterWrapper>
        <Content className="content">
          <div className="col-1">
            <span>Contactos</span>
            <p>R. do Parque Palmela, 2750-461 Cascais</p>
            <p>+351 912 426 118</p>
            <br />
            <p>
              Este website é ficticio. Clique{" "}
              <a href="https://www.pedacosdeaventura.com/" target="_blank">
                aqui
              </a>{" "}
              para ser redirecionado/a para o website oficial.
            </p>
          </div>
          <MiddleCol className="col-2">
            <span>Links úteis</span>

            <nav>
              <StyledNavLinkContainer>
                {pages.map(({ path, name }) => (
                  <StyledNavLink
                    key={path}
                    to={path}
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    {name}
                  </StyledNavLink>
                ))}
              </StyledNavLinkContainer>
            </nav>
          </MiddleCol>
          <div className="col-3">
            <span>Siga-nos:</span>
            <p>Insta</p>

            <p>Face</p>
          </div>
        </Content>
      </FooterWrapper>
    </>
  );
}

export default Footer;
