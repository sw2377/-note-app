import { useParams, useNavigate } from "react-router-dom";
import useCreateNote from "../hooks/useCreateNote";
import styled from "styled-components";
import ActionButton from "../componenets/common/ActionButton";

const Header = () => {
  const navigate = useNavigate();
  const { notebook } = useParams();

  const { handleCreateNote } = useCreateNote();

  const handleCreateNoteClick = () => {
    if (notebook) {
      const createdNoteId = handleCreateNote(notebook);
      navigate(`${notebook}/${createdNoteId}`);
    } else {
      window.alert("Create a Notebook first, please.");
    }
  };

  return (
    <HeaderWrapper>
      <ButtonArea>
        <ActionButton handleClick={handleCreateNoteClick}>New Note</ActionButton>
      </ButtonArea>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  /* height: 40px; */
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid var(--color-line);
`;

const ButtonArea = styled.div`
  text-align: right;
`;

export default Header;
