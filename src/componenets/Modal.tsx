import { ReactNode } from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, modalTitle, children }: ModalProps) => {
  return isOpen ? (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalTitle>{modalTitle}</ModalTitle>
        {children}
      </ModalContent>
    </ModalOverlay>
  ) : null;
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  background: var(--color-white);
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const ModalTitle = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
`;

export default Modal;
