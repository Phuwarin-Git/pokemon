import styled from "styled-components";

const Name = styled.p`
  font-size: 35px;
  font-weight: bold;
  font-family: "Copperplate";
  color: black;
  margin-top: 1%;
  text-shadow: 2px 2px 5px red;

  @media only screen and (max-width: 415.9px) {
    margin-top: -1%;
  }
`;

export default Name;
