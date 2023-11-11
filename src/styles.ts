import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
html{
    font-size: 62.5%
}

body{
    margin: 0;
    font-family: "Poppins", sans-serif;
}

*{
  box-sizing: border-box
}
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
