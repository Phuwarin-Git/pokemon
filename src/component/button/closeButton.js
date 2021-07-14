import styled from "styled-components";

const CloseButton = styled.button`
  background-color: red;
  color: white;
  margin-top: -20px;
  margin-left: 92%;
  border-radius: 5px;
  padding: 1.5px 8px;
  text-align: cneter;
  cursor: pointer;
  font-size: 15px;
  border: none;

  @media only screen and (max-width: 415.9px) {
    margin-top: 5%;
    margin-left: 84%;
    padding: 1px 8px;
  }
  @media only screen and (min-width: 416px) {
    margin-top: 5%;
    margin-left: 84%;
    padding: 1px 8px;
  }
`;

export default CloseButton;
