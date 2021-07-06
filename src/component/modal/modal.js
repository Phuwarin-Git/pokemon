import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import IMG from '../picture/index.view';
import CloseButton from '../button/closeButton';
import Button from '../button/index.view'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '19px',
        width: '45%',
        height: '60%'
    },
};

const CardModal = ({ pic, weight, height, name, }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Button onClick={openModal}>Details</Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="modal"
            >
                <CloseButton onClick={closeModal}>X</CloseButton>
                <div>
                    <center>
                        <IMG src={pic} />
                        <p>Name : {name}</p>
                        <p>Weight : {weight}</p>
                        <p>Height : {height}</p>
                    </center>
                </div>
            </Modal>
        </div>
    );
}

export default CardModal;