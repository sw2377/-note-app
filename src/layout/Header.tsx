import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../store/notebooks";

import ActionButton from "../componenets/common/ActionButton";

const Header = () => {
  const { createNote } = useStore();
  const navigate = useNavigate();
  const { notebook } = useParams();

  const handleCreateNote = () => {
    if (notebook) {
      const initialContent = JSON.stringify({
        root: {
          children: [
            {
              children: [{ type: "linebreak", version: 1 }],
              direction: null,
              format: "",
              indent: 0,
              type: "paragraph",
              version: 1,
            },
          ],
          direction: null,
          format: "",
          indent: 0,
          type: "root",
          version: 1,
        },
      });

      const note = {
        id: Date.now(),
        title: "New Note",
        content: initialContent,
        date: new Date().toLocaleString(),
      };
      createNote(notebook, note);

      navigate(`${notebook}/${note.id}`);
    }
  };

  return (
    <HeaderWrapper>
      <ActionButton handleClick={handleCreateNote}>New Note</ActionButton>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  height: 40px;
`;

export default Header;
