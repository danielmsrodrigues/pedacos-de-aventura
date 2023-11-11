import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import GlobalStyle, { Wrapper } from "./styles";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
