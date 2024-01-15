import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NoteType } from "../../type/notebookTypes";
import { useStore } from "../../store/notebooks";

const NoteList = ({ notelist }: { notelist: NoteType[] }) => {
  // console.log("notelist", notelist);
  const { removeNote } = useStore();
  const { notebook, id } = useParams();
  const navigate = useNavigate();

  const selectedNote = notelist?.find(each => each.id.toString() === id);

  const handleRemoveNote = async (targetId: number) => {
    if (window.confirm("노트를 삭제하시겠습니까?")) {
      await removeNote(targetId);
      navigate(`/${notebook}`);
    }
  };

  return (
    <NoteListWrapper className="note-list">
      <NoteBookTitle>{notebook}</NoteBookTitle>
      <NoteListOfSelectedNoteBook>
        {notelist?.map(note => {
          const parsedEditorState = JSON.parse(note.content);
          const textNode: string = parsedEditorState.root?.children[0].children.filter(
            (node: any) => node.type === "text",
          )[1]?.text;
          return (
            <NoteListItem
              key={note.id}
              className={selectedNote && selectedNote.id === note.id ? "selected" : ""}
            >
              <StyledLink to={`/${notebook}/${note.id}`}>
                <NoteListItemWrapper>
                  <NoteListItemTitle>{note.title ?? "New Note"}</NoteListItemTitle>
                  <NoteListItemContent>{textNode ?? "No additional text"}</NoteListItemContent>
                  <NoteListItemDate>{note.date}</NoteListItemDate>
                  <RemoveNoteBtn
                    onClick={() => {
                      handleRemoveNote(note.id);
                    }}
                  >
                    ×
                  </RemoveNoteBtn>
                </NoteListItemWrapper>
              </StyledLink>
            </NoteListItem>
          );
        })}
      </NoteListOfSelectedNoteBook>
    </NoteListWrapper>
  );
};

const NoteListWrapper = styled.div`
  overflow-y: auto;
  border: 1px solid var(--color-line);
`;

const NoteBookTitle = styled.h2`
  z-index: 10;
  position: sticky;
  top: 0;
  padding: 8px 16px;
  background-color: var(--color-bg);
`;

const NoteListOfSelectedNoteBook = styled.ul``;
const NoteListItem = styled.li`
  border-bottom: 1px solid var(--color-line);
  height: 120px;

  &.selected {
    background-color: var(--color-lightblue);
  }

  &:hover {
    & button {
      display: block;
    }
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 20px 16px;
`;

const NoteListItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NoteListItemTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: 1.4rem;
  font-weight: 600;
`;

const NoteListItemContent = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 10px 0;
  font-size: 1.4rem;
`;

const NoteListItemDate = styled.span`
  font-size: 12px;
  color: var(--color-gray);
`;

const RemoveNoteBtn = styled.button`
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  padding: 4px;
`;

export default NoteList;
