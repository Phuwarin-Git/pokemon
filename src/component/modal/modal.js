import React from "react";
import Modal from "react-modal";
import Name from "./name.view";
import CloseButton from "../button/closeButton";
import Button from "../button/index.view";
import Details from "../picture/details";
import "../../page/pokedexPage.view.css";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     transform: "translate(-50%, -50%)",
//     borderRadius: "19px",
//     width: "45%",
//     height: "60%",
//   },
// };

const CardModal = ({ pic, weight, height, name }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button className="butRes" onClick={openModal}>
        Details
      </Button>
      <Modal
        className="modalRes"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="modal"
      >
        <CloseButton onClick={closeModal}>X</CloseButton>
        <div>
          <center>
            <Name>{name}</Name>
            <Details src={pic} />
            <p>Weight : {weight}</p>
            <p>Height : {height}</p>
          </center>
        </div>
      </Modal>
    </div>
  );
};

export default CardModal;
