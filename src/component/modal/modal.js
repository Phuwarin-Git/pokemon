import React from "react";
import Name from "./name.view";
import CloseButton from "../button/closeButton";
import Button from "../button/index.view";
import Details from "../picture/details";
import StyleModal from "./index.view";
import "../../page/pokedexPageRes.view.css";

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
      <StyleModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="modal"
      >
        <CloseButton onClick={closeModal}>X</CloseButton>
        <div>
          <center>
            <Name>{name}</Name>
            <Details src={pic} />
            <p>Weight : {weight}</p>
            <p>Height : {height}</p>
            <br />
          </center>
        </div>
      </StyleModal>
    </div>
  );
};

export default CardModal;
