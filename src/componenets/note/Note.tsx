import { NoteType } from "../../type/notebookTypes";
import NoteEditor from "./lexicalEditor/Editor";

const Note = ({ note }: { note: NoteType }) => {
  return (
    <div className="note-item">
      <NoteEditor note={note} />
    </div>
  );
};

export default Note;
