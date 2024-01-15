import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useStore } from "../store/notebooks";
import useCreateNote from "../hooks/useCreateNote";
import NoContents from "./NoContents";
import NoteList from "../componenets/note/NoteList";
import NoteEditor from "../componenets/note/lexicalEditor/Editor";
import Modal from "../componenets/common/Modal";

const NoteContainer = () => {
  const { notebooks } = useStore();
  const { notebook, id } = useParams();
  const { handleCreateNote } = useCreateNote();
  const navigate = useNavigate();
  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 선택한 노트북의 노트 리스트
  const notelist = notebooks.filter(each => each.name === notebook)[0]?.notelist;

  // 노트북의 노트리스트 중 선택한 노트
  const selectedNote = () => {
    if (notebook && id) {
      return notelist.find(note => note.id.toString() === id);
    }

    if (notebook && !id) {
      return notelist[0];
    }
  };

  // 첫 진입시, notebook과 note가 있다면 보여준다.
  useEffect(() => {
    if (selectedNote()) {
      navigate(`${notebook}/${selectedNote()?.id}`);
    }

    if (location.pathname === "/" && notebooks.length) {
      const latestNotebook = notebooks[0].name;
      navigate(`${latestNotebook}`);
    }
  }, [location.pathname]);

  const handleCreateNoteClick = () => {
    if (notebook) {
      const createdNoteId = handleCreateNote(notebook);
      navigate(`${notebook}/${createdNoteId}`);
    }
  };

  return (
    <div className="note-container">
      {/* 노트북이 하나도 없다면, NoContents를 보여준다 */}
      {!notebooks.length ? (
        <NoContents
          text="You can organize notes of same topic into notebooks"
          title="Create New Notebook"
          handleClick={() => setIsModalOpen(true)}
        />
      ) : null}
      {/* 노트북은 있지만 노트가 없다면, NoContents를 보여준다. */}
      {notebooks.length && !notelist?.length ? (
        <NoContents
          text="Have a thought to jot down? Tap on the button below."
          title="New Note"
          handleClick={handleCreateNoteClick}
        />
      ) : null}
      {/* 노트북과 노트가 있다면, NoteList와 Note를 보여준다. */}
      {notebooks.length && notelist?.length ? (
        <>
          <NoteList notelist={notelist} />
          {selectedNote() ? (
            <NoteEditor note={selectedNote() || { id: 0, title: "", content: "", date: "" }} />
          ) : null}
        </>
      ) : null}

      {/* Create Notebook Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalTitle={"Create New Notebook"}
      />
    </div>
  );
};

export default NoteContainer;
