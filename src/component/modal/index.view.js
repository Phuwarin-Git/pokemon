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
  min-height: 20%;

  @media only screen and (max-width: 414px) {
    margin-top: 80%;
    min-width: 70%;
    min-height: 52%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 60%;
    width: 40%;
  }

  @media only screen and (min-width: 1440px) and (max-width: 2499px) {
    margin-top: 20%;
    width: 30% !important;
    min-height: 30%;
  }

  @media only screen and (min-width: 2500px) {
    margin-top: 30%;
    width: 20%;
    min-height: 30%;
  }
`;

export default StyleModal;
