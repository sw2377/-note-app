import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useStore } from "../store/notebooks";

import Modal from "../componenets/common/Modal";

const Sidebar = () => {
  const { notebooks, removeNotebook } = useStore();
  const { notebook } = useParams();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedNotebook = notebooks.find(each => each.name === notebook);
  console.log(selectedNotebook);

  const openCreateNotebookModal = () => {
    setIsModalOpen(true);
  };

  const handleRemoveNotebook = (targetId: number) => {
    console.log(targetId);
    removeNotebook(targetId);
    navigate("/");
  };

  return (
    <SidebarWrapper>
      <Area>
        <TitleArea>
          <Title>NOTEBOOKS</Title>
          <CreateNotebookBtn onClick={openCreateNotebookModal}>
            +
          </CreateNotebookBtn>
        </TitleArea>
        <NoteBookList>
          {notebooks.map(notebook => (
            <NoteBookLIstItem
              key={notebook.id}
              className={
                selectedNotebook && selectedNotebook.name === notebook.name
                  ? "selected"
                  : ""
              }
            >
              <Link to={notebook.name}>{notebook.name}</Link>
              <RemoveNotebookBtn
                onClick={() => {
                  handleRemoveNotebook(notebook.id);
                }}
              >
                X
              </RemoveNotebookBtn>
            </NoteBookLIstItem>
          ))}
        </NoteBookList>
      </Area>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalTitle={"Create New Notebook"}
      />
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.nav`
  border: 1px solid #ccc;
`;

const Area = styled.div`
  margin-top: 20px;
`;
const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Title = styled.h2`
  color: var(--color-blue);
`;

const CreateNotebookBtn = styled.button`
  color: var(--color-blue);
`;

const NoteBookList = styled.ul`
  /* margin-top: 8px; */
`;

const NoteBookLIstItem = styled.li`
  display: flex;
  justify-content: space-between;
  /* padding: 8px 20px; */

  &:hover {
    & > button {
      display: block;
    }
  }

  &:hover,
  &.selected {
    background-color: var(--color-bg);
  }

  & > a {
    /* border: 1px solid blue; */
    padding: 8px 20px;
  }
`;

const RemoveNotebookBtn = styled.button`
  display: none;
  margin-right: 12px;
`;

export default Sidebar;
