import styled from "styled-components";

export const Container = styled.div`
  animation: growIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  transform: scale(0.7);

  @keyframes growIn {
    to {
      transform: scale(1);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 5rem;

  & small {
    font-size: 1.2em;
  }
`;

export const SixToNine = styled.div`
  width: 50%;
  padding: 1rem 3rem;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 1px 2px 24px -8px rgba(0, 0, 0, 0.75);
`;

export const Over10 = styled.div`
  width: 50%;
  padding: 1rem 3rem;
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 1px 2px 24px -8px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.div`
  margin: 2rem 0 5rem;

  & h2 {
    font-size: 4em;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
    margin: 0;
  }

  & p {
    font-size: 1.8em;
    margin: 0;
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;

  & h3 {
    font-size: 2.5em;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
    margin: 0 0 3rem;
    background-color: #99fd02;
    text-align: center;
    border-radius: 10px;
    box-shadow: 10px 10px 13px -13px rgba(0, 0, 0, 0.4);
  }

  & h4 {
    font-size: 2em;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
    margin: 0;
    text-align: center;
    margin-bottom: 2rem;
    box-shadow: 1px 2px 24px -8px rgba(0, 0, 0, 0.4);
    padding: 0 1rem;
    border-radius: 10px;
  }

  & span {
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 400;
    margin: 0;
  }

  & p {
    font-size: 1.4em;
  }
`;

export const Info = styled.div`
  background-color: #99fd02;
  padding: 1rem;
  width: fit-content;
  border-radius: 10px;
`;
