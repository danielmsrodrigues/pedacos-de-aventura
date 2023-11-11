import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
  animation: growIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  transform: scale(0.7);

  & img {
    border-radius: 10px;
    box-shadow: 12px 12px 16px -13px rgba(0, 0, 0, 0.9);
  }

  @keyframes growIn {
    to {
      transform: scale(1);
    }
  }
`;

export const LeftCol = styled.div`
  width: 50%;

  & h2,
  & h3 {
    font-size: 4em;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
    margin-top: 0;
  }

  & h3 {
    font-size: 2em;
    margin-top: 3rem;
  }

  & p {
    font-size: 1.5em;
  }
`;

export const Book = styled.button`
  width: 100%;
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  background-color: rgb(153, 253, 2);
  border-radius: 10px;
  padding: 1em 2em;
  box-shadow: 10px 10px 13px -13px rgba(0, 0, 0, 0.4);

  &:hover {
    background: rgb(137, 225, 5);
  }

  & a {
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
