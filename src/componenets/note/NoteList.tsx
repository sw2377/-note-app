import { Link, useParams, useNavigate } from "react-router-dom";
import { NoteType } from "../../type/notebookTypes";

const NoteList = ({ notelist }: { notelist: NoteType[] }) => {
  // const { removeNote } = useStore();
  const { notebook } = useParams();
  const navigate = useNavigate();

  // 선택한 notebook의 notelist
  // const notelist: NoteType[] = notebooks.filter(
  //   each => each.name === notebook,
  // )[0].notelist;

  return (
    <div className="note-list">
      <h2 style={{ background: "grey", textAlign: "center" }}>{notebook}</h2>
      <div>
        <ul className="notelist">
          {notelist?.map(note => {
            const parsedEditorState = JSON.parse(note.content);
            const textNode =
              parsedEditorState.root?.children[0].children.filter(
                node => node.type === "text",
              )[1]?.text;
            // const contentNode =
            console.log("textNode", textNode);
            return (
              <li key={note.id} className="notelist-item">
                <Link to={`/${notebook}/${note.id}`}>
                  <div>
                    <h4 className="notelist-item-title">
                      {note.title ?? "New Note"}
                    </h4>
                    <p className="notelist-item-content">
                      {textNode ?? "No additional text"}
                    </p>
                    <p className="notelist-item-date">{note.date}</p>
                    <button
                      onClick={() => {
                        removeNote(note.id);
                        navigate(`/${notebook}`); // 이거 왜 작동안하는겨,,
                      }}
                      className="notelist-item-delete"
                    >
                      삭제하기
                    </button>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NoteList;
