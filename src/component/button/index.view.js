import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: white;
  width: 70px;
  height: 30px;
  margin-bottom: -10px;
  text-align: center;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  background-color: #69a2ff;
  color: white;
  border-radius: 10px;

  @media only screen and (max-width: 415.9px) {
    margin-left: -20px;
    text-align: center;
  }
`;

export default Button;
