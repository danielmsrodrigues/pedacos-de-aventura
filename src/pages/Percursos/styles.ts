import styled from "styled-components";
import ImgBlue from "../../assets/img4.jpg";
import ImgRed from "../../assets/img5.jpg";

export const Content = styled.div`
  animation: growIn 1s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  transform: scale(0.7);

  & h1 {
    font-size: 4em;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 400;
  }

  & p {
    font-size: 1.4em;
  }

  & small {
    font-size: 1.2em;
  }

  @keyframes growIn {
    to {
      transform: scale(1);
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 4rem;
  margin-bottom: 5rem;
`;

export const Card = styled.div`
  position: relative;
  margin-top: 2rem;
  height: 50vh;
  width: 50%;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${ImgBlue});
    background-position: center;
    background-size: cover;
    filter: brightness(0.5);
    z-index: -1;

    &:hover {
      background-size: 205%;
    }
  }

  &.card-red::before {
    background: url(${ImgRed});
  }

  & h2,
  & span,
  & strong {
    position: relative;
    z-index: 1;
  }

  & h2 {
    font-size: 3em;
    color: white;
  }

  & span {
    font-size: 1.5em;
    color: white;
  }

  & strong {
    font-size: 1.4em;
  }
`;

export const Title = styled.div`
  margin: 2rem 4rem 0;
`;

export const CardDetails = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  background: white;
  border-radius: 0.6em;
  padding: 2em;
  width: 50%;
  align-items: center;
  justify-content: space-between;
  transition: transform 800ms;

  &:hover {
    transform: translateY(-10px);
  }

  & a {
    color: black;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: bold;
  }

  & p {
    font-size: 1.4rem;
    margin: 0;
  }
`;
