import styled from "styled-components";
import Modal from "react-modal";

const StyleModal = styled(Modal)`
  margin-top: 60%;
  margin-left: 50%;
  margin-bottom: auto;
  margin-right: auto;
  background-color: #fefefe;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  width: 40%;
  height: 50%;

  @media only screen and (max-width: 376px) {
    margin-top: 90%;
    width: 70%;
    height: 52%;
  }

  @media only screen and (max-width: 415.9px) {
    margin-top: 70%;
    width: 60%;
    height: 52%;
  }

  @media only screen and (min-width: 1023px) {
    margin-top: 50%;
    width: 30%;
    height: 50%;
  }

  @media only screen and (min-width: 1440px) {
    margin-top: 25%;
    width: 25%;
    height: 50%;
  }

  @media only screen and (min-width: 2500px) {
    margin-top: 25%;
    width: 20%;
    height: 30%;
  }
`;

export default StyleModal;
