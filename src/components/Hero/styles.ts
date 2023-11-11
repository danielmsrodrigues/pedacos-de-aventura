import styled from "styled-components";
import Img1 from "../../assets/img5.jpg";
import Img2 from "../../assets/img7.jpg";
import Img3 from "../../assets/team-building.jpg";

export const HeroWrapper = styled.div`
  display: flex;
  gap: 8em;
  margin-top: 15em;
  animation: growIn 2s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  transform: scale(0.4);

  & h1 {
    font-size: 5rem;
    font-family: "Poppins";
    font-weight: normal;
    margin: 0;
    line-height: 100%;
  }

  @keyframes growIn {
    to {
      transform: scale(1);
    }
  }
`;

export const LeftCol = styled.div`
  width: 45%;

  & p {
    font-size: 1.8rem;
    opacity: 0.8;
  }
`;

export const RightCol = styled.div`
  flex-grow: 1;
  display: grid;
  gap: 2.3em;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    "left ."
    "left .";
`;

export const Card = styled.div`
  border-radius: 0.8em;
  padding: 1.1em;
  display: flex;
  align-items: end;
  background-size: 195%;
  transition: background-size 800ms;
  box-shadow: 10px 10px 29px -13px rgba(0, 0, 0, 0.75);

  &:hover {
    background-size: 205%;
  }

  &.card1 {
    grid-area: left;
    background-image: url(${Img1});
    background-position: center;
  }

  &.card2 {
    background-image: url(${Img2});
    background-position: 50% 50%;
  }

  &.card3 {
    background-image: url(${Img3});
    background-position: center;
  }
`;

export const CardDetails = styled.div`
  background: white;
  border-radius: 0.6em;
  padding: 2em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 800ms;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  & span {
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

export const CtaBtns = styled.div`
  display: flex;
  gap: 2em;
  margin: 5em 0;
`;

export const PrimaryCta = styled.a`
  background-color: rgb(153, 253, 2);
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  border-radius: 10px;
  padding: 1em 2em;
  box-shadow: 10px 10px 13px -13px rgba(0, 0, 0, 0.4);

  &:hover {
    background: rgb(137, 225, 5);
  }
`;

export const SecondaryCta = styled.a`
  display: flex;
  gap: 2em;
  font-size: 1.8rem;
  text-decoration: none;
  color: black;
  display: block;
  padding: 1em 0;

  &:hover {
    text-decoration: underline;
  }

  & svg {
    margin-left: 0.5em;
    width: 20px;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(10px);
    }
  }
`;

export const Ratings = styled.div`
  display: flex;
  gap: 3em;
  padding: 5em;
  border: 1px solid black;
  border-radius: 0.8em;
  position: relative;
  box-shadow: 10px 10px 29px -13px rgba(0, 0, 0, 0.75);
`;

export const Stars = styled.p`
  font-size: 3.3rem;
  margin: 0;
  font-weight: 200;
  line-height: 100%;
  display: flex;

  & svg {
    margin-left: 0.3em;
  }
`;

export const Details = styled.p`
  font-size: 1.4rem;
  margin: 0;
`;
