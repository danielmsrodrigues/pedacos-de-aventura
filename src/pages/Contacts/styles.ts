import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  animation: growIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  transform: scale(0.7);

  & iframe {
    width: 80%;
    height: 100%;
  }

  @keyframes growIn {
    to {
      transform: scale(1);
    }
  }
`;

export const LeftCol = styled.div`
  width: 40%;
  position: relative;

  & p,
  & span {
    font-size: 2em;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 3px;
    margin: 0;
    opacity: 0.7;
  }

  & span {
    font-size: 4em;
    opacity: 1;
  }
`;

export const Title = styled.div`
  margin-bottom: 5rem;
`;

export const Info = styled.div`
  margin-top: 5rem;

  & p {
    opacity: 1;
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: normal;
    text-transform: none;
  }

  & a {
    color: black;
  }

  & small {
    font-size: 1em;
  }
`;

export const RightCol = styled.div`
  width: 60%;
  text-align: right;
`;

export const Form = styled.form`
  & input {
    padding: 1rem;
    border-radius: 2px;
    border: 1px solid #e1e1e1;
    display: block;
    margin: 0 0 1rem;
    width: 100%;
    outline: none;
    font-family: inherit;
  }

  & textarea {
    width: 100%;
    border: 1px solid #e1e1e1;
    font-family: inherit;
    padding: 1rem;
    border-radius: 2px;
    resize: none;
    outline: none;
  }

  & small {
    font-size: 1em;
  }

  & button {
    width: 100%;
    padding: 1rem;
    background-color: rgb(153, 253, 2);
    border: none;
    font-size: 1.4em;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    margin-top: 1rem;

    &:hover {
      background: rgb(137, 225, 5);
    }
  }
`;
