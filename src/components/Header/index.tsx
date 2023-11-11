import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { HeaderWrapper, StyledNavLink, StyledNavLinkContainer } from "./styles";

type Page = {
  path: string;
  name: string;
};

function Header() {
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
    <HeaderWrapper>
      <Link to="/">
        <img src={Logo} alt="Pedaços de Aventura Logo" />
      </Link>

      <nav>
        <StyledNavLinkContainer>
          {pages.map(({ path, name }) => (
            <StyledNavLink key={path} to={path}>
              {name}
            </StyledNavLink>
          ))}
        </StyledNavLinkContainer>
      </nav>
    </HeaderWrapper>
  );
}

export default Header;
