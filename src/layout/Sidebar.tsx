import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useStore } from "../store/notebooks";
import styled from "styled-components";

import Modal from "../componenets/common/Modal";

const Sidebar = () => {
  const { notebooks, removeNotebook } = useStore();
  const { notebook } = useParams();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedNotebook = notebooks.find(each => each.name === notebook);
  // console.log(selectedNotebook);

  const openCreateNotebookModal = () => {
    setIsModalOpen(true);
  };

  const handleRemoveNotebook = (targetId: number) => {
    if (
      window.confirm(
        "노트북을 삭제하면 해당 노트북의 노트들이 모두 삭제됩니다. 정말로 삭제하시겠습니까?",
      )
    ) {
      removeNotebook(targetId);
      navigate("/");
    }
  };

  return (
    <SidebarWrapper className="sidebar">
      <Area>
        <TitleArea>
          <Title>NOTEBOOKS</Title>
          <CreateNotebookBtn onClick={openCreateNotebookModal}>+</CreateNotebookBtn>
        </TitleArea>
        <NoteBookList>
          {notebooks.map(notebook => (
            <NoteBookListItem
              key={notebook.id}
              className={
                selectedNotebook && selectedNotebook.name === notebook.name ? "selected" : ""
              }
            >
              <Link to={notebook.name}>{notebook.name}</Link>
              <RemoveNotebookBtn
                onClick={() => {
                  handleRemoveNotebook(notebook.id);
                }}
              >
                ×
              </RemoveNotebookBtn>
            </NoteBookListItem>
          ))}
        </NoteBookList>
      </Area>

      {/* Create Notebook Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalTitle={"Create New Notebook"}
      />
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.nav`
  overflow-y: auto;
  border-right: 1px solid var(--color-line);
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

const Title = styled.div`
  color: var(--color-blue);
`;

const CreateNotebookBtn = styled.button`
  font-size: 1.8rem;
  color: var(--color-blue);
`;

const NoteBookList = styled.ul`
  /* margin-top: 8px; */
`;

const NoteBookListItem = styled.li`
  position: relative;
  /* padding: 8px 20px; */

  &:hover {
    & > button {
      opacity: 1;
    }
  }

  &:hover,
  &.selected {
    background-color: var(--color-bg);
  }

  & > a {
    padding: 8px 32px 8px 20px;
    word-break: break-all;
    overflow-wrap: break-word;
  }
`;

const RemoveNotebookBtn = styled.button`
  opacity: 0;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-gray);
  color: var(--color-white);
  font-size: 1.2rem;
  transition: opacity 0.2s ease;
`;

export default Sidebar;
