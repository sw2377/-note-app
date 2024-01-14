import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../../store/notebooks";

import ActionButton from "./ActionButton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
}

const Modal = ({ isOpen, onClose, modalTitle }: ModalProps) => {
  const { notebooks, createNotebook } = useStore();

  const navigate = useNavigate();

  const [notebookName, setNotebookName] = useState("");
  const [isActiveButton, setIsActiveButton] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setNotebookName(value);
    value.length > 0 ? setIsActiveButton(true) : setIsActiveButton(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (notebookName.trim().length > 0) {
      const isDuplicateName = notebooks.some(
        notebook => notebook.name === notebookName.trim(),
      );

      if (isDuplicateName) {
        window.alert(
          `The name "${notebookName}" is already taken. Please choose a different name.`,
        );
      } else {
        createNotebook(notebookName);
        setNotebookName("");
        setIsActiveButton(false);
        onClose();
        navigate(`/${notebookName}`);
      }
    }
  };

  return isOpen ? (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalTitle>{modalTitle}</ModalTitle>
        {/* Form Area */}
        <Form onSubmit={handleSubmit}>
          <FormOption>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter notebook name"
              value={notebookName}
              onChange={handleInputChange}
            />
          </FormOption>
          <ButtonArea>
            <ActionButton type="submit" active={isActiveButton}>
              Create
            </ActionButton>
          </ButtonArea>
        </Form>
        {/* // Form Area */}
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
  border-radius: var(--border-radius);
  width: 100%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const ModalTitle = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
`;

// Form Style
const Form = styled.form``;

const FormOption = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  min-width: 80px;
  font-size: 1.4rem;
  font-weight: bold;
`;
const Input = styled.input`
  background-color: var(--color-bg);
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  padding-top: 12px;
  border-top: 1px solid var(--color-line);
`;

export default Modal;
